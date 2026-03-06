import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tafaneen.jpg";
import { Link } from "react-router-dom";

export function Hero() {
  // فتح واتساب
  const openWhatsApp = () => {
    const phoneNumber = "201026274235";
    const message = "مرحباً، أريد الاستفسار عن المنتجات";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 text-primary px-6 py-2 rounded-2xl text-sm font-bold shadow-lg animate-bounce-in">
                <Sparkles className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="tracking-wide">مكتبة تفانين الإلكترونية</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-gradient">مكتبة تفانين</span>
                <br />
                <span className="text-foreground drop-shadow-sm">عالم الإبداع والقرطاسية</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                اكتشف تشكيلة واسعة من الأدوات المكتبية والقرطاسية العصرية التي تلهم إبداعك كل يوم.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button asChild className="btn-tafaneen text-xl px-10 py-7 h-auto shadow-2xl">
                <Link to="/categories">
                  <ShoppingBag className="ml-3 h-6 w-6" />
                  ابدأ التسوق
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="text-xl px-10 py-7 h-auto border-2 border-primary/20 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-2xl transition-all duration-500"
                onClick={openWhatsApp}
              >
                <MessageCircle className="ml-3 h-6 w-6 text-whatsapp" />
                تواصل معنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10">
              <div className="glass-card p-4 text-center group hover:scale-110 duration-500">
                <div className="text-3xl font-black text-primary group-hover:animate-pulse">2000+</div>
                <div className="text-sm font-bold text-muted-foreground">منتج متميز</div>
              </div>
              <div className="glass-card p-4 text-center group hover:scale-110 duration-500">
                <div className="text-3xl font-black text-orange-500 group-hover:animate-pulse">24/7</div>
                <div className="text-sm font-bold text-muted-foreground">خدمة متواصلة</div>
              </div>
              <div className="glass-card p-4 text-center group hover:scale-110 duration-500">
                <div className="text-3xl font-black text-yellow-500 group-hover:animate-pulse">100%</div>
                <div className="text-sm font-bold text-muted-foreground">ثقة وضمان</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in group" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
              
              {/* Main Image with Glass Container */}
              <div className="relative glass-card p-3 rotate-1 group-hover:rotate-0 duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[16/10]">
                  <img
                    src={heroImage}
                    alt="مكتبة تفانين - إبداع بلا حدود"
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-8 right-8 glass-morphism rounded-2xl p-6 shadow-2xl animate-float">
                    <div className="text-xl font-black text-white mb-1">توصيل سريع 🚀</div>
                    <div className="text-sm font-bold text-white/90">لجميع محافظات مصر</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background blobs */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[120%] h-[120%] bg-gradient-to-br from-primary/10 via-accent/10 to-orange-500/10 rounded-full blur-3xl animate-aurora-drift"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
