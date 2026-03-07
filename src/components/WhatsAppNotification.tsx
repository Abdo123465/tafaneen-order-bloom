import { useState } from "react";
import { MessageCircle, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WhatsAppNotification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (phoneNumber.trim() && phoneNumber.startsWith("+2") || phoneNumber.startsWith("01")) {
      // Simulate subscription
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setPhoneNumber("");
      }, 3000);
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Glass Card Container */}
        <div className="glass-card-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Icon & Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4 animate-float">
                <Bell className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="text-gradient">تنبيهات المنتجات الجديدة</span>
              </h2>
              
              <p className="text-muted-foreground text-lg">
                سجّل رقم واتساب الخاص بك لتصلك إشعارات فورية عند إضافة منتجات جديدة في تفانين
              </p>
            </div>

            {/* Subscription Form */}
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+20 1XX XXX XXXX"
                  className="text-lg py-6 glass-input flex-1"
                  dir="ltr"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                />
                <Button 
                  onClick={handleSubscribe}
                  className="btn-glass-premium text-lg px-8 py-6 h-auto"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  اشترك الآن
                </Button>
              </div>
            ) : (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 animate-bounce-in">
                <div className="flex items-center justify-center gap-3 text-green-600">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-lg font-semibold">تم الاشتراك بنجاح!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ستصلك تنبيهات على واتساب عند إضافة منتجات جديدة
                </p>
              </div>
            )}

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">إشعارات فورية</h3>
                <p className="text-sm text-muted-foreground">
                  تصلك التنبيهات فور إضافة أي منتج جديد
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">عبر واتساب</h3>
                <p className="text-sm text-muted-foreground">
                  لا حاجة لتحميل تطبيقات إضافية
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <X className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">إلغاء في أي وقت</h3>
                <p className="text-sm text-muted-foreground">
                  يمكنك إلغاء الاشتراك بسهولة متى شئت
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
