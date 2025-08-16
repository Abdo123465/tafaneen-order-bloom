import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category: string;
  created_at: string;
}

interface NewProductsNotificationRequest {
  phone: string;
  products: NewProduct[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, products }: NewProductsNotificationRequest = await req.json();
    
    if (!phone || !products || products.length === 0) {
      throw new Error("Missing phone or products");
    }

    // تنسيق رقم الهاتف
    const formattedPhone = formatPhoneNumber(phone);
    
    // إنشاء رسالة المنتجات الجديدة
    const message = createNewProductsMessage(products);
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    console.log(`New products notification prepared for ${formattedPhone}`);
    console.log(`Products count: ${products.length}`);
    console.log(`WhatsApp URL: ${whatsappUrl}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "تم إعداد إشعار المنتجات الجديدة بنجاح",
      whatsapp_url: whatsappUrl,
      phone: formattedPhone,
      products_count: products.length
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-new-products function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

// إنشاء رسالة المنتجات الجديدة
function createNewProductsMessage(products: NewProduct[]): string {
  const header = "🎉 منتجات جديدة في تفانين!\n\n";
  
  const productsList = products.map(product => {
    const price = new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(product.price);
    
    return `• ${product.name}\n  💰 ${price}\n  📁 ${product.category}`;
  }).join('\n\n');
  
  const footer = "\n\n🛒 تصفح المنتجات: https://tafaneen.com\n📱 اشترك في النشرة: https://tafaneen.com/subscribe";
  
  return header + productsList + footer;
}

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

