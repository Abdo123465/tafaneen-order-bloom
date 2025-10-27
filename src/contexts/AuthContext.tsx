import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { normalizeEgyptianPhone, validateEgyptianPhone } from "@/utils/phoneValidation";
import { sanitizeText } from "@/utils/security";
import { Session } from "@supabase/supabase-js";

// Keep custom user profile type
interface User {
  id: string;
  name: string;
  phone: string;
  is_verified: boolean; // This should be based on Supabase Auth user's status
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (phone: string) => Promise<{ success: boolean; error?: string }>;
  verifyOtpAndUpdateProfile: (phone: string, token: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        if (session?.user) {
          const { data: userProfile } = await supabase
            .from("users")
            .select("*")
            .eq("id", session.user.id)
            .single();
          setUser(userProfile as User | null);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (phone: string) => {
    try {
        const phoneValidation = validateEgyptianPhone(phone);
        if (!phoneValidation.isValid) {
          return { 
            success: false, 
            error: phoneValidation.errorMessage || "رقم الهاتف غير صحيح" 
          };
        }
        const normalizedPhone = normalizeEgyptianPhone(phone);
    
        const { error } = await supabase.auth.signInWithOtp({
          phone: normalizedPhone,
        });
    
        if (error) {
          throw error;
        }
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
  };

  const verifyOtpAndUpdateProfile = async (phone: string, token: string, name: string) => {
    try {
      const sanitizedName = sanitizeText(name);
      if (!sanitizedName || sanitizedName.length < 2) {
        return {
          success: false,
          error: "الاسم غير صحيح"
        };
      }

      const phoneValidation = validateEgyptianPhone(phone);
      if (!phoneValidation.isValid) {
        return { 
          success: false, 
          error: phoneValidation.errorMessage || "رقم الهاتف غير صحيح" 
        };
      }
      const normalizedPhone = normalizeEgyptianPhone(phone);

      const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
        phone: normalizedPhone,
        token,
        type: 'sms'
      });

      if (verifyError) {
        throw verifyError;
      }
      
      if (!verifyData.user) {
          throw new Error("Could not verify OTP and get user.");
      }

      // Now that user is logged in, upsert their profile.
      // The RLS policy needs to allow an authenticated user to upsert their own profile.
      const { data: upsertedUser, error: upsertError } = await supabase
        .from("users")
        .upsert({
          id: verifyData.user.id,
          name: sanitizedName,
          phone: normalizedPhone,
          is_verified: true // This can be true since they verified via OTP.
        })
        .select()
        .single();


      if (upsertError) {
        throw upsertError;
      }
      
      // The onAuthStateChange listener should handle setting user state, but we can do it here too for immediate UI update.
      setUser(upsertedUser as User);

      return { success: true };
    } catch (error: any) {
      console.error("Verification and profile update error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const value = { user, session, isLoading, signIn, verifyOtpAndUpdateProfile, logout };

  return (
    <AuthContext.Provider value={value}>
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
