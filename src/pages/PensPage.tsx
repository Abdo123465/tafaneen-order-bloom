import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const pens = [
  { id: 'pen-1', name: 'قلم حبر جاف أزرق - 10 قطع', price: 35, image: '🖊️' },
  { id: 'pen-2', name: 'قلم رصاص HB - 12 قطعة', price: 25, image: '✏️' },
  { id: 'pen-3', name: 'ماركر سبورة أسود - 4 قطع', price: 40, image: '🖍️' },
  { id: 'pen-4', name: 'قلم هايلايتر 6 ألوان', price: 45, image: '🖌️' },
];

const PensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "الأقلام | تفانين";
    const desc = "تسوق جميع أنواع الأقلام وأدوات الكتابة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">الأقلام</h1>
        <p className="text-muted-foreground mb-8">جميع أقلام الحبر والرصاص والماركر.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pens.map((p) => (
            <div key={p.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">{p.image}</div>
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{p.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: p.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PensPage;
