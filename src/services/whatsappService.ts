import { createClient } from '@supabase/supabase-js';
import { WhatsAppSubscriber, NewProduct, WhatsAppNotificationRequest, NewProductsNotificationRequest } from '@/types/whatsapp';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class WhatsAppService {
  // الاشتراك في النشرة الإخبارية
  static async subscribe(phone: string): Promise<{ success: boolean; error?: string; whatsappUrl?: string }> {
    try {
      // التحقق من صحة رقم الهاتف
      if (!this.isValidPhoneNumber(phone)) {
        return { success: false, error: 'رقم الهاتف غير صحيح' };
      }

      const formattedPhone = this.formatPhoneNumber(phone);

      // إضافة المشترك إلى قاعدة البيانات
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .insert([{ phone: formattedPhone }])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') { // duplicate key error
          return { success: false, error: 'أنت مشترك بالفعل في النشرة الإخبارية' };
        }
        throw error;
      }

      // إنشاء رسالة ترحيب
      const welcomeMessage = `مرحباً! 🎉\n\nشكراً لك على الاشتراك في نشرة تفانين الإخبارية!\n\nستصلك إشعارات فورية عند إضافة منتجات جديدة في متجرنا.\n\nلإلغاء الاشتراك، أرسل "إلغاء" إلى هذا الرقم.`;
      
      // إنشاء رابط واتساب للرسالة الترحيبية
      const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(welcomeMessage)}`;

      return { 
        success: true, 
        whatsappUrl 
      };
    } catch (error: any) {
      console.error('Error subscribing to WhatsApp:', error);
      return { success: false, error: error.message || 'حدث خطأ أثناء الاشتراك' };
    }
  }

  // إلغاء الاشتراك
  static async unsubscribe(phone: string): Promise<{ success: boolean; error?: string }> {
    try {
      const formattedPhone = this.formatPhoneNumber(phone);
      
      const { error } = await supabase
        .from('whatsapp_subscribers')
        .update({ active: false })
        .eq('phone', formattedPhone);

      if (error) throw error;

      return { success: true };
    } catch (error: any) {
      console.error('Error unsubscribing from WhatsApp:', error);
      return { success: false, error: error.message || 'حدث خطأ أثناء إلغاء الاشتراك' };
    }
  }

  // التحقق من حالة الاشتراك
  static async checkSubscriptionStatus(phone: string): Promise<{ subscribed: boolean; active: boolean }> {
    try {
      const formattedPhone = this.formatPhoneNumber(phone);
      
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .select('active')
        .eq('phone', formattedPhone)
        .single();

      if (error || !data) {
        return { subscribed: false, active: false };
      }

      return { subscribed: true, active: data.active };
    } catch (error) {
      return { subscribed: false, active: false };
    }
  }

  // إرسال إشعار بالمنتجات الجديدة (طريقة مجانية)
  static async sendNewProductsNotification(phone: string, products: NewProduct[]): Promise<{ success: boolean; error?: string; whatsappUrl?: string }> {
    try {
      const formattedPhone = this.formatPhoneNumber(phone);
      
      // التحقق من أن المشترك نشط
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .select('active')
        .eq('phone', formattedPhone)
        .eq('active', true)
        .single();

      if (error || !data) {
        return { success: false, error: 'المشترك غير موجود أو غير نشط' };
      }

      // إنشاء رسالة المنتجات الجديدة
      const message = this.createNewProductsMessage(products);
      
      // إنشاء رابط واتساب
      const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

      // تحديث إحصائيات المشترك
      await supabase
        .from('whatsapp_subscribers')
        .update({ 
          last_notification_sent: new Date().toISOString(),
          notification_count: supabase.sql`notification_count + 1`
        })
        .eq('phone', formattedPhone);

      return { 
        success: true, 
        whatsappUrl 
      };
    } catch (error: any) {
      console.error('Error sending new products notification:', error);
      return { success: false, error: error.message || 'حدث خطأ أثناء إرسال الإشعار' };
    }
  }

  // الحصول على جميع المشتركين النشطين
  static async getActiveSubscribers(): Promise<WhatsAppSubscriber[]> {
    try {
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error: any) {
      console.error('Error getting active subscribers:', error);
      return [];
    }
  }

  // إرسال إشعار جماعي لجميع المشتركين النشطين
  static async sendBulkNotification(products: NewProduct[]): Promise<{ success: boolean; sentCount: number; errors: string[] }> {
    try {
      const subscribers = await this.getActiveSubscribers();
      const errors: string[] = [];
      let sentCount = 0;

      for (const subscriber of subscribers) {
        try {
          const result = await this.sendNewProductsNotification(subscriber.phone, products);
          if (result.success) {
            sentCount++;
          } else {
            errors.push(`فشل إرسال الإشعار إلى ${subscriber.phone}: ${result.error}`);
          }
        } catch (error: any) {
          errors.push(`خطأ في إرسال الإشعار إلى ${subscriber.phone}: ${error.message}`);
        }
      }

      return { success: true, sentCount, errors };
    } catch (error: any) {
      console.error('Error sending bulk notification:', error);
      return { success: false, sentCount: 0, errors: [error.message] };
    }
  }

  // إنشاء رسالة المنتجات الجديدة
  private static createNewProductsMessage(products: NewProduct[]): string {
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

  // التحقق من صحة رقم الهاتف
  private static isValidPhoneNumber(phone: string): boolean {
    // إزالة المسافات والرموز
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // التحقق من أن الرقم يبدأ بـ +966 أو 966 أو 05 أو 5
    const saudiPattern = /^(\+966|966|05|5)\d{8}$/;
    
    return saudiPattern.test(cleanPhone);
  }

  // تنسيق رقم الهاتف
  static formatPhoneNumber(phone: string): string {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    if (cleanPhone.startsWith('05')) {
      return '+966' + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith('5')) {
      return '+966' + cleanPhone;
    } else if (cleanPhone.startsWith('966')) {
      return '+' + cleanPhone;
    } else if (cleanPhone.startsWith('+966')) {
      return cleanPhone;
    }
    
    return cleanPhone;
  }

  // الحصول على إحصائيات المشتركين
  static async getSubscriberStats(): Promise<{ total: number; active: number; inactive: number }> {
    try {
      const { data, error } = await supabase
        .from('whatsapp_subscribers')
        .select('active');

      if (error) throw error;

      const total = data?.length || 0;
      const active = data?.filter(s => s.active).length || 0;
      const inactive = total - active;

      return { total, active, inactive };
    } catch (error: any) {
      console.error('Error getting subscriber stats:', error);
      return { total: 0, active: 0, inactive: 0 };
    }
  }
}
