-- تحديث جدول المستخدمين لإضافة البريد الإلكتروني وتغيير telegram_username إلى phone
ALTER TABLE public.users 
  DROP COLUMN telegram_username,
  ADD COLUMN phone text NOT NULL DEFAULT '',
  ADD COLUMN email text NOT NULL DEFAULT '';

-- تحديث سياسات الأمان لاستخدام رقم الهاتف بدلاً من telegram_username
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;

CREATE POLICY "Users can view their own data" 
ON public.users 
FOR SELECT 
USING (phone = ((current_setting('request.jwt.claims'::text, true))::json ->> 'phone'::text));

CREATE POLICY "Users can update their own data" 
ON public.users 
FOR UPDATE 
USING (phone = ((current_setting('request.jwt.claims'::text, true))::json ->> 'phone'::text));