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

      </main>
      <Footer />
    </div>
  );
};

export default PensPage;
