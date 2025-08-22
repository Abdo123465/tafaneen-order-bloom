import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const correctionPens = [
  { id: 'correction-1', name: 'قلم كوريكتور 8 ملي سن معدن برومكس', price: 23, image: '/assets/correction-1.jpg', description: 'قلم تصحيح سائل أبيض للكتابة على الورق سن معدن' },
  { id: 'correction-2', name: 'قلم كوريكتور وسط 4ملي 3A 71-3 605', price: 15, image: '/assets/correction-2.jpg', description: 'أقلام تصحيب جافة سريعة الجفاف' },
  { id: 'correction-3', name: 'قلم كوريكتور BIG 3 ml', price: 30, image: '/assets/correction-3.jpg', description: 'سائل تصحيب فاتح للون لتصحيح الأخطاء بفعالية' },
  { id: 'correction-4', name: ' قلم كوريكتور ص بريما 2 جرام  ', price: 12, image: '/assets/correction-4.jpg', description: 'أقلام تصحيب ملونة لإضافة لمسة فنية' },
  { id: 'correction-5', name: 'كوريكتور شريط صيني 8918 - 12- 5mm ص ', price: 25, image: '/assets/correction-5.jpg', description: 'أقلام تصحيح شريط' },
  { id: 'correction-6', name: ' كارت كوريكتور شريط صيني BT-7547 ', price: 40, image: '/assets/correction-6.jpg', description: 'أقلام تصحيح شريط' },

];

const CorrectionPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الكوريكتور | تفانين";
    const desc = "تسوق أقلام الكوريكتور وأدوات التصحيب عالية الجودة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
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
          <span className="text-foreground">أقلام الكوريكتور (أقلام التصحيب)</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الكوريكتور (أقلام التصحيب)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أدوات تصحيب عالية الجودة لإخفاء الأخطاء وإصلاحها بفعالية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {correctionPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={pen.image} 
                  alt={pen.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // في حالة عدم وجود الصورة، عرض أيقونة بديلة
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl">🖊️</div>';
                  }}
                />
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
