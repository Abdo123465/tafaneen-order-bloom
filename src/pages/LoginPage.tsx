import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const { signIn, verifyOtpAndUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("الرجاء إدخال الاسم ورقم الهاتف");
      return;
    }
    const { success, error } = await signIn(phone);
    if (success) {
      setStep("otp");
      toast.success("تم إرسال رمز التحقق إلى هاتفك");
    } else {
      toast.error(error || "حدث خطأ ما");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
        toast.error("الرجاء إدخال رمز التحقق");
        return;
    }
    const { success, error } = await verifyOtpAndUpdateProfile(phone, otp, name);
    if (success) {
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/");
    } else {
      toast.error(error || "رمز التحقق غير صحيح");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h1>
        {step === "phone" ? (
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
                <Input
                type="text"
                placeholder="ادخل اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                required
                />
            </div>
            <div className="mb-4">
              <Input
                type="tel"
                placeholder="ادخل رقم الموبايل"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              إرسال رمز التحقق
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col items-center">
            <p className="mb-4 text-center">ادخل الرمز المكون من 6 أرقام الذي تم إرساله إلى هاتفك</p>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <Button type="submit" className="w-full mt-6">
              تحقق وتسجيل الدخول
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
