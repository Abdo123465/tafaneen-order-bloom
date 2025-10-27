import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const appUrl = Deno.env.get("APP_URL") || "http://localhost:3000";

const corsHeaders = {
  "Access-Control-Allow-Origin": appUrl,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod schema for input validation
const SendSmsSchema = z.object({
  username: z.string()
    .min(1, "Username required")
    .max(50, "Username too long")
    .regex(/^[a-zA-Z0-9_]+$/, "Invalid username format"),
  message: z.string()
    .min(1, "Message required")
    .max(4096, "Message too long")
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
    const validationResult = SendSmsSchema.safeParse(requestBody);
    if (!validationResult.success) {
      return new Response(JSON.stringify({ error: "Validation failed", details: validationResult.error.flatten() }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    
    const { username, message } = validationResult.data;
    
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");

    if (!botToken) {
      throw new Error("Missing Telegram Bot Token");
    }

    // This logic for finding chat_id is insecure and should be re-evaluated.
    // For now, we are focusing on the immediate security vulnerabilities.
    let chatId;
    try {
      const searchUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
      const updatesResponse = await fetch(searchUrl);
      const updates = await updatesResponse.json();
      
      const userChat = updates.result?.find((update: any) => 
        update.message?.from?.username === username.replace('@', '')
      );
      
      if (userChat) {
        chatId = userChat.message.from.id;
      } else {
        console.log(`User ${username} not found. Ensure the user has messaged the bot.`);
        return new Response(JSON.stringify({ error: "User not found", code: "USER_NOT_FOUND" }), { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } });
      }
    } catch (searchError) {
      console.error("Error finding user:", searchError);
      throw new Error(`Error finding user: ${searchError.message}`);
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description || response.statusText}`);
    }

    const result = await response.json();
    console.log("Telegram message sent successfully:", result);

    return new Response(JSON.stringify({ 
      success: true, 
      message_id: result.result.message_id,
      chat_id: chatId 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-sms function:", {
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
