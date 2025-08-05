-- حذف السياسات أولاً لتجنب مشكلة التبعيات
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;
DROP POLICY IF EXISTS "Users can insert their own data" ON public.users;

-- الآن يمكننا تحديث الجدول
ALTER TABLE public.users 
  DROP COLUMN telegram_username,
  ADD COLUMN phone text NOT NULL DEFAULT '',
  ADD COLUMN email text NOT NULL DEFAULT '';

-- إعادة إنشاء السياسات مع استخدام رقم الهاتف
CREATE POLICY "Users can view their own data" 
ON public.users 
FOR SELECT 
USING (phone = ((current_setting('request.jwt.claims'::text, true))::json ->> 'phone'::text));

CREATE POLICY "Users can update their own data" 
ON public.users 
FOR UPDATE 
USING (phone = ((current_setting('request.jwt.claims'::text, true))::json ->> 'phone'::text));

CREATE POLICY "Users can insert their own data" 
ON public.users 
FOR INSERT 
WITH CHECK (true);