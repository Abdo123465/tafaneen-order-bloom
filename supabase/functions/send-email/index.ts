import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with API key from environment variables
const resendApiKey = Deno.env.get('RESEND_API_KEY');

if (!resendApiKey) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(resendApiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendEmailRequest {
  phone: string; // Changed from email to phone
  verificationCode: string;
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, verificationCode, name }: SendEmailRequest = await req.json();

    console.log("Sending verification SMS for phone:", phone);

    // For now, we'll simulate SMS sending by logging the verification code
    // In a real implementation, you would integrate with an SMS service
    console.log(`SMS Verification Code for ${phone}: ${verificationCode}`);
    
    // Since we're removing email functionality, we'll return success
    // but indicate that SMS functionality needs to be implemented
    const response = {
      success: true,
      message: "Verification code generated successfully",
      phone: phone,
      code: verificationCode, // In production, don't return the actual code
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
    console.error("Error in send-email function:", error);
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
