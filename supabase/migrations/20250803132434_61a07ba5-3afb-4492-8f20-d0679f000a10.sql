-- إنشاء جدول للمستخدمين
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  verification_code TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- تفعيل Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- إنشاء policies للوصول للبيانات
CREATE POLICY "Users can view their own data" 
ON public.users 
FOR SELECT 
USING (phone = current_setting('request.jwt.claims', true)::json->>'phone');

CREATE POLICY "Users can insert their own data" 
ON public.users 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own data" 
ON public.users 
FOR UPDATE 
USING (phone = current_setting('request.jwt.claims', true)::json->>'phone');

-- إنشاء function لتحديث updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- إنشاء trigger لتحديث updated_at تلقائياً
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();