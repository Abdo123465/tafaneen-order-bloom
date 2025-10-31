// src/pages/ScissorsPage.tsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const ScissorsPage = () => {
  useEffect(() => {
    document.title = "المقاصات | تفانين";
    const desc = "تسوق المقاصات بأفضل الأنواع - مقاصات مدرسية ومقاصات مكتبية. مقاصات عالية الجودة للاستخدام اليومي من تفانين.";
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
          <span className="text-foreground">المقاصات</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✂️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">المقاصات</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مقاصات عالية الجودة للاستخدام المدرسي والمكتبي بجميع الأحجام
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
            <div className="text-4xl mb-4">🔪</div>
            <h3 className="font-bold mb-2 text-slate-700">نصل حاد</h3>
            <p className="text-sm text-slate-600">مصنوع من الستانلس ستيل عالي الجودة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">📏</div>
            <h3 className="font-bold mb-2 text-blue-700">أحجام متنوعة</h3>
            <p className="text-sm text-blue-600">متوفر بأحجام مدرسية ومكتبية</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🤲</div>
            <h3 className="font-bold mb-2 text-green-700">سهولة الاستخدام</h3>
            <p className="text-sm text-green-600">مقبض مريح وآمن للاستخدام اليومي</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Scissors className="inline-block mr-3 mb-1" />
          أنواع المقاصات
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/scissors/school" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">🎒</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">مقاصات مدرسية</h3>
                      <p className="text-sm opacity-90">آمنة ومناسبة للأطفال والطلاب</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    مقاصات مدرسية آمنة بتصميم خاص للأطفال مع نصل غير حاد ومقبض مريح
                  </p>
                  
                  <div className="w-full text-center text-orange-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/cutting-pasting-tools/scissors/office" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">🏢</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">مقاصات مكتبية</h3>
                      <p className="text-sm opacity-90">احترافية للاستخدام المكتبي</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    مقاصات مكتبية احترافية بنصل حاد وتصميم أنيق للاستخدام في المكاتب والأعمال
                  </p>
                  
                  <div className="w-full text-center text-slate-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
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

export default ScissorsPage;
