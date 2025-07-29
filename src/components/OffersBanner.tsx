import { Button } from "@/components/ui/button";
import { Gift, Star, ArrowLeft } from "lucide-react";

export function OffersBanner() {
  return (
    <section className="bg-gradient-primary text-white py-8 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="text-center lg:text-right space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Gift className="h-6 w-6 text-yellow-300" />
              <span className="bg-yellow-300 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                عروض خاصة
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              خصومات تصل إلى <span className="text-yellow-300">50%</span>
            </h2>
            
            <p className="text-xl text-red-100">
              على جميع الكتب والقرطاسية - لفترة محدودة
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-1 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="mr-2 text-red-100">أكثر من 1000 عميل راضٍ</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-lg px-8 py-4 h-auto border-2 border-yellow-300"
            >
              اكتشف العروض
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 h-auto"
            >
              تسوق الآن
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-4 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}