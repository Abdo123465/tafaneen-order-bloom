
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { User, Phone, KeyRound } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [step, setStep] = useState<'phone' | 'otp' | 'name'>('phone');
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { sendOtp, verifyOtp } = useAuth();

  const handleSendOtp = async () => {
    if (import.meta.env.DEV) {
      console.log("Development mode: OTP flow bypassed");
      toast({
        title: "وضع التطوير",
        description: "تم تخطي عملية إرسال الرمز.",
      });
      setStep('otp');
      return;
    }

    setIsLoading(true);
    const result = await sendOtp(phone);
    if (result.success) {
      toast({
        title: "تم إرسال الرمز",
        description: "لقد أرسلنا رمز التحقق إلى هاتفك.",
      });
      setStep('otp');
    } else {
      toast({
        title: "خطأ",
        description: result.error || "فشل إرسال الرمز",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    const result = await verifyOtp(phone, otp, name);
    if (result.success) {
      toast({
        title: "تم التحقق بنجاح",
        description: "تم تسجيل دخولك بنجاح.",
      });
      onOpenChange(false);
    } else {
      toast({
        title: "خطأ",
        description: result.error || "فشل التحقق من الرمز",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };
  
  const renderStep = () => {
    console.log("Current step:", step);
    switch (step) {
      case 'phone':
        return (
          <div className="space-y-4">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01234567890" />
            <Button onClick={handleSendOtp} disabled={isLoading} className="w-full">
              {isLoading ? "جاري الإرسال..." : "إرسال الرمز"}
            </Button>
          </div>
        );
      case 'otp':
        return (
          <div className="space-y-4">
            <Label htmlFor="otp">رمز التحقق</Label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp} id="otp">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Label htmlFor="name">الاسم (اختياري)</Label>
            <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك" />
            <Button onClick={handleVerifyOtp} disabled={isLoading} className="w-full">
              {isLoading ? "جاري التحقق..." : "التحقق وتسجيل الدخول"}
            </Button>
          </div>
        );
    }
  };
  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>تسجيل الدخول أو إنشاء حساب</DialogTitle>
          <DialogDescription>
            أدخل رقم هاتفك لإرسال رمز تحقق لمرة واحدة (OTP).
          </DialogDescription>
        </DialogHeader>
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}
