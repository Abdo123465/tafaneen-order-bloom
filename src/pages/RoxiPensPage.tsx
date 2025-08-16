import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const roxiPens = [
  { id: 'roxi-1', name: 'قلم Roxi أزرق - عبوة 12 قطعة', price: 45, image: '🖊️', description: 'أقلام Roxi حبر جاف باللون الأزرق عالية الجودة' },
  { id: 'roxi-2', name: 'قلم Roxi أسود - عبوة 12 قطعة', price: 45, image: '🖊️', description: 'أقلام Roxi حبر جاف باللون الأسود للكتابة المهنية' },
  { id: 'roxi-3', name: 'قلم Roxi أحمر - عبوة 10 قطع', price: 40, image: '🖊️', description: 'أقلام Roxi حمراء للتصحيح والتمييز' },
  { id: 'roxi-4', name: 'مجموعة أقلام Roxi ملونة - 15 لون', price: 75, image: '🌈', description: 'مجموعة متنوعة من أقلام Roxi الملونة عالية الجودة' },
  { id: 'roxi-5', name: 'قلم Roxi أخضر - عبوة 8 قطع', price: 35, image: '🖊️', description: 'أقلام Roxi خضراء للكتابة والرسم' },
  { id: 'roxi-6', name: 'قلم Roxi بنفسجي - عبوة 6 قطع', price: 30, image: '🖊️', description: 'أقلام Roxi بنفسجية للكتابة الإبداعية' },
];

const RoxiPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام Roxi | تفانين";
    const desc = "تسوق أقلام Roxi حبر جاف بألوان متنوعة وجودة عالية من تفانين.";
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
          <span className="text-foreground">أقلام Roxi</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام Roxi</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام Roxi حبر جاف بألوان متنوعة وجودة عالية للكتابة السلسة والمريحة
          </p>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام Roxi
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roxiPens.map((pen) => (
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

        {/* Back to ballpoint pens */}
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

export default RoxiPensPage;
