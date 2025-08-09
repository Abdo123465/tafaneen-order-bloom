import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fountainPens = [
  { id: 'fountain-1', name: 'قلم حبر سائل كلاسيكي - أسود', price: 120, image: '🖋️', description: 'قلم حبر سائل كلاسيكي للتوقيعات الرسمية' },
  { id: 'fountain-2', name: 'قلم حبر سائل ملون - أزرق', price: 95, image: '🖋️', description: 'قلم حبر سائل ملون للكتابة الأنيقة' },
  { id: 'fountain-3', name: 'مجموعة أقلام حبر سائل - 3 ألوان', price: 250, image: '🖋️', description: 'مجموعة متنوعة من أقلام الحبر السائل' },
  { id: 'fountain-4', name: 'قلم حبر سائل فاخر معدني - ذهبي', price: 350, image: '🖋️', description: 'قلم حبر سائل فاخر بتصميم معدني أنيق' },
  { id: 'fountain-5', name: 'أقلام حبر سائل قابلة لإعادة التعبئة', price: 75, image: '🖋️', description: 'أقلام حبر سائل يمكن إعادة تعبئتها بالحبر' },
  { id: 'fountain-6', name: 'قلم حبر سائل للخط العربي - أسود', price: 180, image: '🖋️', description: 'قلم حبر سائل مصمم خصيصاً لكتابة الخط العربي' },
];

const FountainPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الحبر | تفانين";
    const desc = "تسوق أقلام الحبر السائل الكلاسيكية والأقلام التقليدية للخط العربي من تفانين.";
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
          <span className="text-foreground">أقلام الحبر</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖋️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الحبر</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام حبر سائل كلاسيكية وأقلام تقليدية للخط العربي بجودة عالية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fountainPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {pen.image}
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

export default FountainPensPage;
