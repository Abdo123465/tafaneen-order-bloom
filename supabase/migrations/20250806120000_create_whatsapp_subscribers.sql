-- إنشاء جدول المشتركين في WhatsApp
CREATE TABLE IF NOT EXISTS whatsapp_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone VARCHAR(20) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_notification_sent TIMESTAMP WITH TIME ZONE
);

-- إنشاء فهرس على رقم الهاتف
CREATE INDEX IF NOT EXISTS idx_whatsapp_subscribers_phone ON whatsapp_subscribers(phone);
CREATE INDEX IF NOT EXISTS idx_whatsapp_subscribers_is_active ON whatsapp_subscribers(is_active);

-- تفعيل Row Level Security
ALTER TABLE whatsapp_subscribers ENABLE ROW LEVEL SECURITY;

-- سياسة للسماح بالإدراج للجميع (للاشتراك)
CREATE POLICY "Anyone can subscribe" ON whatsapp_subscribers
    FOR INSERT WITH CHECK (true);

-- سياسة للسماح بالقراءة والتحديث للمشرفين فقط
CREATE POLICY "Only admins can read subscribers" ON whatsapp_subscribers
    FOR SELECT USING (false); -- ستحتاج لتعديل هذا حسب نظام الأذونات لديك
