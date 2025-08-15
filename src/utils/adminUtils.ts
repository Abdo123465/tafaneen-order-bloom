import { supabase } from "@/integrations/supabase/client";

export class AdminUtils {
  // إضافة منتج جديد مع تفعيل النظام
  static async addProductWithNotification(productData: {
    name: string;
    description?: string;
    price: number;
    image_url?: string;
    category?: string;
    is_featured?: boolean;
  }) {
    try {
      const { data: product, error } = await supabase
        .from('products')
        .insert({
          ...productData,
          notification_sent: false, // مهم: هذا يضمن أن المنتج سيظهر في قائمة المنتجات الجديدة
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      console.log('تم إضافة منتج جديد:', product.name);
      return { success: true, product };
    } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, error };
    }
  }

  // جلب إحصائيات شاملة للإدارة
  static async getAdminStats() {
    try {
      const [
        { count: totalProducts },
        { count: newProducts },
        { count: notifiedProducts },
        { count: totalSubscribers },
        { count: activeSubscribers },
        { count: totalNotifications }
      ] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('products').select('*', { count: 'exact', head: true }).eq('notification_sent', false),
        supabase.from('products').select('*', { count: 'exact', head: true }).eq('notification_sent', true),
        supabase.from('whatsapp_subscribers').select('*', { count: 'exact', head: true }),
        supabase.from('whatsapp_subscribers').select('*', { count: 'exact', head: true }).eq('is_active', true),
        supabase.from('product_notifications').select('*', { count: 'exact', head: true })
      ]);

      return {
        products: {
          total: totalProducts || 0,
          new: newProducts || 0,
          notified: notifiedProducts || 0
        },
        subscribers: {
          total: totalSubscribers || 0,
          active: activeSubscribers || 0
        },
        notifications: {
          total: totalNotifications || 0
        }
      };
    } catch (error) {
      console.error('Error fetching admin stats:', error);
      return {
        products: { total: 0, new: 0, notified: 0 },
        subscribers: { total: 0, active: 0 },
        notifications: { total: 0 }
      };
    }
  }

  // إلغاء تفعيل مشترك
  static async deactivateSubscriber(phone: string) {
    try {
      const { error } = await supabase
        .from('whatsapp_subscribers')
        .update({ 
          is_active: false,
          updated_at: new Date().toISOString()
        })
        .eq('phone', phone);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deactivating subscriber:', error);
      return { success: false, error };
    }
  }

  // إعادة تفعيل مشترك
  static async reactivateSubscriber(phone: string) {
    try {
      const { error } = await supabase
        .from('whatsapp_subscribers')
        .update({ 
          is_active: true,
          updated_at: new Date().toISOString()
        })
        .eq('phone', phone);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error reactivating subscriber:', error);
      return { success: false, error };
    }
  }

  // إعادة تعيين حالة إشعار المنتج (لإرساله مرة أخرى)
  static async resetProductNotificationStatus(productId: string) {
    try {
      const { error } = await supabase
        .from('products')
        .update({ 
          notification_sent: false,
          updated_at: new Date().toISOString()
        })
        .eq('id', productId);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error resetting product notification status:', error);
      return { success: false, error };
    }
  }
}
