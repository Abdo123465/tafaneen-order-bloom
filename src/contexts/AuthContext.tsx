import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  loginWithGoogle: () => Promise<{ error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await getUserProfile(session.user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Fetch initial session
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await getUserProfile(session.user);
      }
      setIsLoading(false);
    };

    fetchSession();

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const getUserProfile = async (supabaseUser: SupabaseUser) => {
    const { data: profile, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', supabaseUser.id)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      // Create a local profile if fetching fails, using Supabase user data
      setUser({
        id: supabaseUser.id,
        name: supabaseUser.user_metadata.full_name || supabaseUser.email || 'No name',
        email: supabaseUser.email || 'No email',
        avatar_url: supabaseUser.user_metadata.avatar_url
      });
    } else if (profile) {
      setUser({
        id: profile.id,
        name: profile.name || supabaseUser.user_metadata.full_name,
        email: profile.email,
        avatar_url: supabaseUser.user_metadata.avatar_url
      });
    }
  };

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error("Google login error:", error);
      return { error: error.message };
    }
    return {};
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, loginWithGoogle, logout }}>
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
