// src/pages/RegularFoamPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const RegularFoamPage = () => {
  useEffect(() => {
    document.title = "فوم عادي | تفانين";
    const desc = "تسوق الفوم العادي بمقاسات مختلفة - فوم A4 وفوم 70×50 سم. فوم عالي الجودة للأعمال الفنية والحرفية من تفانين.";
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
          <span className="text-foreground">فوم عادي</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔲</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">فوم عادي</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فوم عادي عالي الجودة بمقاسات مختلفة للأعمال الفنية والحرفية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-purple-700">مقاسات متنوعة</h3>
            <p className="text-sm text-purple-600">متوفر بمقاس A4 و70×50 سم</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-bold mb-2 text-blue-700">جودة عالية</h3>
            <p className="text-sm text-blue-600">فوم متين ومقاوم للتمزق</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-green-700">متعدد الاستخدامات</h3>
            <p className="text-sm text-green-600">مثالي للأعمال الفنية والحرفية</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Layers className="inline-block mr-3 mb-1" />
          اختر المقاس المناسب
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foam A4 Category */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">📄</div>
              <h3 className="text-2xl font-bold mb-4">فوم A4</h3>
              <p className="text-muted-foreground mb-6">
                فوم بمقاس A4 (21×29.7 سم) مثالي للمشاريع الصغيرة والمتوسطة
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span>المقاس:</span>
                  <span className="font-medium">21×29.7 سم</span>
                </div>
                <div className="flex justify-between">
                  <span>السماكة:</span>
                  <span className="font-medium">متنوعة</span>
                </div>
              </div>
              <Button asChild className="btn-tafaneen w-full">
                <Link to="/cutting-pasting-tools/regular-foam/a4">
                  تصفح فوم A4
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Foam 70x50 Category */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-bold mb-4">فوم 70×50</h3>
              <p className="text-muted-foreground mb-6">
                فوم بمقاس 70×50 سم مثالي للمشاريع الكبيرة والعروض التقديمية
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span>المقاس:</span>
                  <span className="font-medium">70×50 سم</span>
                </div>
                <div className="flex justify-between">
                  <span>السماكة:</span>
                  <span className="font-medium">متنوعة</span>
                </div>
              </div>
              <Button asChild className="btn-tafaneen w-full">
                <Link to="/cutting-pasting-tools/regular-foam/70x50">
                  تصفح فوم 70×50
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Back to parent category */}
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

export default RegularFoamPage;
