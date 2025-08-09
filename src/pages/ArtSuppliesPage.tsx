import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const items = [
  { id: 'art-1', name: 'ألوان خشبية 24 لون', price: 60, image: '🖍️' },
  { id: 'art-2', name: 'ألوان مائية مع فرشاة', price: 90, image: '🎨' },
  { id: 'art-3', name: 'فرش رسم 6 قطع', price: 50, image: '🖌️' },
  { id: 'art-4', name: 'كانفس لوحة 30x40', price: 70, image: '🖼️' },
];

const ArtSuppliesPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أدوات الرسم | تفانين";
    const desc = "اكتشف جميع أدوات الرسم والألوان والفرش ولوحات الرسم من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">أدوات الرسم</h1>
        <p className="text-muted-foreground mb-8">جميع أدوات الرسم والألوان في مكان واحد.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
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

export default ArtSuppliesPage;
