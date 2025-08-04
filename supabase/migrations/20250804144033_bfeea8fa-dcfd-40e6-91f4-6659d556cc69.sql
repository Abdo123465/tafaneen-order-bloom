-- تحديث جدول المستخدمين لاستخدام username بدلاً من phone
ALTER TABLE public.users RENAME COLUMN phone TO telegram_username;
ALTER TABLE public.users ALTER COLUMN telegram_username TYPE text;

-- تحديث سياسات RLS لاستخدام telegram_username
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;

CREATE POLICY "Users can view their own data" 
ON public.users 
FOR SELECT 
USING (telegram_username = ((current_setting('request.jwt.claims'::text, true))::json ->> 'telegram_username'::text));

CREATE POLICY "Users can update their own data" 
ON public.users 
FOR UPDATE 
USING (telegram_username = ((current_setting('request.jwt.claims'::text, true))::json ->> 'telegram_username'::text));