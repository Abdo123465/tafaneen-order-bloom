// src/pages/Kashakil60LargeSquaresCategoryPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

const Kashakil60LargeSquaresCategoryPage = () => {
  useEffect(() => {
    document.title = "كشاكيل 60 ورقة مربعات كبيرة | تفانين";
    const desc = "اختر بين كشاكيل مربعات كبيرة عادي أو ديزني - 60 ورقة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const categories = [
    {
      id: 1,
      name: "عادي",
      description: "كشاكيل بأغلفة بسيطة وأسعار اقتصادية",
      icon: BookOpen,
      color: "bg-gradient-to-br from-gray-500 to-slate-600",
      textColor: "text-slate-600",
      path: "/notebooks/kashakil/60-pages/large-squares/normal"
    },
    {
      id: 2,
      name: "ديزني",
      description: "كشاكيل بتصاميم ديزني المميزة والمحببة للأطفال",
      icon: Sparkles,
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-purple-600",
      path: "/notebooks/kashakil/60-pages/large-squares/disney"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">الرئيسية</Link>
              <ArrowRight className="h-4 w-4" />
              <Link to="/categories" className="hover:text-primary">الفئات</Link>
              <ArrowRight className="h-4 w-4" />
              <Link to="/notebooks" className="hover:text-primary">كشكيل و الكراسات و كشاكيل</Link>
              <ArrowRight className="h-4 w-4" />
              <Link to="/notebooks/main-category" className="hover:text-primary">كشاكيل و كراسات</Link>
              <ArrowRight className="h-4 w-4" />
              <Link to="/notebooks/kashakil" className="hover:text-primary">كشاكيل</Link>
              <ArrowRight className="h-4 w-4" />
              <Link to="/notebooks/kashakil/60-pages" className="hover:text-primary">60 ورقة</Link>
              <ArrowRight className="h-4 w-4" />
              <span>كراسة مربعات كبيرة</span>
            </nav>
            
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كشاكيل 60 ورقة - كراسة مربعات كبيرة</h1>
            <p className="text-muted-foreground mb-8">اختر نوع الغلاف المناسب لك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${category.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-16 w-16 mb-4" />
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className={`w-full ${category.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={category.path}>تصفح المنتجات</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/notebooks/kashakil/60-pages">العودة إلى كشاكيل 60 ورقة</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kashakil60LargeSquaresCategoryPage;
