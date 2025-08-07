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
      
      // حفظ أو تحديث المستخدم في قاعدة البيانات
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("phone", normalizedPhone)
        .maybeSingle();

      let userData;
      if (existingUser) {
        // تحديث المستخدم الموجود
        const { data } = await supabase
          .from("users")
          .update({ 
            name,
            is_verified: true 
          })
          .eq("phone", normalizedPhone)
          .select()
          .single();
        userData = data;
      } else {
        // إنشاء مستخدم جديد
        const { data } = await supabase
          .from("users")
          .insert({
            name,
            phone: normalizedPhone,
            is_verified: true
          })
          .select()
          .single();
        userData = data;
      }

      // حتى إذا فشل جلب بيانات المستخدم من Supabase، قم بإنشاء كائن مستخدم محلياً
      const verifiedUser: User = {
        id: userData?.id ?? Date.now().toString(),
        name: userData?.name ?? name,
        phone: userData?.phone ?? normalizedPhone,
        is_verified: true,
      };

      setUser(verifiedUser);
      localStorage.setItem("tafaneen_user", JSON.stringify(verifiedUser));

      return { success: true };
    } catch (error: any) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("tafaneen_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
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
