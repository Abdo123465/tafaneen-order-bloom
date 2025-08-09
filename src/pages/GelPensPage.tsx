import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const gelPens = [
  { id: 'gel-1', name: 'قلم جل أزرق ناعم - عبوة 5 قطع', price: 30, image: '🖋️', description: 'أقلام جل ناعمة الكتابة بألوان زاهية' },
  { id: 'gel-2', name: 'قلم جل أسود فاخر - عبوة 3 قطع', price: 45, image: '🖋️', description: 'أقلام جل فاخرة للتوقيعات والمستندات الرسمية' },
  { id: 'gel-3', name: 'مجموعة أقلام جل ملونة - 10 ألوان', price: 75, image: '🌈', description: 'مجموعة متنوعة من أقلام الجل الملونة' },
  { id: 'gel-4', name: 'قلم جل متوهج - فضي - 2 قطعة', price: 25, image: '🖋️', description: 'أقلام جل متوهجة لإضافة لمسة خاصة للكتابة' },
  { id: 'gel-5', name: 'قلم جل سميك 1.0 مم - أسود', price: 20, image: '🖋️', description: 'أقلام جل بحجم سميك مثالي للكتابة الكبيرة' },
  { id: 'gel-6', name: 'أقلام جل قابلة للمحو - 4 قطع', price: 40, image: '🖋️', description: 'أقلام جل قابلة للمحو والتصحيح' },
];

const GelPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الجل | تفانين";
    const desc = "تسوق أقلام الجل ناعمة الكتابة بألوان متنوعة وجودة عالية من تفانين.";
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
          <span className="text-foreground">أقلام الجل</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖋️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الجل</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام جل ناعمة الكتابة بألوان متنوعة وجودة عالية لتجربة كتابة ممتعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gelPens.map((pen) => (
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

export default GelPensPage;
