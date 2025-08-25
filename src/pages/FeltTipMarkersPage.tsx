// src/pages/FeltTipMarkersPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const feltTipMarkerBrands = [
  { 
    id: 'doms', 
    name: 'أقلام فلوماستر دومز', 
    image: '🖍️', 
    description: 'أقلام فلوماستر دومز الهندية عالية الجودة بأسعار مناسبة',
    path: '/cutting-pasting-tools/felt-tip-markers/doms',
    gradient: 'from-green-500 to-emerald-600'
  },
  { 
    id: 'prima', 
    name: 'أقلام فلوماستر بريما', 
    image: '🖍️', 
    description: 'أقلام فلوماستر بريما الإيطالية الفاخرة عالية الجودة',
    path: '/cutting-pasting-tools/felt-tip-markers/prima',
    gradient: 'from-blue-500 to-cyan-600'
  },
  { 
    id: 'water-based', 
    name: 'أقلام فلوماستر مائية', 
    image: '💧', 
    description: 'أقلام فلوماستر مائية قابلة للغسل ومناسبة للأطفال',
    path: '/cutting-pasting-tools/felt-tip-markers/water-based',
    gradient: 'from-purple-500 to-pink-600'
  },
  { 
    id: 'permanent', 
    name: 'أقلام فلوماستر دائمة', 
    image: '⚫', 
    description: 'أقلام فلوماستر ذات حبر دائم لا يمحى بسهولة',
    path: '/cutting-pasting-tools/felt-tip-markers/permanent',
    gradient: 'from-gray-700 to-gray-900'
  },
  { 
    id: 'highlighters', 
    name: 'أقلام تحديد النص', 
    image: '🖊️', 
    description: 'أقلام شفافة لتظليل النصوص والملاحظات المهمة',
    path: '/cutting-pasting-tools/felt-tip-markers/highlighters',
    gradient: 'from-yellow-500 to-orange-600'
  },
  { 
    id: 'sets', 
    name: 'مجموعات ألوان فلوماستر', 
    image: '🎨', 
    description: 'مجموعات متنوعة من ألوان الفلوماستر بأحجام مختلفة',
    path: '/cutting-pasting-tools/felt-tip-markers/sets',
    gradient: 'from-red-500 to-pink-600'
  },
];

const FeltTipMarkersPage = () => {
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
            اختر من مجموعة واسعة من أقلام الفلوماستر من أفضل العلامات التجارية
          </p>
        </div>
        
        {/* Felt Tip Markers Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {feltTipMarkerBrands.map((brand) => (
            <Card 
              key={brand.id} 
              className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br ${brand.gradient} text-white`}
            >
              <Link to={brand.path} className="block hover:no-underline h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="text-5xl mb-4">{brand.image}</div>
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-white/90 text-sm">
                    {brand.description}
                  </p>
                  <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Link>
            </Card>
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
