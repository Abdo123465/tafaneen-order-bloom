import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setStatus("loading");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/confirm`,
      },
    });
    if (error) {
      setError(error.message);
      setStatus("error");
    } else {
      setStatus("sent");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={handleLogin}
        disabled={status === "loading"}
        className="btn btn-primary w-full max-w-xs"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "إرسال الكود"}
      </button>
      {status === "sent" && <p className="text-success">تم إرسال رابط / كود إلى بريدك.</p>}
      {status === "error" && <p className="text-error">{error}</p>}
    </div>
  );
};

export default Login;
