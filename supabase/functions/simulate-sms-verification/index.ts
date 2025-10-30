import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod";

// Note: This function simulates SMS sending. No actual SMS is sent.

const appUrl = Deno.env.get("APP_URL") || "http://localhost:3000";

const corsHeaders = {
  "Access-Control-Allow-Origin": appUrl,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Define the schema for the request body
const SmsVerificationSchema = z.object({
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"), // E.164 format regex
  verificationCode: z.string().length(6, "Verification code must be 6 digits"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

type SmsVerificationRequest = z.infer<typeof SmsVerificationSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Authentication
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
    );
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    // 2. Input Validation
    const body = await req.json();
    const validationResult = SmsVerificationSchema.safeParse(body);

    if (!validationResult.success) {
      return new Response(JSON.stringify({ error: "Invalid input", details: validationResult.error.flatten() }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    
    const { phone, verificationCode, name }: SmsVerificationRequest = validationResult.data;

    console.log("Sending verification SMS for phone:", phone);

    // For now, we'll simulate SMS sending by logging the verification code
    // In a real implementation, you would integrate with an SMS service
    console.log(`SMS Verification Code for ${phone}: ${verificationCode}`);
    
    // 3. Remove sensitive data from response
    const response = {
      success: true,
      message: "Verification code generated successfully",
      phone: phone,
      note: "SMS integration pending - code logged to console"
    };

    console.log("SMS simulation completed:", response);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in simulate-sms-verification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
