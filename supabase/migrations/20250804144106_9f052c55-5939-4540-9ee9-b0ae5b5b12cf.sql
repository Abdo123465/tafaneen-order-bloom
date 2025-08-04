-- حذف السياسات أولاً
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;

-- تغيير اسم العمود
ALTER TABLE public.users RENAME COLUMN phone TO telegram_username;

-- إعادة إنشاء السياسات باستخدام العمود الجديد
CREATE POLICY "Users can view their own data" 
ON public.users 
FOR SELECT 
USING (telegram_username = ((current_setting('request.jwt.claims'::text, true))::json ->> 'telegram_username'::text));

CREATE POLICY "Users can update their own data" 
ON public.users 
FOR UPDATE 
USING (telegram_username = ((current_setting('request.jwt.claims'::text, true))::json ->> 'telegram_username'::text));