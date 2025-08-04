import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
      // توليد رمز تحقق عشوائي
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // حفظ أو تحديث المستخدم في قاعدة البيانات
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("phone", phone)
        .single();

      if (existingUser) {
        // تحديث المستخدم الموجود
        await supabase
          .from("users")
          .update({ 
            name, 
            verification_code: verificationCode,
            is_verified: false 
          })
          .eq("phone", phone);
      } else {
        // إنشاء مستخدم جديد
        await supabase
          .from("users")
          .insert({
            name,
            phone,
            verification_code: verificationCode,
            is_verified: false
          });
      }

      // إرسال البريد الإلكتروني بدلاً من SMS
      if (phone.includes("@")) {
        // إذا كان الهاتف يحتوي على @ فهو بريد إلكتروني
        try {
          const emailResponse = await supabase.functions.invoke("send-email", {
            body: {
              to: phone,
              subject: "رمز التحقق من تفانين",
              message: `<div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <h2 style="color: #e63946;">مرحباً بك في تفانين</h2>
                <p>رمز التحقق الخاص بك هو:</p>
                <div style="font-size: 24px; font-weight: bold; background-color: #f1faee; padding: 10px; border-radius: 5px; text-align: center; letter-spacing: 5px; margin: 20px 0;">${verificationCode}</div>
                <p>يرجى استخدام هذا الرمز للتحقق من حسابك.</p>
                <p>مع تحيات فريق تفانين</p>
              </div>`
            }
          });

          if (emailResponse.error) {
            console.error("Email sending error:", emailResponse.error);
            // للاختبار، سنعرض الكود في console
            console.log(`رمز التحقق للاختبار: ${verificationCode}`);
            alert(`رمز التحقق للاختبار: ${verificationCode}`);
          }
        } catch (error) {
          console.error("Error invoking send-email function:", error);
          // للاختبار، سنعرض الكود في console
          console.log(`رمز التحقق للاختبار: ${verificationCode}`);
          alert(`رمز التحقق للاختبار: ${verificationCode}`);
        }
      } else {
        // إذا كان رقم هاتف، نستخدم وظيفة SMS القديمة
        try {
          const smsResponse = await supabase.functions.invoke("send-sms", {
            body: {
              username: phone, // تغيير من phone إلى username لتوافق واجهة API
              message: `رمز التحقق الخاص بك في تفانين: ${verificationCode}`
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
      }

      return { success: true };
    } catch (error: any) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const verifyCode = async (phone: string, code: string) => {
    try {
      // التحقق من رمز التحقق
      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("phone", phone)
        .eq("verification_code", code)
        .single();

      if (error || !userData) {
        return { success: false, error: "رمز التحقق غير صحيح" };
      }

      // تحديث حالة التحقق
      await supabase
        .from("users")
        .update({ is_verified: true, verification_code: null })
        .eq("phone", phone);

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
