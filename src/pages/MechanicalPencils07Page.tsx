import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const mechanicalPencils07 = [
  { id: 'marker-07-1', name: 'قلم سنون 0.7 مم - برافو', price: 25, image: '🖍️', description: 'قلم سنون مقاس 0.7 مم مع ممحاة' },
  { id: 'marker-07-2', name: 'قلم سنون 0.7 مم - بريما', price: 30, image: '🖍️', description: 'قلم سنون مقاس 0.7 مم مع قبضة مريحة' },
  { id: 'marker-07-3', name: 'قلم سنون 0.7 مم - روكسي', price: 35, image: '🖍️', description: 'قلم سنون مقاس 0.7 مم مع تصميم أنيق' },
  { id: 'marker-07-4', name: 'قلم سنون 0.7 مم - فابر كاستيل', price: 45, image: '🖍️', description: 'قلم سنون مقاس 0.7 مم جودة عالية' },
  { id: 'marker-07-5', name: 'قلم سنون 0.7 مم - ستار', price: 20, image: '🖍️', description: 'قلم سنون مقاس 0.7 مم اقتصادي' },
  { id: 'marker-07-6', name: 'مجموعة قلم سنون 0.7 مم - 3 قطع', price: 65, image: '🖍️', description: 'مجموعة قلم سنون مقاس 0.7 مم' },
];

const MechanicalPencils07Page = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "قلم سنون 0.7 مم | تفانين";
    const desc = "تسوق قلم سنون مقاس 0.7 مم من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/pens/markers" className="hover:text-primary">قلم سنون</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مقاس 0.7 مم</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">قلم سنون مقاس 0.7 مم</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة متنوعة من قلم سنون مقاس 0.7 مم للكتابة المريحة والرسم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanicalPencils07.map((pencil) => (
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
            <Link to="/pens/markers">العودة إلى قلم سنون</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MechanicalPencils07Page;
