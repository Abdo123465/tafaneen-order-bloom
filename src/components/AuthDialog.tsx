import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, AtSign, User, Hash } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [step, setStep] = useState<"username" | "verification">("username");
  const [name, setName] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login, verifyCode } = useAuth();

  const handleSendCode = async () => {
    if (!name.trim() || !telegramUsername.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال الاسم واسم المستخدم في تيليجرام",
        variant: "destructive",
      });
      return;
    }

    // التحقق من صحة اسم المستخدم
    const username = telegramUsername.startsWith("@") ? telegramUsername : `@${telegramUsername}`;
    if (!/^@[a-zA-Z0-9_]{5,32}$/.test(username)) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال اسم مستخدم صحيح في تيليجرام",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await login(name, username);
      
      if (result.success) {
        setStep("verification");
        toast({
          title: "تم الإرسال",
          description: "تم إرسال رمز التحقق إلى حسابك في تيليجرام",
        });
      } else {
        toast({
          title: "خطأ",
          description: result.error || "فشل في إرسال رمز التحقق",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في إرسال رمز التحقق",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال رمز التحقق المكون من 6 أرقام",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const username = telegramUsername.startsWith("@") ? telegramUsername : `@${telegramUsername}`;
      const result = await verifyCode(username, verificationCode);
      
      if (result.success) {
        toast({
          title: "مرحباً بك!",
          description: `تم تسجيل الدخول بنجاح، أهلاً ${name}`,
        });
        onOpenChange(false);
        // إعادة تعيين النموذج
        setStep("username");
        setName("");
        setTelegramUsername("");
        setVerificationCode("");
      } else {
        toast({
          title: "خطأ",
          description: result.error || "رمز التحقق غير صحيح",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في التحقق من الرمز",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep("username");
    setVerificationCode("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gradient">
            {step === "username" ? "تسجيل الدخول" : "رمز التحقق"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {step === "username" ? (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-right">الاسم</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pr-10"
                      dir="rtl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telegram" className="text-right">اسم المستخدم في تيليجرام</Label>
                  <div className="relative">
                    <AtSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="telegram"
                      type="text"
                      placeholder="username أو @username"
                      value={telegramUsername}
                      onChange={(e) => setTelegramUsername(e.target.value)}
                      className="pr-10"
                      dir="ltr"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-right">
                    سيتم إرسال رمز التحقق عبر تيليجرام. تأكد من إرسال رسالة للبوت أولاً
                  </p>
                </div>
              </div>

              <Button 
                onClick={handleSendCode} 
                disabled={isLoading}
                className="w-full btn-tafaneen"
              >
                {isLoading ? "جاري الإرسال..." : "إرسال رمز التحقق"}
              </Button>
            </>
          ) : (
            <>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  تم إرسال رمز التحقق إلى حسابك في تيليجرام
                </p>
                <p className="font-medium text-primary">{telegramUsername}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="code" className="text-right">رمز التحقق</Label>
                <div className="relative">
                  <Hash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="code"
                    type="text"
                    placeholder="xxxxxx"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="pr-10 text-center text-lg tracking-widest"
                    dir="ltr"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-right">
                  أدخل الرمز المكون من 6 أرقام الذي تم إرساله لك
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleVerifyCode} 
                  disabled={isLoading || verificationCode.length !== 6}
                  className="w-full btn-tafaneen"
                >
                  {isLoading ? "جاري التحقق..." : "تأكيد"}
                </Button>

                <Button 
                  onClick={handleBack} 
                  variant="ghost" 
                  className="w-full"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  العودة
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}