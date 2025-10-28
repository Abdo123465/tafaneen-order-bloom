import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signUp, signIn } = useAuth(); 

  const handleSubmit = async () => {
    setIsLoading(true);
    if (isSignUp) {
      const result = await signUp({ email, password, name });
      if (result.success) {
        toast({
          title: "نجاح!",
          description: result.requiresConfirmation 
            ? "تم إنشاء حسابك. يرجى التحقق من بريدك الإلكتروني للتفعيل."
            : "تم إنشاء حسابك وتسجيل دخولك.",
        });
        // Don't close dialog automatically on sign up, so user can see confirmation message.
      } else {
        toast({
          title: "خطأ في إنشاء الحساب",
          description: result.error || "حدث خطأ غير متوقع.",
          variant: "destructive",
        });
      }
    } else {
      const result = await signIn({ email, password });
      if (result.success) {
        toast({
          title: "أهلاً بعودتك!",
          description: "تم تسجيل دخولك بنجاح.",
        });
        onOpenChange(false);
      } else {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: result.error || "حدث خطأ غير متوقع.",
          variant: "destructive",
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isSignUp ? "إنشاء حساب جديد" : "تسجيل الدخول"}</DialogTitle>
          <DialogDescription>
            {isSignUp ? "أدخل بياناتك لإنشاء حساب." : "أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك بالكامل" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
          </div>
          <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
            {isLoading ? "جاري..." : (isSignUp ? "إنشاء حساب" : "تسجيل الدخول")}
          </Button>
          <Button variant="link" onClick={() => setIsSignUp(!isSignUp)} className="w-full">
            {isSignUp ? "هل لديك حساب بالفعل؟ تسجيل الدخول" : "ليس لديك حساب؟ إنشاء حساب جديد"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
