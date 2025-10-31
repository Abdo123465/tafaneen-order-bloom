// src/pages/CansonSketchPage.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Square } from "lucide-react";
import { Link } from "react-router-dom";

const CansonSketchPage = () => {
  useEffect(() => {
    document.title = "سكتش كانسون | تفانين";
    const desc = "تسوق سكتش كانسون بأفضل الأنواع - ألوان وأبيض. سكتش كانسون عالي الجودة للرسم والتلوين من تفانين.";
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
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">سكتش كانسون</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">سكتش كانسون</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            سكتش كانسون عالي الجودة للرسم والتلوين بجميع الأنواع
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-teal-700">جودة عالية</h3>
            <p className="text-sm text-teal-600">سطح مثالي للرسم والتلوين</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-blue-700">مقاسات متنوعة</h3>
            <p className="text-sm text-blue-600">متوفر بمقاسات مختلفة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="font-bold mb-2 text-green-700">ألوان متعددة</h3>
            <p className="text-sm text-green-600">متوفر باللون الأبيض والملون</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Square className="inline-block mr-3 mb-1" />
          فئات سكتش كانسون
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/canson-sketch/colors" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">🌈</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">سكتش كانسون ألوان</h3>
                      <p className="text-sm opacity-90">مثالي للمشاريع الملونة</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    سكتش كانسون الملون المثالي للمشاريع الفنية الملونة والأعمال الإبداعية
                  </p>
                  
                  <div className="w-full text-center text-teal-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/canson-sketch/white" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">⬜</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">سكتش كانسون أبيض</h3>
                      <p className="text-sm opacity-90">مثالي للرسم بالأقلام</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    سكتش كانسون الأبيض المثالي للرسم بالأقلام والرسومات التخطيطية
                  </p>
                  
                  <div className="w-full text-center text-teal-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CansonSketchPage;
