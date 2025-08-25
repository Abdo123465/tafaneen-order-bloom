import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const primaFeltTipMarkers = [
  { 
    id: 'prima-marker-1', 
    name: 'أقلام فلوماستر بريما - 10 ألوان', 
    price: 30, 
    image: '/assets/prima-marker-1.jpg',
    emoji: '👑',
    description: 'مجموعة أقلام فلوماستر بريما المميزة بـ 10 ألوان' 
  },
  { 
    id: 'prima-marker-2', 
    name: 'أقلام فلوماستر بريما - 18 لون', 
    price: 50, 
    image: '/assets/prima-marker-2.jpg',
    emoji: '🎨',
    description: 'مجموعة أقلام فلوماستر بريما بـ 18 لون متنوع' 
  },
  // يمكنك إضافة المزيد من المنتجات هنا
];

const PrimaFeltTipMarkersPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام فلوماستر بريما | تفانين";
    const desc = "تسوق أقلام فلوماستر بريما المميزة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, emoji: string) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="text-6xl">${emoji}</div>`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القص واللصق والتلوين</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/felt-tip-markers" className="hover:text-primary">ألوان فلوماستر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام فلوماستر بريما</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام فلوماستر بريما</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام فلوماستر مميزة من علامة بريما التجارية الفاخرة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaFeltTipMarkers.map((item) => (
            <div key={item.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => handleImageError(e, item.emoji)}
                />
              </div>
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{item.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: item.id, 
                    name: item.name, 
                    price: item.price, 
                    image: item.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to felt-tip markers */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools/felt-tip-markers">العودة إلى ألوان الفلوماستر</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrimaFeltTipMarkersPage;
