import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tafaneen.jpg";

export function Hero() {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                مكتبة تفانين الإلكترونية
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">مكتبة تفانين</span>
                <br />
                <span className="text-foreground">أدوات مكتبية وقرطاسية متنوعة</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                متجر إلكتروني متخصص في الأدوات المكتبية والقرطاسية. خدمة توصيل سريعة وموثوقة.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-tafaneen text-lg px-8 py-4 h-auto">
                <ShoppingBag className="ml-2 h-5 w-5" />
                تسوق الآن
              </Button>
              
              <Button variant="outline" className="text-lg px-8 py-4 h-auto border-2 hover:bg-primary/5">
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل عبر واتساب
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">منتج مكتبي</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">عميل راضٍ</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">خدمة العملاء</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-warm rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] md:aspect-[16/10]">
                <img 
                  src={heroImage} 
                  alt="مكتبة تفانين - كتب وقرطاسية" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-sm font-medium text-foreground">توصيل مجاني</div>
                  <div className="text-xs text-muted-foreground">للطلبات أكثر من 100 ج.م</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-warm rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}