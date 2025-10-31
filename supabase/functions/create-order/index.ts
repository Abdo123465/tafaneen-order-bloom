import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.44.2";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

// Define the structure for a single order item using Zod for validation.
const OrderItemSchema = z.object({
  id: z.string(), // Product ID
  quantity: z.number().int().positive(), // Quantity must be a positive integer
});

// Define the structure for the incoming request body.
const OrderSchema = z.object({
  items: z.array(OrderItemSchema),
});

// In-memory store for rate limiting.
const userRequestTimestamps = new Map<string, number[]>();

serve(async (req) => {
  // Handle CORS preflight requests to allow the browser to make the actual request.
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    // Initialize the Supabase client with the service role key to have admin privileges.
    // This is necessary to bypass RLS for trusted server-side operations.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // --- Authentication ---
    // Get the user's JWT from the Authorization header.
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Missing Authorization Header");
    }

    // Retrieve the user's data based on the JWT.
    // If the token is invalid or expired, this will throw an error.
    const { data: { user } } = await supabase.auth.getUser(authHeader.replace("Bearer ", ""));
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // --- Rate Limiting ---
    const now = Date.now();
    const timestamps = userRequestTimestamps.get(user.id) || [];
    const requestsInLastMinute = timestamps.filter(ts => now - ts < 60000).length;

    if (requestsInLastMinute >= 10) {
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    timestamps.push(now);
    userRequestTimestamps.set(user.id, timestamps);

    // --- Input Validation ---
    // Parse and validate the request body against the Zod schema.
    const { items } = OrderSchema.parse(await req.json());
    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: "Cart cannot be empty" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // --- Server-Side Price Calculation ---
    // Extract all unique product IDs from the cart items.
    const productIds = items.map((item) => item.id);

    // Fetch the product details from the database for the given IDs.
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("id, price")
      .in("id", productIds);

    if (productsError) {
      throw productsError;
    }

    // Create a price map for quick and easy lookup.
    const priceMap = new Map(products.map((p) => [p.id, p.price]));

    // Calculate the total price on the server to prevent tampering.
    let total_price = 0;
    for (const item of items) {
      const price = priceMap.get(item.id);
      // If a product ID is invalid or not found, return an error.
      if (price === undefined) {
        return new Response(JSON.stringify({ error: `Invalid product ID: ${item.id}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      total_price += price * item.quantity;
    }

    // --- Database Transaction ---
    // 1. Create the main order record in the 'orders' table.
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_price,
      })
      .select()
      .single();

    if (orderError) {
      throw orderError;
    }

    // 2. Prepare the records for the 'order_items' table.
    // It's crucial to use the server-verified price, not the client-sent price.
    const orderItemsData = items.map((item) => ({
      order_id: order.id,
      product_id: item.id,
      quantity: item.quantity,
      price: priceMap.get(item.id), // Use the trusted price from the database
    }));

    // 3. Insert all items into the 'order_items' table.
    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItemsData);

    if (itemsError) {
      throw itemsError;
    }

    // --- Return Response ---
    // If everything is successful, return the new order details.
    return new Response(JSON.stringify({ order_id: order.id, total_price }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });

  } catch (err) {
    // Handle potential errors, such as Zod validation errors or database errors.
    console.error(err);
    const errorMessage = err instanceof z.ZodError ? err.issues : err.message;
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
       },
    });
  }
});
