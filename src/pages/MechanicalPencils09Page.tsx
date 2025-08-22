import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const mechanicalPencils09 = [
  { id: 'mechanical-pencil-09-1', name: 'قلم رصاص ميكانيكي 0.9 مم - برافو', price: 25, image: '✏️', description: 'قلم رصاص ميكانيكي مقاس 0.9 مم مع ممحاة' },
  { id: 'mechanical-pencil-09-2', name: 'قلم رصاص ميكانيكي 0.9 مم - بريما', price: 30, image: '✏️', description: 'قلم رصاص ميكانيكي مقاس 0.9 مم مع قبضة مريحة' },
  { id: 'mechanical-pencil-09-3', name: 'قلم رصاص ميكانيكي 0.9 مم - روكسي', price: 35, image: '✏️', description: 'قلم رصاص ميكانيكي مقاس 0.9 مم مع تصميم أنيق' },
  { id: 'mechanical-pencil-09-4', name: 'قلم رصاص ميكانيكي 0.9 مم - فابر كاستيل', price: 45, image: '✏️', description: 'قلم رصاص ميكانيكي مقاس 0.9 مم جودة عالية' },
  { id: 'mechanical-pencil-09-5', name: 'قلم رصاص ميكانيكي 0.9 مم - ستار', price: 20, image: '✏️', description: 'قلم رصاص ميكانيكي مقاس 0.9 مم اقتصادي' },
  { id: 'mechanical-pencil-09-6', name: 'مجموعة أقلام رصاص ميكانيكية 0.9 مم - 3 قطع', price: 65, image: '✏️', description: 'مجموعة أقلام رصاص ميكانيكية مقاس 0.9 مم' },
];

const MechanicalPencils09Page = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام رصاص ميكانيكية 0.9 مم | تفانين";
    const desc = "تسوق أقلام رصاص ميكانيكية مقاس 0.9 مم من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/pens/markers" className="hover:text-primary">أقلام الرصاص الميكانيكية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مقاس 0.9 مم</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✏️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام رصاص ميكانيكية مقاس 0.9 مم</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة متنوعة من أقلام الرصاص الميكانيكية مقاس 0.9 مم للكتابة السميكة والرسم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanicalPencils09.map((pencil) => (
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
            <Link to="/pens/markers">العودة إلى أقلام الرصاص الميكانيكية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MechanicalPencils09Page;
