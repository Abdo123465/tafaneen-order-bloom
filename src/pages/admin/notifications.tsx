import { ProductNotificationManager } from "@/components/admin/ProductNotificationManager";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";

export default function AdminNotificationsPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      // هنا يمكنك إضافة منطق التحقق من صلاحيات المشرف
      // مثال بسيط - يمكنك تطويره حسب نظام الأذونات لديك
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // فحص إذا كان المستخدم مشرف (يمكنك تعديل هذا المنطق)
        const adminEmails = ['admin@tafaneen.com', 'manager@tafaneen.com']; // قائمة بريد المشرفين
        const isUserAdmin = adminEmails.includes(session.user.email || '');
        setIsAdmin(isUserAdmin);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">جارٍ التحقق من الصلاحيات...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductNotificationManager />
    </div>
  );
}
