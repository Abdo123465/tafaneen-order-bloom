import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bravoBlueImage from "@/assets/bravo-blue.jpg";
import bravoRedImage from "@/assets/bravo-red.jpg";
import bravoBlackImage from "@/assets/bravo-black.jpg";
import bravoGreenImage from "@/assets/bravo-green.jpg";
import bravoOrangeImage from "@/assets/bravo-orange.jpg";
import bravoPurpleImage from "@/assets/bravo-purple.jpg";
import bravoMultipackImage from "@/assets/bravo-multipack.jpg";
import bravoGoldImage from "@/assets/bravo-gold.jpg";
import bravoSilverImage from "@/assets/bravo-silver.jpg";
import bravoFineImage from "@/assets/bravo-fine.jpg";

const bravoPens = [
  { id: 'bravo-blue', name: 'قلم برافو جاف - أزرق', price: 6, image: bravoBlueImage, description: 'قلم حبر جاف 0.7 مم أزرق للكتابة اليومية' },
  { id: 'bravo-red', name: 'قلم برافو جاف - أحمر', price: 6, image: bravoRedImage, description: 'قلم حبر جاف 0.7 مم أحمر للتصحيح والتمييز' },
  { id: 'bravo-black', name: 'قلم برافو جاف - أسود', price: 6, image: bravoBlackImage, description: 'قلم حبر جاف 0.7 مم أسود للكتابة الرسمية' },
  { id: 'bravo-green', name: 'قلم برافو جاف - أخضر', price: 6, image: bravoGreenImage, description: 'قلم حبر جاف 0.7 مم أخضر للتنويع في الكتابة' },
  { id: 'bravo-orange', name: 'قلم برافو جاف - برتقالي', price: 6, image: bravoOrangeImage, description: 'قلم حبر جاف 0.7 مم برتقالي مميز' },
  { id: 'bravo-purple', name: 'قلم برافو جاف - بنفسجي', price: 6, image: bravoPurpleImage, description: 'قلم حبر جاف 0.7 مم بنفسجي أنيق' },
  { id: 'bravo-multipack', name: 'مجموعة أقلام برافو - 8 ألوان', price: 40, image: bravoMultipackImage, description: 'مجموعة متنوعة من أقلام برافو بألوان مختلفة' },
  { id: 'bravo-gold', name: 'قلم برافو جاف - ذهبي', price: 8, image: bravoGoldImage, description: 'قلم حبر جاف ذهبي فاخر للمناسبات الخاصة' },
  { id: 'bravo-silver', name: 'قلم برافو جاف - فضي', price: 8, image: bravoSilverImage, description: 'قلم حبر جاف فضي أنيق للاستخدام المهني' },
  { id: 'bravo-fine', name: 'قلم برافو رفيع - أزرق', price: 7, image: bravoFineImage, description: 'قلم حبر جاف رفيع 0.5 مم للكتابة الدقيقة' },
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
            أقلام برافو عالية الجودة للكتابة السلسة والمريحة بألوان متنوعة وتصاميم مميزة
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
