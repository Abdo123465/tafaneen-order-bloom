import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// استيراد صور المنتجات
import bravoBlueImage from "@/assets/bravo-blue.jpg";
import bravoRedImage from "@/assets/bravo-red.jpg";
import bravoBlackImage from "@/assets/bravo-black.jpg";
import bravoGreenImage from "@/assets/bravo-green.jpg";
import bravoPurpleImage from "@/assets/bravo-purple.jpg";

const bravoPens = [
  { id: 'bravo-blue', name: 'قلم برافو أزرق', price: 5, image: bravoBlueImage, description: 'قلم حبر جاف عادي باللون الأزرق' },
  { id: 'bravo-red', name: 'قلم برافو أحمر', price: 5, image: bravoRedImage, description: 'قلم حبر جاف عادي باللون الأحمر' },
  { id: 'bravo-black', name: 'قلم برافو أسود', price: 5, image: bravoBlackImage, description: 'قلم حبر جاف عادي باللون الأسود' },
  { id: 'bravo-green', name: 'قلم برافو أخضر', price: 5, image: bravoGreenImage, description: 'قلم حبر جاف عادي باللون الأخضر' },
  { id: 'bravo-purple', name: 'قلم برافو بنفسجي', price: 5, image: bravoPurpleImage, description: 'قلم حبر جاف عادي باللون البنفسجي' },
];

const BravoPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام برافو | تفانين";
    const desc = "تسوق أقلام برافو عالية الجودة للكتابة العادية من تفانين.";
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
          <span className="text-foreground">أقلام برافو</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام برافو</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام برافو عالية الجودة للكتابة العادية بألوان متنوعة
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
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BravoPensPage;
