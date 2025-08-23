// src/pages/WoodenPencilsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const colorPencilBrands = [
  { 
    id: 'gelcy', 
    name: 'أقلام ألوان Gelcy', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Gelcy التجارية المميزة',
    path: '/cutting-pasting-tools/wooden-pencils/gelcy',
    gradient: 'from-blue-500 to-cyan-600'
  },
  { 
    id: 'doms', 
    name: 'أقلام ألوان DOMS', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة DOMS عالية الجودة',
    path: '/cutting-pasting-tools/wooden-pencils/doms',
    gradient: 'from-orange-500 to-red-600'
  },
  { 
    id: 'deli', 
    name: 'أقلام ألوان Deli', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Deli المعروفة',
    path: '/cutting-pasting-tools/wooden-pencils/deli',
    gradient: 'from-green-500 to-teal-600'
  },
  { 
    id: 'power', 
    name: 'أقلام ألوان Power', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة Power القوية',
    path: '/cutting-pasting-tools/wooden-pencils/power',
    gradient: 'from-yellow-500 to-amber-600'
  },
  { 
    id: 'faber-castell', 
    name: 'أقلام ألوان FABER CASTELL', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة FABER CASTELL الألمانية الفاخرة',
    path: '/cutting-pasting-tools/wooden-pencils/faber-castell',
    gradient: 'from-indigo-500 to-purple-600'
  },
  { 
    id: 'attar', 
    name: 'أقلام ألوان العطار', 
    image: '🖍️', 
    description: 'أقلام ألوان خشبية من علامة العطار المحلية المتميزة',
    path: '/cutting-pasting-tools/wooden-pencils/attar',
    gradient: 'from-rose-500 to-pink-600'
  },
];

const WoodenPencilsPage = () => {
  useEffect(() => {
    document.title = "أقلام ألوان الخشب | تفانين";
    const desc = "تسوق أقلام الألوان الخشبية عالية الجودة من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام ألوان الخشب</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖍️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام ألوان الخشب</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعة واسعة من أقلام الألوان الخشبية من أفضل العلامات التجارية
          </p>
        </div>
        
        {/* Color Pencils Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {colorPencilBrands.map((brand) => (
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
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WoodenPencilsPage;
