import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Gift, Star, ArrowLeft, BookOpen, PenTool, Calculator, Palette, GraduationCap } from "lucide-react";

export function OffersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      id: 1,
      title: "خصم 50% على الأقلام والمساطر",
      description: "جميع أنواع الأقلام والمساطر الهندسية",
      discount: "50%",
      icon: PenTool,
      color: "bg-gradient-to-r from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "عرض الدفاتر والمذكرات",
      description: "دفاتر ومذكرات بجودة عالية",
      discount: "30%",
      icon: BookOpen,
      color: "bg-gradient-to-r from-primary to-primary-dark"
    },
    {
      id: 3,
      title: "آلات حاسبة وأدوات هندسية",
      description: "آلات حاسبة ومساطر وبوصلات",
      discount: "40%",
      icon: Calculator,
      color: "bg-gradient-to-r from-primary to-primary-dark"
    },
    {
      id: 4,
      title: "أدوات الرسم والتلوين",
      description: "ألوان وفرش ولوازم الرسم",
      discount: "35%",
      icon: Palette,
      color: "bg-gradient-to-r from-primary to-primary-dark"
    },
    {
      id: 5,
      title: "منظمات مكتبية أنيقة",
      description: "منظمات وملفات لتنظيم مكتبك",
      discount: "25%",
      icon: GraduationCap,
      color: "bg-gradient-to-r from-primary to-primary-dark"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [offers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const currentOffer = offers[currentSlide];
  const IconComponent = currentOffer.icon;

  return (
    <section className="relative overflow-hidden">
      <div className={`${currentOffer.color} text-white py-12 transition-all duration-500`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="text-center lg:text-right space-y-6 flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <IconComponent className="h-8 w-8 text-accent" />
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                  عرض خاص
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                {currentOffer.title}
              </h2>
              
              <p className="text-xl opacity-90">
                {currentOffer.description}
              </p>
              
              <div className="text-6xl font-bold text-accent">
                خصم {currentOffer.discount}
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="mr-2 opacity-90">عرض محدود</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 h-auto border-2 border-accent"
              >
                اطلب الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 h-auto"
              >
                تفاصيل العرض
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-accent w-8' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-10 w-20 h-20 bg-accent rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-4 right-10 w-16 h-16 bg-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}