import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faberCastellProducts = [
  { id: 'faber-1', name: 'أقلام ألوان FABER CASTELL - 12 لون', price: 85, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية FABER CASTELL الألمانية الفاخرة بـ 12 لون' },
  { id: 'faber-2', name: 'أقلام ألوان FABER CASTELL - 18 لون', price: 120, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية FABER CASTELL بـ 18 لون عالي الجودة' },
  { id: 'faber-3', name: 'أقلام ألوان FABER CASTELL - 24 لون', price: 150, image: '🖍️', description: 'مجموعة شاملة من أقلام ألوان FABER CASTELL بـ 24 لون' },
  { id: 'faber-4', name: 'أقلام ألوان FABER CASTELL - 36 لون', price: 220, image: '🖍️', description: 'مجموعة كبيرة من أقلام ألوان FABER CASTELL بـ 36 لون' },
  { id: 'faber-5', name: 'أقلام ألوان FABER CASTELL مائية - 24 لون', price: 180, image: '🖍️', description: 'أقلام ألوان FABER CASTELL المائية الاحترافية' },
  { id: 'faber-6', name: 'أقلام ألوان FABER CASTELL احترافية - 60 لون', price: 350, image: '🖍️', description: 'مجموعة احترافية فاخرة من أقلام ألوان FABER CASTELL للفنانين المحترفين' },
];

const FaberCastellColorPencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام ألوان FABER CASTELL | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية من علامة FABER CASTELL الألمانية الفاخرة والاحترافية من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/wooden-pencils" className="hover:text-primary">أقلام ألوان الخشب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان FABER CASTELL</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان FABER CASTELL</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تمتع بالتميز والفخامة مع أقلام الألوان الخشبية من علامة FABER CASTELL الألمانية العريقة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faberCastellProducts.map((product) => (
            <div key={product.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {product.image}
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{product.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to wooden pencils */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools/wooden-pencils">العودة إلى أقلام ألوان الخشب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaberCastellColorPencilsPage;
