import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const powerProducts = [
  { id: 'power-1', name: 'أقلام ألوان Power - 12 لون', price: 32, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية Power قوية ومتينة بـ 12 لون' },
  { id: 'power-2', name: 'أقلام ألوان Power - 18 لون', price: 45, image: '🖍️', description: 'مجموعة أقلام ألوان خشبية Power بـ 18 لون متنوع' },
  { id: 'power-3', name: 'أقلام ألوان Power - 24 لون', price: 58, image: '🖍️', description: 'مجموعة شاملة من أقلام ألوان Power بـ 24 لون' },
  { id: 'power-4', name: 'أقلام ألوان Power - 36 لون', price: 85, image: '🖍️', description: 'مجموعة كبيرة من أقلام ألوان Power بـ 36 لون' },
  { id: 'power-5', name: 'أقلام ألوان Power مائية - 15 لون', price: 65, image: '🖍️', description: 'أقلام ألوان Power قابلة للذوبان في الماء' },
  { id: 'power-6', name: 'أقلام ألوان Power احترافية - 48 لون', price: 130, image: '🖍️', description: 'مجموعة احترافية من أقلام ألوان Power للفنانين المتقدمين' },
];

const PowerColorPencilsPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام ألوان Power | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية من علامة Power القوية والمتينة بأفضل الأسعار من تفانين.";
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
          <span className="text-foreground">أقلام ألوان Power</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان Power</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            قوة في الأداء ومتانة في التصميم مع أقلام الألوان الخشبية من علامة Power المتميزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerProducts.map((product) => (
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

export default PowerColorPencilsPage;
