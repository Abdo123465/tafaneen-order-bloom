import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, User, Hash } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [step, setStep] = useState<"phone" | "verification">("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendCode = async () => {
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال الاسم ورقم الهاتف",
        variant: "destructive",
      });
      return;
    }

    if (!/^01[0-2|5]\d{8}$/.test(phone)) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال رقم هاتف صحيح",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // محاكاة إرسال رسالة SMS
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep("verification");
      toast({
        title: "تم الإرسال",
        description: "تم إرسال رمز التحقق إلى رقم هاتفك",
      });
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
      // محاكاة التحقق من الكود
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // محاكاة كود صحيح (123456)
      if (verificationCode === "123456") {
        toast({
          title: "مرحباً بك!",
          description: `تم تسجيل الدخول بنجاح، أهلاً ${name}`,
        });
        onOpenChange(false);
        // إعادة تعيين النموذج
        setStep("phone");
        setName("");
        setPhone("");
        setVerificationCode("");
      } else {
        toast({
          title: "خطأ",
          description: "رمز التحقق غير صحيح. حاول مرة أخرى (استخدم 123456 للاختبار)",
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
    setStep("phone");
    setVerificationCode("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gradient">
            {step === "phone" ? "تسجيل الدخول" : "رمز التحقق"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {step === "phone" ? (
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
                  <Label htmlFor="phone" className="text-right">رقم الهاتف</Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pr-10"
                      dir="ltr"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-right">
                    سيتم إرسال رمز التحقق على هذا الرقم
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
                  تم إرسال رمز التحقق إلى
                </p>
                <p className="font-medium text-primary">{phone}</p>
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
                  أدخل الرمز المكون من 6 أرقام (للاختبار: 123456)
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