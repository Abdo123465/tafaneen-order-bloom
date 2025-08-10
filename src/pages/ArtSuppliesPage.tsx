import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArtSuppliesCategories } from "@/components/ArtSuppliesCategories";
import { useCart } from "@/contexts/CartContext";

const featuredItems = [
  { id: 'art-1', name: 'ألوان خشبية 24 لون', price: 60, image: '🖍️', category: 'أقلام ألوان الخشب' },
  { id: 'art-2', name: 'ألوان مائية مع فرشاة', price: 90, image: '🎨', category: 'ألوان مية' },
  { id: 'art-3', name: 'فرش رسم 6 قطع', price: 50, image: '🖌️', category: 'أدوات الرسم' },
  { id: 'art-4', name: 'كانفس لوحة 30x40', price: 70, image: '🖼️', category: 'كانسون' },
  { id: 'art-5', name: 'ألوان شمعية 12 لون', price: 35, image: '🖍️', category: 'ألوان الشمع' },
  { id: 'art-6', name: 'مقص فني احترافي', price: 25, image: '✂️', category: 'مقاصات' },
  { id: 'art-7', name: 'فوم جليتر ملون - 10 قطع', price: 45, image: '✨', category: 'فوم جليتر' },
  { id: 'art-8', name: 'كراسة تلوين للأطفال', price: 15, image: '📚', category: 'كراسات تلوين' },
];

const ArtSuppliesPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أدوات الرسم والأعمال الفنية | تفانين";
    const desc = "اكتشف مجموعة شاملة من أدوات الرسم والألوان والمواد الفنية - ألوان خشبية، مائية، أكريليك، فوم، كانسون وأدوات القص واللصق من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أدوات الرسم والأعمال الفنية</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف عالم الإبداع مع مجموعة شاملة من أدوات الرسم والألوان والمواد الفنية عالية الجودة
          </p>
        </div>

        {/* Art Supplies Categories Section */}
        <ArtSuppliesCategories />

        {/* Featured Products Section */}
        <section className="py-12 mt-16 bg-secondary/30 rounded-2xl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">المنتجات المميزة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <div key={item.id} className="card-product bg-white">
                  <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                    {item.image}
                  </div>
                  <div className="text-xs text-primary font-medium mb-1">{item.category}</div>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{item.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen text-xs px-3 py-1"
                      onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}
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

export default ArtSuppliesPage;
