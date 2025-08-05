import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { normalizeEgyptianPhone, validateEgyptianPhone } from "@/utils/phoneValidation";

interface User {
  id: string;
  name: string;
  phone: string;
  is_verified: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (name: string, phone: string) => Promise<{ success: boolean; error?: string }>;
  verifyCode: (phone: string, code: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("tafaneen_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (name: string, phone: string) => {
    try {
      // التحقق من صحة رقم الهاتف المصري
      const phoneValidation = validateEgyptianPhone(phone);
      if (!phoneValidation.isValid) {
        return { 
          success: false, 
          error: phoneValidation.errorMessage || "رقم الهاتف غير صحيح" 
        };
      }

      // تطبيع رقم الهاتف للتخزين
      const normalizedPhone = normalizeEgyptianPhone(phone);
      
      // توليد رمز تحقق عشوائي
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // حفظ أو تحديث المستخدم في قاعدة البيانات
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("phone", normalizedPhone)
        .maybeSingle();

      if (existingUser) {
        // تحديث المستخدم الموجود
        await supabase
          .from("users")
          .update({ 
            name,
            verification_code: verificationCode,
            is_verified: false 
          })
          .eq("phone", normalizedPhone);
      } else {
        // إنشاء مستخدم جديد
        await supabase
          .from("users")
          .insert({
            name,
            phone: normalizedPhone,
            verification_code: verificationCode,
            is_verified: false
          });
      }

      // محاكاة إرسال رسالة نصية (SMS)
      try {
        const smsResponse = await supabase.functions.invoke("send-email", {
          body: {
            phone: normalizedPhone,
            verificationCode,
            name
          }
        });

        if (smsResponse.error) {
          console.error("SMS sending error:", smsResponse.error);
          // للاختبار، سنعرض الكود في console
          console.log(`رمز التحقق للاختبار: ${verificationCode}`);
          alert(`رمز التحقق للاختبار: ${verificationCode}`);
        }
      } catch (error) {
        console.error("Error invoking send-sms function:", error);
        // للاختبار، سنعرض الكود في console
        console.log(`رمز التحقق للاختبار: ${verificationCode}`);
        alert(`رمز التحقق للاختبار: ${verificationCode}`);
      }

      return { success: true };
    } catch (error: any) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const verifyCode = async (phone: string, code: string) => {
    try {
      // تطبيع رقم الهاتف للبحث
      const normalizedPhone = normalizeEgyptianPhone(phone);
      
      // التحقق من رمز التحقق
      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("phone", normalizedPhone)
        .eq("verification_code", code)
        .maybeSingle();

      if (error || !userData) {
        return { success: false, error: "رمز التحقق غير صحيح" };
      }

      // تحديث حالة التحقق
      await supabase
        .from("users")
        .update({ is_verified: true, verification_code: null })
        .eq("phone", normalizedPhone);

      const verifiedUser: User = {
        id: userData.id,
        name: userData.name,
        phone: userData.phone,
        is_verified: true
      };

      setUser(verifiedUser);
      localStorage.setItem("tafaneen_user", JSON.stringify(verifiedUser));

      return { success: true };
    } catch (error: any) {
      console.error("Verification error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tafaneen_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, verifyCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
