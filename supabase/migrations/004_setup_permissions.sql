-- إنشاء دور المشرف
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'admin_role') THEN
    CREATE ROLE admin_role;
  END IF;
END
$$;

-- تحديث سياسات الأمان
DROP POLICY IF EXISTS "Only admins can read subscribers" ON whatsapp_subscribers;
DROP POLICY IF EXISTS "Only admins can manage notifications" ON product_notifications;

-- سياسات جديدة للمشتركين
CREATE POLICY "Public can subscribe" ON whatsapp_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own subscription" ON whatsapp_subscribers
  FOR SELECT USING (phone = current_setting('request.jwt.claims', true)::json->>'phone');

-- سياسات للمنتجات
CREATE POLICY "Anyone can view products" ON products
  FOR SELECT USING (true);

-- سياسة أساسية للإشعارات (ستحتاج لتخصيصها حسب نظام المصادقة لديك)
CREATE POLICY "Service can manage notifications" ON product_notifications
  FOR ALL USING (true);

-- إنشاء فهارس إضافية لتحسين الأداء
CREATE INDEX IF NOT EXISTS idx_whatsapp_subscribers_created_at ON whatsapp_subscribers(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_created_notification ON products(created_at DESC) WHERE notification_sent = false;

-- دالة لتنظيف البيانات القديمة (اختيارية)
CREATE OR REPLACE FUNCTION cleanup_old_notifications()
RETURNS void AS $$
BEGIN
  -- حذف إشعارات أقدم من 6 أشهر
  DELETE FROM product_notifications 
  WHERE sent_at < NOW() - INTERVAL '6 months';
  
  -- إلغاء تفعيل المشتركين غير النشطين لأكثر من سنة
  UPDATE whatsapp_subscribers 
  SET is_active = false, updated_at = NOW()
  WHERE is_active = true 
    AND last_notification_sent < NOW() - INTERVAL '1 year';
END;
$$ LANGUAGE plpgsql;
