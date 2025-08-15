-- إنشاء جدول تتبع الإشعارات المرسلة
CREATE TABLE IF NOT EXISTS product_notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    subscriber_phone VARCHAR(20) NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    message_content TEXT,
    UNIQUE(product_id, subscriber_phone)
);

-- إنشاء فهارس
CREATE INDEX IF NOT EXISTS idx_product_notifications_product_id ON product_notifications(product_id);
CREATE INDEX IF NOT EXISTS idx_product_notifications_subscriber_phone ON product_notifications(subscriber_phone);
CREATE INDEX IF NOT EXISTS idx_product_notifications_sent_at ON product_notifications(sent_at DESC);

-- تفعيل Row Level Security
ALTER TABLE product_notifications ENABLE ROW LEVEL SECURITY;

-- سياسة للمشرفين فقط
CREATE POLICY "Only admins can manage notifications" ON product_notifications
    FOR ALL USING (false); -- ستحتاج لتعديل هذا حسب نظام الأذونات
