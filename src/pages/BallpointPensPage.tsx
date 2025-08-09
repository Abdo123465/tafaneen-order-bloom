import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ballpointPens = [
  { id: 'ballpoint-1', name: 'قلم حبر جاف أزرق - عبوة 10 قطع', price: 35, image: '🖊️', description: 'أقلام حبر جاف عالية الجودة باللون الأزرق' },
  { id: 'ballpoint-2', name: 'قلم حبر جاف أسود - عبوة 10 قطع', price: 35, image: '🖊️', description: 'أقلام حبر جاف باللون الأسود للكتابة الرسمية' },
  { id: 'ballpoint-3', name: 'قلم حبر جاف أحمر - عبوة 5 قطع', price: 20, image: '🖊️', description: 'أقلام حبر جاف حمراء للتصحيح والتمييز' },
  { id: 'ballpoint-4', name: 'مجموعة أقلام جاف ملونة - 12 لون', price: 60, image: '🌈', description: 'مجموعة متنوعة من أقلام الحبر الجاف الملونة' },
  { id: 'ballpoint-5', name: 'قلم حبر جاف فاخر معدني', price: 85, image: '🖊️', description: 'قلم حبر جاف فاخر بتصميم معدني أنيق' },
  { id: 'ballpoint-6', name: 'أقلام حبر جاف قابلة للمحو - 6 قطع', price: 45, image: '🖊️', description: 'أقلام حبر جاف قابلة للمحو والتصحيح' },
];

const BallpointPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الجاف | تفانين";
    const desc = "تسوق أقلام الحبر الجاف بألوان متنوعة وجودة عالية من تفانين.";
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
          <span className="text-foreground">أقلام الجاف</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الجاف</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام حبر جاف عالية الجودة بألوان متنوعة للكتابة اليومية والمهنية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ballpointPens.map((pen) => (
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

export default BallpointPensPage;
