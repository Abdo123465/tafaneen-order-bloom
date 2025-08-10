import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const woodenPencils = [
  { id: 'wp-1', name: 'أقلام ألوان خشبية - 12 لون', price: 35, image: '🖍️', description: 'أقلام ألوان خشبية عالية الجودة بـ 12 لون زاهي' },
  { id: 'wp-2', name: 'أقلام ألوان خشبية - 24 لون', price: 60, image: '🖍️', description: 'مجموعة شاملة من أقلام الألوان الخشبية بـ 24 لون' },
  { id: 'wp-3', name: 'أقلام ألوان خشبية - 36 لون', price: 85, image: '🖍️', description: 'مجموعة احترافية من أقلام الألوان الخشبية بـ 36 لون' },
  { id: 'wp-4', name: 'أقلام ألوان خشبية مائية - 18 لون', price: 75, image: '🖍️', description: 'أقلام ألوان خشبية قابلة للذوبان في الماء' },
  { id: 'wp-5', name: 'أقلام ألوان خشبية فاخرة - 48 لون', price: 150, image: '🖍️', description: 'أقلام ألوان خشبية فاخرة للفنانين المحترفين' },
  { id: 'wp-6', name: 'أقلام ألوان خشبية للأطفال - 6 ألوان', price: 20, image: '🖍️', description: 'أقلام ألوان خشبية آمنة ومناسبة للأطفال' },
];

const WoodenPencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام ألوان الخشب | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية عالية الجودة بألوان متنوعة من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القص واللصق والألوان</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان الخشب</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان الخشب</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام ألوان خشبية عالية الجودة بألوان زاهية ومتنوعة للرسم والتلوين
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {woodenPencils.map((pencil) => (
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
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القص واللصق والألوان</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WoodenPencilsPage;
