import { supabase } from "@/integrations/supabase/client";
import { WhatsAppService } from "./whatsappService";

export class ProductNotificationService {
  // جلب المنتجات الجديدة التي لم يتم إرسال إشعارات عنها
  static async getNewProducts(): Promise<any[]> {
    try {
      const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .eq('notification_sent', false)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return products || [];
    } catch (error) {
      console.error('Error fetching new products:', error);
      return [];
    }
  }

  // جلب جميع المشتركين النشطين
  static async getActiveSubscribers(): Promise<string[]> {
    try {
      const { data: subscribers, error } = await supabase
        .from('whatsapp_subscribers')
        .select('phone')
        .eq('is_active', true);

      if (error) throw error;
      return subscribers?.map(sub => sub.phone) || [];
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      return [];
    }
  }

  // إرسال إشعارات للمنتجات الجديدة
  static async sendProductNotifications(): Promise<{
    success: boolean;
    message: string;
    productsCount: number;
    subscribersCount: number;
  }> {
    try {
      const newProducts = await this.getNewProducts();
      
      if (newProducts.length === 0) {
        return {
          success: false,
          message: "لا توجد منتجات جديدة للإشعار عنها",
          productsCount: 0,
          subscribersCount: 0
        };
      }

      const subscribers = await this.getActiveSubscribers();
      
      if (subscribers.length === 0) {
        return {
          success: false,
          message: "لا توجد اشتراكات نشطة",
          productsCount: newProducts.length,
          subscribersCount: 0
        };
      }

      // تكوين الرسالة
      const message = WhatsAppService.formatProductMessage(newProducts);

      // إرسال الإشعارات (سيتم فتح الروابط)
      await WhatsAppService.sendBulkNotifications(subscribers, message);

      // تسجيل الإشعارات في قاعدة البيانات
      await this.recordNotifications(newProducts, subscribers, message);

      // تحديث حالة المنتجات
      await this.markProductsAsNotified(newProducts.map(p => p.id));

      return {
        success: true,
        message: `تم إنشاء ملف يحتوي على روابط WhatsApp لـ ${subscribers.length} مشترك`,
        productsCount: newProducts.length,
        subscribersCount: subscribers.length
      };

    } catch (error) {
      console.error('Error sending notifications:', error);
      return {
        success: false,
        message: "حدث خطأ أثناء إرسال الإشعارات",
        productsCount: 0,
        subscribersCount: 0
      };
    }
  }

  // تسجيل الإشعارات في قاعدة البيانات
  private static async recordNotifications(products: any[], subscribers: string[], message: string): Promise<void> {
    try {
      const notifications = [];
      
      for (const product of products) {
        for (const phone of subscribers) {
          notifications.push({
            product_id: product.id,
            subscriber_phone: phone,
            message_content: message,
            sent_at: new Date().toISOString()
          });
        }
      }

      // إدراج الإشعارات في دفعات لتجنب حدود API
      const batchSize = 100;
      for (let i = 0; i < notifications.length; i += batchSize) {
        const batch = notifications.slice(i, i + batchSize);
        const { error } = await supabase
          .from('product_notifications')
          .insert(batch);
        
        if (error) {
          console.error('Error inserting notification batch:', error);
        }
      }
    } catch (error) {
      console.error('Error recording notifications:', error);
    }
  }

  // تحديث حالة المنتجات لتظهر أنه تم إرسال إشعار عنها
  private static async markProductsAsNotified(productIds: string[]): Promise<void> {
    try {
      const { error } = await supabase
        .from('products')
        .update({ notification_sent: true })
        .in('id', productIds);

      if (error) throw error;
    } catch (error) {
      console.error('Error marking products as notified:', error);
    }
  }

  // إحصائيات الإشعارات
  static async getNotificationStats(): Promise<{
    totalSubscribers: number;
    activeSubscribers: number;
    totalProductsNotified: number;
    lastNotificationDate: string | null;
  }> {
    try {
      // إجمالي المشتركين
      const { count: totalSubscribers } = await supabase
        .from('whatsapp_subscribers')
        .select('*', { count: 'exact', head: true });

      // المشتركين النشطين
      const { count: activeSubscribers } = await supabase
        .from('whatsapp_subscribers')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true);

      // المنتجات التي تم إرسال إشعار عنها
      const { count: totalProductsNotified } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .eq('notification_sent', true);

      // آخر إشعار تم إرساله
      const { data: lastNotification } = await supabase
        .from('product_notifications')
        .select('sent_at')
        .order('sent_at', { ascending: false })
        .limit(1)
        .single();

      return {
        totalSubscribers: totalSubscribers || 0,
        activeSubscribers: activeSubscribers || 0,
        totalProductsNotified: totalProductsNotified || 0,
        lastNotificationDate: lastNotification?.sent_at || null
      };
    } catch (error) {
      console.error('Error fetching notification stats:', error);
      return {
        totalSubscribers: 0,
        activeSubscribers: 0,
        totalProductsNotified: 0,
        lastNotificationDate: null
      };
    }
  }
}
