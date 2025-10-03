// src/pages/PinsClipsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

const PinsClipsPage = () => {
  useEffect(() => {
    document.title = "دبابيس ومشابك | تفانين";
    const desc = "تسوق دبابيس كبس، دبابيس دباسة ومشابك ورق بأفضل الأنواع والأسعار من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">دبابيس ومشابك</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📎</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">دبابيس ومشابك</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دبابيس كبس، دبابيس دباسة ومشابك ورق عالية الجودة لجميع احتياجاتك المكتبية
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-bold mb-2 text-blue-700">قوة تثبيت عالية</h3>
            <p className="text-sm text-blue-600">تثبيت آمن ومحكم للأوراق</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold mb-2 text-green-700">مقاومة للصدأ</h3>
            <p className="text-sm text-green-600">مصنوعة من معادن عالية الجودة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold mb-2 text-purple-700">تنوع كبير</h3>
            <p className="text-sm text-purple-600">أحجام وأشكال مختلفة</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Paperclip className="inline-block mr-3 mb-1" />
          فئات الدبابيس والمشابك
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* دبابيس كبس */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/office-supplies/push-pins" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">📌</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">دبابيس كبس</h3>
                      <p className="text-sm opacity-90">للوحات الإعلانات والتثبيت</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    دبابيس كبس بألوان متعددة وأحجام مختلفة، مثالية لتثبيت الأوراق والإعلانات على اللوحات
                  </p>
                  
                  <div className="w-full text-center text-red-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          {/* دبابيس دباسة */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/office-supplies/staple-pins" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">📎</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">دبابيس دباسة</h3>
                      <p className="text-sm opacity-90">للتدبيس والتثبيت المحكم</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    دبابيس دباسة عالية الجودة بأحجام مختلفة (24/6، 23/13)، مناسبة لجميع أنواع الدباسات
                  </p>
                  
                  <div className="w-full text-center text-blue-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          {/* مشابك ورق */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/office-supplies/paper-clips" className="block hover:no-underline h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">🖇️</div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">مشابك ورق</h3>
                      <p className="text-sm opacity-90">للتنظيم والربط السريع</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    مشابك ورق معدنية وبلاستيكية بأحجام متنوعة، مثالية لتنظيم الملفات والأوراق
                  </p>
                  
                  <div className="w-full text-center text-green-600 border-current hover:bg-current hover:text-white transition-colors flex items-center justify-center gap-2 py-2 px-4 border rounded-md">
                    تصفح المنتجات
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
        
        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">لماذا تختار دبابيسنا ومشابكنا؟</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            نوفر لك مجموعة شاملة من الدبابيس والمشابك المكتبية عالية الجودة:
            <br /><br />
            <strong>دبابيس كبس:</strong> بألوان زاهية ورؤوس كبيرة للتثبيت السهل على اللوحات.
            <br />
            <strong>دبابيس دباسة:</strong> قوية ومتينة، مقاومة للصدأ وسهلة الاستخدام.
            <br />
            <strong>مشابك ورق:</strong> بأحجام مختلفة من الصغيرة للمتوسطة والكبيرة للملفات الضخمة.
          </p>
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة إلى مستلزمات المكتب</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PinsClipsPage;
