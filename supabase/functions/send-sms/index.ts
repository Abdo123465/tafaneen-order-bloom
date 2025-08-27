import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
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
    const { username, message }: SendTelegramRequest = await req.json();
    
    // Validate inputs
    if (!username || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get bot token from environment
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!botToken) {
      throw new Error("Missing Telegram Bot Token");
    }

    // البحث عن chat_id للمستخدم عبر username
    let chatId;
    try {
      // نحاول البحث عن المستخدم عبر username
      const searchUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
      const updatesResponse = await fetch(searchUrl);
      const updates = await updatesResponse.json();
      
      // البحث عن chat_id من خلال username في الرسائل الحديثة
      const userChat = updates.result?.find((update: any) => 
        update.message?.from?.username === username.replace('@', '')
      );
      
      if (userChat) {
        chatId = userChat.message.from.id;
      } else {
        // إذا لم نجد المستخدم، نرسل رسالة للمطور في console
        console.log(`لم يتم العثور على المستخدم ${username}. يرجى التأكد من أن المستخدم أرسل رسالة للبوت مسبقاً.`);
        throw new Error(`لم يتم العثور على المستخدم ${username}. يرجى التأكد من أن المستخدم أرسل رسالة للبوت مسبقاً.`);
      }
    } catch (searchError) {
      console.error("خطأ في البحث عن المستخدم:", searchError);
      throw new Error(`خطأ في البحث عن المستخدم: ${searchError.message}`);
    }

    // إرسال الرسالة عبر Telegram Bot API
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
    console.log("رسالة Telegram تم إرسالها بنجاح:", result);
    
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
