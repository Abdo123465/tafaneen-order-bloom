import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const markers = [
  { id: 'marker-1', name: 'ماركر سبورة أسود - عبوة 4 قطع', price: 40, image: '🖍️', description: 'ماركر سبورة أسود للكتابة على السبورة' },
  { id: 'marker-2', name: 'ماركر هايلايتر 6 ألوان', price: 45, image: '🖍️', description: 'ماركر هايلايتر بألوان متنوعة لتحديد النصوص' },
  { id: 'marker-3', name: 'ماركر دائم ملون - 12 لون', price: 85, image: '🖍️', description: 'ماركر دائم بألوان زاهية للكتابة على الأسطح المختلفة' },
  { id: 'marker-4', name: 'ماركر رفيع 0.5 مم - أسود', price: 15, image: '🖍️', description: 'ماركر رفيع جداً للكتابة الدقيقة' },
  { id: 'marker-5', name: 'ماركر سمين 5 مم - أسود', price: 20, image: '🖍️', description: 'ماركر سمين للكتابة الكبيرة واللافتات' },
  { id: 'marker-6', name: 'مجموعة ماركر رسم - 24 لون', price: 150, image: '🖍️', description: 'مجموعة شاملة من ماركر الرسم بألوان متنوعة' },
];

const MarkersPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام السنون | تفانين";
    const desc = "تسوق أقلام السنون والماركر بأحجام وألوان مختلفة من تفانين.";
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
          <span className="text-foreground">أقلام السنون (أقلام التحديد)</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام السنون (أقلام التحديد)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ماركر وأقلام تحديد بأحجام وألوان مختلفة لجميع احتياجات التمييز والرسم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markers.map((marker) => (
            <div key={marker.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {marker.image}
              </div>
              <h3 className="font-semibold mb-2">{marker.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{marker.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{marker.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: marker.id, name: marker.name, price: marker.price, image: marker.image })}
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

export default MarkersPage;
