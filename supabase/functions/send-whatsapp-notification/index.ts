import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WhatsAppNotificationRequest {
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, message }: WhatsAppNotificationRequest = await req.json();
    
    if (!phone || !message) {
      throw new Error("Missing phone or message");
    }

    // تنسيق رقم الهاتف
    const formattedPhone = formatPhoneNumber(phone);
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    // إرسال رسالة ترحيب للمشترك
    const welcomeMessage = `مرحباً! 🎉\n\nشكراً لك على الاشتراك في نشرة تفانين الإخبارية!\n\nستصلك إشعارات فورية عند إضافة منتجات جديدة في متجرنا.\n\nلإلغاء الاشتراك، أرسل "إلغاء" إلى هذا الرقم.`;
    
    const welcomeWhatsAppUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(welcomeMessage)}`;

    // في الحالة الحقيقية، يمكنك استخدام خدمة مثل:
    // 1. Twilio WhatsApp API (مدفوع)
    // 2. Facebook Business API (مجاني مع قيود)
    // 3. أو إرسال رسالة SMS بدلاً من ذلك
    
    // للآن، سنقوم بإرجاع رابط واتساب للمشترك
    console.log(`WhatsApp notification prepared for ${formattedPhone}: ${message}`);
    console.log(`WhatsApp URL: ${whatsappUrl}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "تم إعداد إشعار واتساب بنجاح",
      whatsapp_url: whatsappUrl,
      welcome_url: welcomeWhatsAppUrl,
      phone: formattedPhone
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-whatsapp-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

// تنسيق رقم الهاتف
function formatPhoneNumber(phone: string): string {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  if (cleanPhone.startsWith('05')) {
    return '966' + cleanPhone.substring(1);
  } else if (cleanPhone.startsWith('5')) {
    return '966' + cleanPhone;
  } else if (cleanPhone.startsWith('966')) {
    return cleanPhone;
  } else if (cleanPhone.startsWith('+966')) {
    return cleanPhone.substring(1);
  }
  
  return cleanPhone;
}

serve(handler);

