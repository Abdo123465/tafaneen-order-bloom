import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { normalizeEgyptianPhone, validateEgyptianPhone } from "@/utils/phoneValidation";
import { useSecurity } from "@/contexts/SecurityContext";
import { sanitizeInput, validateName } from "@/utils/inputSanitization";
import { auditLog, auditError } from "@/utils/auditLogger";

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
  const { checkLoginAttempts, addSecurityAlert } = useSecurity();

  useEffect(() => {
    const storedUser = localStorage.getItem("tafaneen_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("tafaneen_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (name: string, phone: string) => {
    try {
      // Sanitize inputs
      const sanitizedName = sanitizeInput(name);
      const sanitizedPhone = sanitizeInput(phone);
      
      // Validate inputs
      if (!validateName(sanitizedName)) {
        return { 
          success: false, 
          error: "الاسم غير صالح. يجب أن يكون بين 2 و 50 حرفًا ويحتوي على أحرف فقط" 
        };
      }

      // التحقق من صحة رقم الهاتف المصري
      const phoneValidation = validateEgyptianPhone(sanitizedPhone);
      if (!phoneValidation.isValid) {
        return { 
          success: false, 
          error: phoneValidation.errorMessage || "رقم الهاتف غير صحيح" 
        };
      }

      // Check rate limiting
      if (!checkLoginAttempts(sanitizedPhone)) {
        return { 
          success: false, 
          error: "تم قفل الحساب مؤقتًا بسبب محاولات دخول متكررة. يرجى المحاولة لاحقًا." 
        };
      }

      // تطبيع رقم الهاتف للتخزين
      const normalizedPhone = normalizeEgyptianPhone(sanitizedPhone);
      
      // حفظ أو تحديث المستخدم في قاعدة البيانات
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("phone", normalizedPhone)
        .maybeSingle();

      if (fetchError) {
        auditError("USER_FETCH_ERROR", { phone: normalizedPhone, error: fetchError.message });
        throw fetchError;
      }

      let userData;
      if (existingUser) {
        // تحديث المستخدم الموجود
        const { data, error: updateError } = await supabase
          .from("users")
          .update({ 
            name: sanitizedName,
            is_verified: true,
            last_login: new Date().toISOString()
          })
          .eq("phone", normalizedPhone)
          .select()
          .single();

        if (updateError) {
          auditError("USER_UPDATE_ERROR", { phone: normalizedPhone, error: updateError.message });
          throw updateError;
        }
        userData = data;
      } else {
        // إنشاء مستخدم جديد
        const { data, error: insertError } = await supabase
          .from("users")
          .insert({
            name: sanitizedName,
            phone: normalizedPhone,
            is_verified: true,
            created_at: new Date().toISOString()
          })
          .select()
          .single();

        if (insertError) {
          auditError("USER_INSERT_ERROR", { phone: normalizedPhone, error: insertError.message });
          throw insertError;
        }
        userData = data;
      }

      // حتى إذا فشل جلب بيانات المستخدم من Supabase، قم بإنشاء كائن مستخدم محلياً
      const verifiedUser: User = {
        id: userData?.id ?? Date.now().toString(),
        name: userData?.name ?? sanitizedName,
        phone: userData?.phone ?? normalizedPhone,
        is_verified: true,
      };

      setUser(verifiedUser);
      localStorage.setItem("tafaneen_user", JSON.stringify(verifiedUser));
      
      // Set session expiry
      const sessionExpiry = Date.now() + 30 * 60 * 1000; // 30 minutes
      localStorage.setItem("session_expiry", sessionExpiry.toString());
      
      auditLog("USER_LOGIN", { userId: verifiedUser.id, phone: normalizedPhone });
      
      return { success: true };
    } catch (error: any) {
      console.error("Login error:", error);
      auditError("LOGIN_ERROR", { error: error.message });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    if (user) {
      auditLog("USER_LOGOUT", { userId: user.id });
    }
    setUser(null);
    localStorage.removeItem("tafaneen_user");
    localStorage.removeItem("session_expiry");
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
