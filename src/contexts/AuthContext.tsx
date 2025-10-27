
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { normalizeEgyptianPhone, validateEgyptianPhone } from "@/utils/phoneValidation";
import { sanitizeText } from "@/utils/security";
import { Session, User } from "@supabase/supabase-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the shape of our user profile
interface UserProfile {
  id: string;
  name: string;
  phone: string;
}

// Define the context shape
interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isVerified: boolean;
  sendOtp: (phone: string) => Promise<{ success: boolean; error?: string }>;
  verifyOtp: (phone: string, token: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the validation schema for the OTP
const OTPSchema = z.object({
  phone: z.string().refine(phone => validateEgyptianPhone(phone).isValid, {
    message: "رقم الهاتف غير صحيح",
  }),
  token: z.string().min(6, { message: "يجب أن يكون الرمز مكونًا من 6 أرقام" }),
  name: z.string().optional(),
});


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error.message);
        setIsLoading(false);
        return;
      }

      if (session) {
        await handleAuthChange(session);
      } else {
        setIsLoading(false);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        await handleAuthChange(session);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleAuthChange = async (session: Session | null) => {
    if (session?.user) {
      const { data: userProfile, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error.message);
        setUser(null);
      } else if (userProfile) {
        setUser({
          id: userProfile.id,
          name: userProfile.name,
          phone: userProfile.phone,
        });
        setIsVerified(true);
      }
    } else {
      setUser(null);
      setIsVerified(false);
    }
    setIsLoading(false);
  };
  
  const sendOtp = async (phone: string) => {
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
      return { success: false, error: error.message };
    }
    return { success: true };
  };

  const verifyOtp = async (phone: string, token: string, name?: string) => {
    const validation = OTPSchema.safeParse({ phone, token, name });
    if (!validation.success) {
      return { success: false, error: validation.error.errors[0].message };
    }
    
    const normalizedPhone = normalizeEgyptianPhone(phone);
    
    const { data: { session }, error } = await supabase.auth.verifyOtp({
      phone: normalizedPhone,
      token,
      type: 'sms'
    });
  
    if (error) {
      return { success: false, error: "الرمز الذي أدخلته غير صحيح." };
    }
  
    if (session && name) {
      const sanitizedName = sanitizeText(name);
      
      const { error: updateError } = await supabase
        .from('users')
        .update({ name: sanitizedName })
        .eq('id', session.user.id);
  
      if (updateError) {
        console.error("Error updating username:", updateError);
        // Not returning an error to the user as the login was successful
      }
    }
  
    return { success: true };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isVerified, sendOtp, verifyOtp, logout }}>
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
