import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cuttingPastingItems = [
  // المنتجات الجديدة
  { 
    id: 'cp-7', 
    name: 'قص ولصق مصري مقاس A5', 
    price: 10, 
    image: '/assets/cp-7.jpg',
    emoji: '✂️',
    description: 'كتاب قص ولصق مصري بمقاس A5 للأنشطة التعليمية' 
  },
  { 
    id: 'cp-8', 
    name: 'قص ولصق سمايل وسط  لوكس', 
    price: 10, 
    image: '/assets/cp-8.jpg',
    emoji: '🎨',
    description: 'قص ولصق سمايل وسط  لوكس بتصميمات متنوعة' 
  },
  { 
    id: 'cp-9', 
    name: 'كراسة تلوين مادن A5 power', 
    price: 15, 
    image: '/assets/cp-9.jpg',
    emoji: '😊',
    description: 'كتاب قص ولصق كراسة تلوين مادن A5 power' 
  },
  { 
    id: 'cp-10', 
    name: 'قص ولصق مربع ', 
    price: 12, 
    image: '/assets/cp-10.jpg',
    emoji: '📚',
    description: 'كتاب قص ولصق مربع 017' 
  },
  { 
    id: 'cp-11', 
    name: 'قص ولصق A4 مادن Power', 
    price: 20, 
    image: '/assets/cp-11.jpg',
    emoji: '⬜',
    description: 'كتاب قص ولصق مربع موديل ' 
  },
  { 
    id: 'cp-12', 
    name: 'كراسة تلوين مادن A5 power', 
    price: 15, 
    image: '/assets/cp-12.jpg',
    emoji: '🖍️',
    description: 'كراسة تلوين مادن A5 power نسخة ثانية' 
  },
   { 
    id: 'cp-13', 
    name: 'قص ولصق كبير  استيكر', 
    price: 20, 
    image: '/assets/cp-13.jpg',
    emoji: '🖍️',
    description: 'كتاب قص ولصق كبير 024 استيكر' 
  },
 
];

const CuttingPastingPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "قص و لصق | تفانين";
    const desc = "تسوق أدوات القص واللصق والتجليد عالية الجودة من تفانين.";
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
          <Link to="/art-supplies" className="hover:text-primary">أدوات الرسم والأعمال الفنية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">قص و لصق</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✂️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">قص و لصق</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أدوات القص واللصق والتجليد عالية الجودة لجميع احتياجاتك الفنية والمدرسية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuttingPastingItems.map((item) => (
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

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/art-supplies">العودة إلى فئات أدوات الرسم</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CuttingPastingPage;
