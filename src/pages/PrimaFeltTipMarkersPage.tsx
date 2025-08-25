// src/pages/PrimaFeltTipMarkersPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const primaMarkers = [
  { id: 'prima-marker-1', name: 'مجموعة أقلام فلوماستر بريما 12 لون', price: 75, image: '🖍️', description: 'مجموعة أقلام فلوماستر بريما ملونة فاخرة' },
  { id: 'prima-marker-2', name: 'مجموعة أقلام فلوماستر بريما 24 لون', price: 140, image: '🖍️', description: 'مجموعة شاملة من أقلام الفلوماستر بريما بألوان زاهية' },
  { id: 'prima-marker-3', name: 'قلم فلوماستر بريما مائي قابل للغسل', price: 10, image: '🖍️', description: 'قلم فلوماستر بريما مائي سهل الغسل للأطفال' },
  { id: 'prima-marker-4', name: 'مجموعة أقلام فلوماستر بريما مائية 6 ألوان', price: 55, image: '🖍️', description: 'أقلام فلوماستر بريما مائية مثالية للرسم والفن' },
  { id: 'prima-marker-5', name: 'قلم فلوماستر بريما دائم', price: 12, image: '🖍️', description: 'قلم فلوماستر بريما ذو حبر دائم لا يمحى' },
  { id: 'prima-marker-6', name: 'مجموعة أقلام تحديد النص بريما 6 ألوان', price: 45, image: '🖍️', description: 'مجموعة أقلام بريما شفافة لتظليل النصوص' },
];

const PrimaFeltTipMarkersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام فلوماستر بريما | تفانين";
    const desc = "تسوق أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القص واللصق والتلوين</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools/felt-tip-markers" className="hover:text-primary">أقلام الفلوماستر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام فلوماستر بريما</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام فلوماستر بريما</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة
          </p>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام فلوماستر بريما
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaMarkers.map((marker) => (
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
            <Link to="/cutting-pasting-tools/felt-tip-markers">العودة إلى أقلام الفلوماستر</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrimaFeltTipMarkersPage;
