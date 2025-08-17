import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ballpointPenSets = [
  { id: 'ballpoint-set-1', name: 'طقم أقلام جاف ملونة - 10 قطع', price: 85, image: '🌈', description: 'طقم من 10 أقلام جاف بألوان متنوعة عالية الجودة' },
  { id: 'ballpoint-set-2', name: 'طقم أقلام جاف أساسية - 12 قطعة', price: 95, image: '🖊️', description: 'طقم أقلام جاف بالألوان الأساسية (أزرق، أسود، أحمر)' },
  { id: 'ballpoint-set-3', name: 'طقم أقلام جاف فاخرة معدنية - 6 قطع', price: 180, image: '🖋️', description: 'طقم أقلام جاف فاخرة بتصميم معدني أنيق في علبة هدايا' },
  { id: 'ballpoint-set-4', name: 'طقم أقلام جاف قابلة للمحو - 8 قطع', price: 120, image: '✏️', description: 'طقم أقلام جاف قابلة للمحو بألوان مختلفة مع ممحاة' },
  { id: 'ballpoint-set-5', name: 'طقم أقلام جاف احترافية - 5 قطع', price: 150, image: '🖊️', description: 'طقم أقلام جاف احترافية للأعمال والمكتب' },
  { id: 'ballpoint-set-6', name: 'طقم أقلام جاف للطلاب - 15 قطعة', price: 75, image: '📚', description: 'طقم كبير من أقلام الجاف مناسب للطلاب والاستخدام اليومي' },
];

const BallpointPenSetsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "طقم أقلام الجاف | تفانين";
    const desc = "تسوق أطقم أقلام الحبر الجاف بألوان متنوعة وجودة عالية من تفانين.";
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
          <span className="text-foreground">طقم أقلام الجاف</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">طقم أقلام الجاف</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أطقم أقلام حبر جاف متنوعة وعالية الجودة بأسعار مميزة للاستخدام المنزلي والمكتبي
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ballpointPenSets.map((set) => (
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
            <Link to="/pens/ballpoint">العودة إلى أقلام الجاف</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BallpointPenSetsPage;
