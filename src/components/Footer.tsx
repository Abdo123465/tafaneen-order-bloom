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
      const { error } = await supabase.from('whatsapp_subscribers').insert({
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
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-orange-600 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/10 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl group-hover:scale-110 duration-500 shadow-2xl">
                <span className="text-3xl">📚</span>
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">تفانين</h2>
                <p className="text-white/70 text-sm font-bold uppercase tracking-widest">للكتب والقرطاسية</p>
              </div>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              أطلب كتابك اونلاين يصلك لباب البيت. متجر إلكتروني متخصص في الكتب والقرطاسية، نسعى دائماً لتقديم الأفضل لعملائنا.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <button 
                onClick={callPhone}
                className="flex items-center gap-4 group bg-white/10 hover:bg-white/20 p-3 rounded-2xl transition-all duration-300 w-fit"
              >
                <div className="bg-white/20 p-2 rounded-xl">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">01026274235</span>
              </button>
              <div className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl w-fit">
                <div className="bg-white/20 p-2 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-base font-medium">122 ز البوابة الاولي حدائق الاهرام، الجيزة، مصر</span>
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
