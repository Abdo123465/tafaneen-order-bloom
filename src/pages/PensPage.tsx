import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PenCategories } from "@/components/PenCategories";
import { useCart } from "@/contexts/CartContext";

const featuredPens = [
  { id: 'pen-1', name: 'قلم حبر جاف أزرق - 10 قطع', price: 35, image: '🖊️', category: 'أقلام الجاف' },
  { id: 'pen-2', name: 'قلم رصاص HB - 12 قطعة', price: 25, image: '✏️', category: 'أقلام الرصاص' },
  { id: 'pen-3', name: 'ماركر سبورة أسود - 4 قطع', price: 40, image: '🖍️', category: 'أقلام السنون' },
  { id: 'pen-4', name: 'قلم هايلايتر 6 ألوان', price: 45, image: '🖌️', category: 'أقلام السنون' },
  { id: 'pen-5', name: 'قلم جل أزرق ناعم - 5 قطع', price: 30, image: '🖋️', category: 'أقلام الجل' },
  { id: 'pen-6', name: 'قلم كوريكتور أبيض', price: 15, image: '🖊️', category: 'أقلام الكوريكتور' },
];

const PensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "الأقلام ومستلزمات الكتابة | تفانين";
    const desc = "تسوق جميع أنواع الأقلام وأدوات الكتابة من تفانين - أقلام رصاص، جاف، جل، حبر، ماركر، خط وكوريكتور.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">الأقلام ومستلزمات الكتابة</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف مجموعة شاملة من الأقلام وأدوات الكتابة عالية الجودة لجميع احتياجاتك التعليمية والمهنية
          </p>
        </div>

        {/* Pen Categories Section */}
        <PenCategories />

        {/* Featured Products Section */}
        <section className="py-12 mt-16 bg-secondary/30 rounded-2xl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">المنتجات المميزة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPens.map((pen) => (
                <div key={pen.id} className="card-product bg-white">
                  <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                    {pen.image}
                  </div>
                  <div className="text-xs text-primary font-medium mb-1">{pen.category}</div>
                  <h3 className="font-semibold mb-2">{pen.name}</h3>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PensPage;
