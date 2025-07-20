import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
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

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="text-white/80 mb-6">
              احصل على أحدث العروض والكتب الجديدة مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                placeholder="بريدك الإلكتروني"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                dir="rtl"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                اشتراك
              </Button>
            </div>
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
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">01234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@tafaneen.net</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
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
                <Button variant="ghost" size="icon" className="btn-whatsapp h-8 w-8">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-white/80 text-sm">
              طرق الدفع: فيزا | ماستركارد | فودافون كاش
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}