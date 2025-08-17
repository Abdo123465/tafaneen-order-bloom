// src/pages/PenSetsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const penSets = [
  { id: 'pen-set-1', name: 'طقم أقلام جاف ملونة - 10 قطع', price: 75, image: '🎨', description: 'طقم أقلام حبر جاف بألوان متنوعة للكتابة والرسم' },
  { id: 'pen-set-2', name: 'طقم أقلام جيل - 8 قطع', price: 85, image: '✒️', description: 'طقم أقلام جيل ناعمة للكتابة السلسة' },
  { id: 'pen-set-3', name: 'طقم أقلام فاخر معدني - 3 قطع', price: 150, image: '🖋️', description: 'طقم أقلام فاخر بتصميم معدني أنيق' },
  { id: 'pen-set-4', name: 'طقم أقلام مكتبية شامل - 15 قطعة', price: 120, image: '📝', description: 'طقم شامل يحتوي على أقلام متنوعة للمكتب' },
  { id: 'pen-set-5', name: 'طقم أقلام الخط العربي - 6 قطع', price: 200, image: '🖌️', description: 'طقم أقلام مخصص للخط العربي والكاليجرافي' },
  { id: 'pen-set-6', name: 'طقم أقلام الطلاب - 12 قطعة', price: 90, image: '🎒', description: 'طقم أقلام متنوع مثالي للطلاب في جميع المراحل' },
  { id: 'pen-set-7', name: 'طقم أقلام ماركر ملونة - 20 قطعة', price: 180, image: '🌈', description: 'طقم ماركرات ملونة للرسم والتلوين' },
  { id: 'pen-set-8', name: 'طقم أقلام رصاص متدرجة - 8 قطع', price: 65, image: '✏️', description: 'طقم أقلام رصاص بدرجات صلابة متنوعة للرسم' },
];

const PenSetsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "طقم أقلام | تفانين";
    const desc = "تسوق أطقم الأقلام المتنوعة والشاملة بأفضل الأسعار من تفانين.";
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
          <span className="text-foreground">طقم أقلام</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">طقم أقلام</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أطقم أقلام متنوعة وشاملة تلبي جميع احتياجاتك في الكتابة والرسم بأفضل الأسعار
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {penSets.map((set) => (
            <div key={set.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {set.image}
              </div>
              <h3 className="font-semibold mb-2">{set.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{set.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{set.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: set.id, name: set.name, price: set.price, image: set.image })}
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

export default PenSetsPage;
