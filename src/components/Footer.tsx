import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { validateEgyptianPhone, normalizeEgyptianPhone } from "@/utils/phoneValidation";
import { supabase } from "@/integrations/supabase/client";

export function Footer() {
  const { toast } = useToast();
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerSections = [
    {
      title: "الشركة",
      links: [
        { label: "عن تفانين", href: "/about" },
        { label: "اتصل بنا", href: "/contact" },
        { label: "وظائف", href: "/careers" },
        { label: "الأخبار", href: "/news" }
      ]
    },
    {
      title: "خدمة العملاء",
      links: [
        { label: "مركز المساعدة", href: "/help" },
        { label: "سياسة الإرجاع", href: "/returns" },
        { label: "الشحن والتوصيل", href: "/shipping" },
        { label: "طرق الدفع", href: "/payment" }
      ]
    },
    {
      title: "الفئات الرئيسية",
      links: [
        { label: "كتب الكبار", href: "/adult-books" },
        { label: "كتب الأطفال", href: "/children-books" },
        { label: "القرطاسية", href: "/stationery" },
        { label: "أدوات المكتب", href: "/office-supplies" }
      ]
    }
  ];

  // فتح واتساب
  const openWhatsApp = () => {
    const phoneNumber = "201026274235";
    const message = "مرحباً، أريد الاستفسار عن المنتجات";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // الاتصال بالهاتف
  const callPhone = () => {
    window.open('tel:01026274235', '_self');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    const validation = validateEgyptianPhone(whatsAppNumber);
    if (!validation.isValid) {
      setPhoneError(validation.errorMessage || "رقم الواتساب غير صحيح");
      return;
    }

    setIsSubmitting(true);
    try {
      const normalized = normalizeEgyptianPhone(whatsAppNumber);
      const { error } = await supabase.from<any>('whatsapp_subscribers').insert({
        phone: normalized,
        created_at: new Date().toISOString()
      });

      if (error) throw error;

      toast({
        title: "تم الاشتراك عبر واتساب",
        description: "سنُرسل لك تنبيهاً احترافياً فور إضافة أي منتج جديد على متجر تفانين.",
      });
      setWhatsAppNumber("");
    } catch (err: any) {
      toast({
        title: "تعذر إتمام الاشتراك",
        description: err?.message || "حدث خطأ غير متوقع. حاول مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              اشترك عبر واتساب لتنبيهات المنتجات الجديدة
            </h3>
            <p className="text-white/80 mb-6">
              سجّل رقم واتساب الخاص بك لتصلك إشعارات فورية عند إضافة منتجات جديدة في تفانين.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  placeholder="مثال: 01012345678 أو +20 10xxxxxxxx"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  dir="ltr"
                  value={whatsAppNumber}
                  onChange={(e) => setWhatsAppNumber(e.target.value)}
                />
                <Button type="submit" disabled={isSubmitting} variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  {isSubmitting ? 'جارٍ الاشتراك...' : 'اشتراك عبر واتساب'}
                </Button>
              </div>
              {phoneError && (
                <div className="text-red-200 text-sm mt-2 text-right">{phoneError}</div>
              )}
              <div className="text-white/60 text-xs mt-3 text-right">
                بالاشتراك، توافق على تلقي تنبيهات عبر واتساب من تفانين. يمكنك إلغاء الاشتراك في أي وقت.
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">تفانين</h2>
                <p className="text-white/80 text-sm">للكتب والقرطاسية</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              أطلب كتابك اونلاين يصلك لباب البيت. متجر إلكتروني متخصص في الكتب والقرطاسية.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <button 
                onClick={callPhone}
                className="flex items-center gap-3 hover:underline cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">01026274235</span>
              </button>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">122 ز البوابة الاولي حدائق الاهرام، الجيزة، مصر</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/80 text-sm text-center md:text-right">
              © 2024 تفانين. جميع الحقوق محفوظة.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm">تابعنا على:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="btn-whatsapp h-8 w-8"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-white/80 text-sm">
              طرق الدفع: كاش | فودافون كاش | أورانج موني
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
