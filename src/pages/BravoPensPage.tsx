import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bravoClassicBlueImage from "@/assets/bravo-classic-blue.jpg";
import bravoClassicRedImage from "@/assets/bravo-classic-red.jpg";
import bravoClassicBlackImage from "@/assets/bravo-classic-black.jpg";
import bravoSmoothBlueImage from "@/assets/bravo-smooth-blue.jpg";
import bravoSmoothRedImage from "@/assets/bravo-smooth-red.jpg";
import bravoSmoothBlackImage from "@/assets/bravo-smooth-black.jpg";
import bravoLuxuryBlueImage from "@/assets/bravo-luxury-blue.jpg";
import bravoLuxuryRedImage from "@/assets/bravo-luxury-red.jpg";
import bravoLuxuryBlackImage from "@/assets/bravo-luxury-black.jpg";
import bravoOfficeBlueImage from "@/assets/bravo-office-blue.jpg";
import bravoOfficeRedImage from "@/assets/bravo-office-red.jpg";
import bravoOfficeBlackImage from "@/assets/bravo-office-black.jpg";

const bravoPens = [
  { id: 'bravo-classic-blue', name: 'قلم برافو كلاسيك - أزرق', price: 5, image: bravoClassicBlueImage, description: 'قلم حبر جاف كلاسيكي 1.0 مم لكتابة ناعمة ومريحة' },
  { id: 'bravo-classic-red', name: 'قلم برافو كلاسيك - أحمر', price: 5, image: bravoClassicRedImage, description: 'قلم حبر جاف كلاسيكي 1.0 مم لكتابة ناعمة ومريحة' },
  { id: 'bravo-classic-black', name: 'قلم برافو كلاسيك - أسود', price: 5, image: bravoClassicBlackImage, description: 'قلم حبر جاف كلاسيكي 1.0 مم لكتابة ناعمة ومريحة' },
  { id: 'bravo-smooth-blue', name: 'قلم برافو سموث - أزرق', price: 7, image: bravoSmoothBlueImage, description: 'قلم حبر جاف ناعم 0.7 مم للكتابة السلسة' },
  { id: 'bravo-smooth-red', name: 'قلم برافو سموث - أحمر', price: 7, image: bravoSmoothRedImage, description: 'قلم حبر جاف ناعم 0.7 مم للكتابة السلسة' },
  { id: 'bravo-smooth-black', name: 'قلم برافو سموث - أسود', price: 7, image: bravoSmoothBlackImage, description: 'قلم حبر جاف ناعم 0.7 مم للكتابة السلسة' },
  { id: 'bravo-luxury-blue', name: 'قلم برافو لوكس - أزرق', price: 12, image: bravoLuxuryBlueImage, description: 'قلم حبر جاف فاخر بتصميم أنيق ومقبض مريح' },
  { id: 'bravo-luxury-red', name: 'قلم برافو لوكس - أحمر', price: 12, image: bravoLuxuryRedImage, description: 'قلم حبر جاف فاخر بتصميم أنيق ومقبض مريح' },
  { id: 'bravo-luxury-black', name: 'قلم برافو لوكس - أسود', price: 12, image: bravoLuxuryBlackImage, description: 'قلم حبر جاف فاخر بتصميم أنيق ومقبض مريح' },
  { id: 'bravo-office-blue', name: 'قلم برافو أوفيس - أزرق', price: 6, image: bravoOfficeBlueImage, description: 'قلم حبر جاف مثالي للاستخدام المكتبي والتعليمي' },
  { id: 'bravo-office-red', name: 'قلم برافو أوفيس - أحمر', price: 6, image: bravoOfficeRedImage, description: 'قلم حبر جاف مثالي للاستخدام المكتبي والتعليمي' },
  { id: 'bravo-office-black', name: 'قلم برافو أوفيس - أسود', price: 6, image: bravoOfficeBlackImage, description: 'قلم حبر جاف مثالي للاستخدام المكتبي والتعليمي' },
];

const BravoPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام برافو | تفانين";
    const desc = "تسوق أقلام برافو عالية الجودة للكتابة السلسة والمريحة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens/ballpoint" className="hover:text-primary">أقلام الجاف</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام برافو</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام برافو</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام برافو عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bravoPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {pen.image === '🖊️' || pen.image === '🌈' ? (
                  <span>{pen.image}</span>
                ) : (
                  <img 
                    src={pen.image} 
                    alt={pen.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-semibold mb-2">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pen.id, name: pen.name, price: pen.price, image: pen.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens/ballpoint">العودة إلى أقلام الجاف</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BravoPensPage;
