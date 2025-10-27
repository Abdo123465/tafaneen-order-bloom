import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const appUrl = Deno.env.get("APP_URL") || "http://localhost:3000";

const corsHeaders = {
  "Access-Control-Allow-Origin": appUrl,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendTelegramRequest {
  username: string;
  message: string;
}

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

    const { username, message }: SendTelegramRequest = await req.json();

    // 2. Input Validation
    if (!username || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    
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
        throw new Error(`User ${username} not found. Ensure the user has messaged the bot.`);
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
        text: message,
        parse_mode: "HTML"
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
    console.error("Error in send-sms function:", error);
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
