
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeText } from "@/utils/security";
import { Session, User } from "@supabase/supabase-js";
import { z } from "zod";
import { AuthCredentials } from "@/types/auth";


// Define the shape of our user profile
interface UserProfile {
  id: string;
  name: string | null;
  email: string | undefined;
}

// Define the context shape
interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  signUp: (credentials: AuthCredentials) => Promise<{ success: boolean; error?: string; requiresConfirmation?: boolean }>;
  signIn: (credentials: AuthCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the validation schema for signup
const SignUpSchema = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().min(6, { message: "يجب أن تكون كلمة المرور 6 أحرف على الأقل" }),
  name: z.string().min(2, { message: "يجب أن يكون الاسم حرفين على الأقل" }),
});

const SignInSchema = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().min(1, { message: "كلمة المرور مطلوبة" }),
});


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
          email: userProfile.email,
        });
      }
    } else {
      setUser(null);
    }
    setIsLoading(false);
  };

  const signUp = async ({ email, password, name }: AuthCredentials) => {
    const validation = SignUpSchema.safeParse({ email, password, name });
    if (!validation.success) {
      return { success: false, error: validation.error.errors[0].message };
    }

    const sanitizedName = sanitizeText(name!);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: sanitizedName,
        }
      }
    });

    if (error) {
      return { success: false, error: error.message };
    }
    
    // Check if the user needs to confirm their email
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      return { success: true, requiresConfirmation: true };
    }

    return { success: true };
  };
  
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const signIn = async ({ email, password }: AuthCredentials) => {
    const validation = SignInSchema.safeParse({ email, password });
    if (!validation.success) {
      return { success: false, error: validation.error.errors[0].message };
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message === 'Invalid login credentials') {
        return { success: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signUp, signIn, logout }}>
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
