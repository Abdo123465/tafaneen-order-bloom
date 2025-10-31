// src/pages/AdhesiveGlitterFoamPage.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AdhesiveGlitterFoamPage = () => {
  useEffect(() => {
    document.title = "فوم جليتر لاصق | تفانين";
    const desc = "تسوق فوم جليتر لاصق بأفضل الأنواع - A4 و 70×50. فوم جليتر لاصق لامع للديكور والأعمال الفنية من تفانين.";
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
          <span className="text-foreground">فوم جليتر لاصق</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💫</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">فوم جليتر لاصق</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فوم جليتر لاصق لامع للديكور والأعمال الفنية بجميع المقاسات
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 border-fuchsia-200">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="font-bold mb-2 text-fuchsia-700">لمعة جذابة</h3>
            <p className="text-sm text-fuchsia-600">فوم جليتر لامع يجذب الأنظار</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="font-bold mb-2 text-purple-700">لاصق قوي</h3>
            <p className="text-sm text-purple-600">خلفية لاصقة للتطبيق السهل</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-pink-700">مقاسات متنوعة</h3>
            <p className="text-sm text-pink-600">متوفر بمقاسات A4 و 70×50</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Sparkles className="inline-block mr-3 mb-1" />
          فئات فوم جليتر لاصق
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/adhesive-glitter-foam/a4" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-fuchsia-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">📄</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">فوم جليتر لاصق A4</h3>
                      <p className="text-sm opacity-90">المقاس القياسي للمشاريع الصغيرة</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    فوم جليتر لاصق بمقاس A4 المثالي للمشاريع الصغيرة والبطاقات والديكورات المدرسية
                  </p>
                  
                  <div className="w-full text-center text-fuchsia-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/adhesive-glitter-foam/70x50" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">📋</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">فوم جليتر لاصق 70×50</h3>
                      <p className="text-sm opacity-90">مقاس كبير للديكورات الكبيرة</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    فوم جليتر لاصق بمقاس 70×50 سم المثالي للديكورات الكبيرة والمشاريع الفنية الضخمة
                  </p>
                  
                  <div className="w-full text-center text-purple-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
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

export default AdhesiveGlitterFoamPage;
