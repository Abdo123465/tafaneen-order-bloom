import { useState, useEffect } from "react";
import { ProductNotificationService } from "@/utils/productNotificationService";
import { useToast } from "@/hooks/use-toast";

interface NotificationStats {
  totalSubscribers: number;
  activeSubscribers: number;
  totalProductsNotified: number;
  lastNotificationDate: string | null;
}

export function useProductNotifications() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<NotificationStats>({
    totalSubscribers: 0,
    activeSubscribers: 0,
    totalProductsNotified: 0,
    lastNotificationDate: null
  });

  // جلب الإحصائيات
  const fetchStats = async () => {
    try {
      const notificationStats = await ProductNotificationService.getNotificationStats();
      setStats(notificationStats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // إرسال الإشعارات
  const sendNotifications = async () => {
    setIsLoading(true);
    try {
      const result = await ProductNotificationService.sendProductNotifications();
      
      if (result.success) {
        toast({
          title: "تم بنجاح! ✅",
          description: `${result.message}. المنتجات: ${result.productsCount}، المشتركين: ${result.subscribersCount}`,
        });
        
        // تحديث الإحصائيات
        await fetchStats();
      } else {
        toast({
          title: "تنبيه ⚠️",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ ❌",
        description: "حدث خطأ غير متوقع أثناء إرسال الإشعارات",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // جلب المنتجات الجديدة
  const getNewProducts = async () => {
    try {
      return await ProductNotificationService.getNewProducts();
    } catch (error) {
      console.error('Error fetching new products:', error);
      return [];
    }
  };

  // جلب المشتركين النشطين
  const getActiveSubscribers = async () => {
    try {
      return await ProductNotificationService.getActiveSubscribers();
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return {
    stats,
    isLoading,
    sendNotifications,
    getNewProducts,
    getActiveSubscribers,
    refreshStats: fetchStats
  };
}
