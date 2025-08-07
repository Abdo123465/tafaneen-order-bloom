import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OffersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      id: 1,
      image: "/lovable-uploads/f33df929-57a0-4663-b698-3854907c88ed.png",
      alt: "عرض خاص بمناسبة الجودة للمدارس - خصم 20% على الأدوات المكتبية"
    },
    {
      id: 2,
      image: "/lovable-uploads/94a50846-0f45-464f-be83-47941edfe632.png", 
      alt: "خصم 15% و 20% على الكتب الخارجية"
    },
    {
      id: 3,
      image: "/lovable-uploads/80a77817-79a7-46da-9034-bacb10dc84fa.png",
      alt: "خصم 10% على قسم الطباعة"
    },
    {
      id: 4,
      image: "/lovable-uploads/ad776173-075e-4f6d-b790-72e729481027.png",
      alt: "خصم 15% على خدمات الكمبيوتر والسيرة الذاتية"
    },
    {
      id: 5,
      image: "/lovable-uploads/4f9d357f-2506-4ff3-8279-4e283391b6a7.png",
      alt: "خصم 15% على قسم الاستوديو وطباعة الصور"
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-8">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={currentOffer.image}
              alt={currentOffer.alt}
              className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
            />
            
            {/* Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white text-primary rounded-full shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-primary w-8' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white text-primary rounded-full shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}