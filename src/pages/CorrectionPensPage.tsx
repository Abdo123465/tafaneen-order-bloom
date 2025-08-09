import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const correctionPens = [
  { id: 'correction-1', name: 'قلم كوريكتور أبيض سائل - 10 مل', price: 15, image: '🖊️', description: 'قلم تصحيح سائل أبيض للكتابة على الورق' },
  { id: 'correction-2', name: 'قلم كوريكتور جاف - 5 قطع', price: 25, image: '🖊️', description: 'أقلام تصحيح جافة سريعة الجفاف' },
  { id: 'correction-3', name: 'كوريكتور فاتح للون - 20 مل', price: 30, image: '🖊️', description: 'سائل تصحيح فاتح للون لتصحيح الأخطاء بفعالية' },
  { id: 'correction-4', name: 'قلم كوريكتور ملون - 4 ألوان', price: 35, image: '🖊️', description: 'أقلام تصحيح ملونة لإضافة لمسة فنية' },
  { id: 'correction-5', name: 'كوريكتور قلم معدني فاخر - أبيض', price: 50, image: '🖊️', description: 'قلم كوريكتور معدني فاخر بتصميم أنيق' },
  { id: 'correction-6', name: 'مجموعة كوريكتور متنوعة - 8 قطع', price: 40, image: '🖊️', description: 'مجموعة متنوعة من أدوات التصحيح لجميع الاحتياجات' },
];

const CorrectionPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الكوريكتور | تفانين";
    const desc = "تسوق أقلام الكوريكتور وأدوات التصحيح عالية الجودة من تفانين.";
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
          <span className="text-foreground">أقلام الكوريكتور (أقلام التصحيح)</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الكوريكتور (أقلام التصحيح)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أدوات تصحيح عالية الجودة لإخفاء الأخطاء وإصلاحها بفعالية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {correctionPens.map((pen) => (
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

export default CorrectionPensPage;
