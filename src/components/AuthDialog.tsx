import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { User, Phone } from "lucide-react";
import { validateEgyptianPhone } from "@/utils/phoneValidation";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAuth();

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setPhoneError("");
    
    if (value.trim()) {
      const validation = validateEgyptianPhone(value);
      if (!validation.isValid) {
        setPhoneError(validation.errorMessage || "رقم الهاتف غير صحيح");
      }
    }
  };
  const handleLogin = async () => {
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال جميع البيانات المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // التحقق من صحة رقم الهاتف المصري
    const phoneValidation = validateEgyptianPhone(phone);
    if (!phoneValidation.isValid) {
      toast({
        title: "خطأ",
        description: phoneValidation.errorMessage || "يرجى إدخال رقم هاتف مصري صحيح",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(name, phone);

      if (result.success) {
        toast({
          title: "مرحباً بك!",
          description: `تم تسجيل الدخول بنجاح، أهلاً ${name}`,
        });
        onOpenChange(false);
        // إعادة تعيين النموذج
        setName("");
        setPhone("");
        setPhoneError("");
      } else {
        toast({
          title: "خطأ",
          description: result.error || "فشل في تسجيل الدخول",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في تسجيل الدخول",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gradient">
            تسجيل الدخول
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
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
              <Label htmlFor="phone" className="text-right">
                رقم الهاتف
              </Label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="010xxxxxxxx أو +20 10xxxxxxxx"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`pr-10 ${phoneError ? 'border-destructive' : ''}`}
                  dir="ltr"
                />
              </div>
              {phoneError && (
                <p className="text-xs text-destructive text-right">{phoneError}</p>
              )}
              <p className="text-xs text-muted-foreground text-right">
                رقم هاتف مصري صحيح (موبايل أو أرضي)
              </p>
            </div>
          </div>

          <Button 
            onClick={handleLogin} 
            disabled={isLoading || !!phoneError}
            className="w-full btn-tafaneen"
          >
            {isLoading ? "جاري التسجيل..." : "تسجيل الدخول"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}