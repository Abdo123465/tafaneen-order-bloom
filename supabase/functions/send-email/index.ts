import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

// Initialize Resend with the API key from environment variables
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not set in environment variables.");
}
const resend = new Resend(resendApiKey);

const appUrl = Deno.env.get("APP_URL") || "http://localhost:3000";

const corsHeaders = {
  "Access-Control-Allow-Origin": appUrl,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod schema for input validation
const SendEmailSchema = z.object({
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone format"),
  verificationCode: z.string()
    .length(6, "Invalid code length")
    .regex(/^\d{6}$/, "Code must be 6 digits"),
  name: z.string()
    .min(2, "Name too short")
    .max(100, "Name too long")
});

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
      return new Response(JSON.stringify({ error: "Unauthorized", code: "UNAUTHORIZED" }), { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    const requestBody = await req.json();

    // 2. Input Validation
    const validationResult = SendEmailSchema.safeParse(requestBody);
    if (!validationResult.success) {
        return new Response(JSON.stringify({ error: "Validation failed", details: validationResult.error.flatten() }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    
    const { phone, verificationCode, name } = validationResult.data;
    
    console.log(`Sending verification SMS for phone: ${phone} and name: ${name}`);

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
    console.error("Error in send-email function:", {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
    });
    return new Response(
      JSON.stringify({ error: "Unable to process request", code: "INTERNAL_ERROR" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
