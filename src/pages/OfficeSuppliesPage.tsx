// src/pages/OfficeSuppliesPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const OfficeSuppliesPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "الأدوات المكتبية | تفانين";
    const desc = "تسوق جميع الأدوات المكتبية - دباسات، خرامات، دبابيس، أختام، مشابك ورق والمزيد من تفانين.";
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
          <span className="text-foreground">الأدوات المكتبية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏢</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">الأدوات المكتبية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            جميع الأدوات المكتبية التي تحتاجها في مكان واحد
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* دباسات مكتبية - جديد */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/office-staplers')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📌</div>
              <h3 className="font-bold text-lg mb-2">دباسات مكتبية</h3>
              <p className="text-sm text-muted-foreground mb-4">دباسات بأحجام مختلفة للاستخدام المكتبي</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>

          {/* خرامات ورق - جديد */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/paper-punches')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🕳️</div>
              <h3 className="font-bold text-lg mb-2">خرامات ورق</h3>
              <p className="text-sm text-muted-foreground mb-4">خرامات بأحجام وأنواع مختلفة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* الدباسات - القديم */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/stapler')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📎</div>
              <h3 className="font-bold text-lg mb-2">الدباسات</h3>
              <p className="text-sm text-muted-foreground mb-4">دباسات بأحجام وأشكال متنوعة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* الخرامات - القديم */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/hole-punch')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⭕</div>
              <h3 className="font-bold text-lg mb-2">الخرامات</h3>
              <p className="text-sm text-muted-foreground mb-4">خرامات ورق بأحجام مختلفة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* دبابيس الدباسة */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/staple-pins')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <h3 className="font-bold text-lg mb-2">دبابيس الدباسة</h3>
              <p className="text-sm text-muted-foreground mb-4">دبابيس بأحجام مختلفة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* الأختام */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/stamps')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
              <h3 className="font-bold text-lg mb-2">الأختام</h3>
              <p className="text-sm text-muted-foreground mb-4">أختام بتصميمات متنوعة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* مشابك الورق */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/paper-clips')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="font-bold text-lg mb-2">مشابك الورق</h3>
              <p className="text-sm text-muted-foreground mb-4">مشابك معدنية وبلاستيك</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* ورق الصابون */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/soap-paper')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
              <h3 className="font-bold text-lg mb-2">ورق الصابون</h3>
              <p className="text-sm text-muted-foreground mb-4">ورق صابون بألوان وأحجام متنوعة</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
          {/* دبابيس الضغط */}
          <Card 
            className="group hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate('/office-supplies/push-pins')}
          >
            <CardContent className="p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📌</div>
              <h3 className="font-bold text-lg mb-2">دبابيس الضغط</h3>
              <p className="text-sm text-muted-foreground mb-4">دبابيس للوحات الإعلانات</p>
              <Button className="btn-tafaneen w-full">تصفح المنتجات</Button>
            </CardContent>
          </Card>
          
        </div>
        
        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/">العودة إلى الصفحة الرئيسية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeSuppliesPage;
