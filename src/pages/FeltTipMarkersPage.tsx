// src/pages/FeltTipMarkersPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const feltTipMarkers = [
  { id: 'marker-1', name: 'مجموعة أقلام فلوماستر 12 لون', price: 65, image: '🖍️', description: 'مجموعة أقلام فلوماستر ملونة عالية الجودة' },
  { id: 'marker-2', name: 'مجموعة أقلام فلوماستر 24 لون', price: 120, image: '🖍️', description: 'مجموعة شاملة من أقلام الفلوماستر بألوان زاهية' },
  { id: 'marker-3', name: 'قلم فلوماستر مائي قابل للغسل', price: 8, image: '🖍️', description: 'قلم فلوماستر مائي سهل الغسل للأطفال' },
  { id: 'marker-4', name: 'مجموعة أقلام فلوماستر مائية 6 ألوان', price: 45, image: '🖍️', description: 'أقلام فلوماستر مائية مثالية للرسم والفن' },
  { id: 'marker-5', name: 'قلم فلوماستر دائم', price: 10, image: '🖍️', description: 'قلم فلوماستر ذو حبر دائم لا يمحى' },
  { id: 'marker-6', name: 'مجموعة أقلام تحديد النص 6 ألوان', price: 35, image: '🖍️', description: 'مجموعة أقلام شفافة لتظليل النصوص' },
];

const FeltTipMarkersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام الفلوماستر | تفانين";
    const desc = "تسوق أقلام الفلوماستر بجميع الأنواع - مائية، دائمة، تحديد نص وأقلام فلوماستر دومز وبريما من تفانين.";
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
          <span className="text-foreground">أقلام الفلوماستر</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الفلوماستر</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام فلوماستر عالية الجودة بأنواع مختلفة للرسم والتلوين والكتابة
          </p>
        </div>
        
        {/* Felt Tip Markers Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Doms Felt Tip Markers Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <Link to="/cutting-pasting-tools/felt-tip-markers/doms" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🖍️</div>
                <h3 className="text-xl font-bold mb-2">أقلام فلوماستر دومز</h3>
                <p className="text-white/90 text-sm">
                  أقلام فلوماستر دومز الهندية عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
          
          {/* Prima Felt Tip Markers Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <Link to="/cutting-pasting-tools/felt-tip-markers/prima" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🖍️</div>
                <h3 className="text-xl font-bold mb-2">أقلام فلوماستر بريما</h3>
                <p className="text-white/90 text-sm">
                  أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام الفلوماستر
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feltTipMarkers.map((marker) => (
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
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القص واللصق والتلوين</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeltTipMarkersPage;
