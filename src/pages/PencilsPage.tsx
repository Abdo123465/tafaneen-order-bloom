import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const pencils = [
  { id: 'pencil-1', name: 'قلم رصاص HB - عبوة 12 قطعة', price: 25, image: '✏️', description: 'أقلام رصاص عالية الجودة مناسبة للكتابة والرسم' },
  { id: 'pencil-2', name: 'قلم رصاص 2B للرسم - عبوة 6 قطع', price: 30, image: '✏️', description: 'أقلام رصاص ناعمة مثالية للرسم والتظليل' },
  { id: 'pencil-3', name: 'قلم رصاص ميكانيكي 0.5 مم', price: 15, image: '✏️', description: 'قلم رصاص ميكانيكي بدقة عالية للكتابة الدقيقة' },
  { id: 'pencil-4', name: 'مجموعة أقلام رصاص متدرجة H-6B', price: 85, image: '✏️', description: 'مجموعة شاملة من أقلام الرصاص بدرجات مختلفة' },
  { id: 'pencil-5', name: 'قلم رصاص ملون - 24 لون', price: 120, image: '🌈', description: 'أقلام رصاص ملونة بألوان زاهية وجودة عالية' },
  { id: 'pencil-6', name: 'قلم رصاص 4B للفنانين', price: 12, image: '✏️', description: 'قلم رصاص ناعم جداً للرسم الفني المتقدم' },
];

// فئات فرعية للأقلام الرصاص
const pencilCategories = [
  {
    name: 'أقلام FABER CASTELL',
    path: '/pens/pencils/faber-castell',
    icon: '⭐',
    description: 'أقلام رصاص فابر كاستل الألمانية عالية الجودة',
    isNew: true
  }
];

const PencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الرصاص | تفانين";
    const desc = "تسوق أقلام الرصاص بجميع الدرجات - HB, 2B, 4B وأقلام ميكانيكية عالية الجودة من تفانين.";
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
          <span className="text-foreground">أقلام الرصاص</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✏️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الرصاص</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام رصاص عالية الجودة بدرجات مختلفة للكتابة والرسم والتصميم
          </p>
        </div>

        {/* الفئات الفرعية */}
        {pencilCategories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">الماركات المميزة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pencilCategories.map((category, index) => (
                <Link 
                  key={index} 
                  to={category.path}
                  className="card-product group hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    {category.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="text-sm font-medium">تسوق الآن</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* المنتجات العامة */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">منتجات أخرى</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pencils.map((pencil) => (
            <div key={pencil.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {pencil.image}
              </div>
              <h3 className="font-semibold mb-2">{pencil.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pencil.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pencil.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pencil.id, name: pencil.name, price: pencil.price, image: pencil.image })}
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

export default PencilsPage;
