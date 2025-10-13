// src/pages/Kashakil80NineLinesCategoryPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

const Kashakil80NineLinesCategoryPage = () => {
  useEffect(() => {
    document.title = "كشاكيل 80 ورقة 9 أسطر | تفانين";
    const desc = "اختر بين كشاكيل 9 أسطر 80 ورقة عادي أو ديزني.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const categories = [
    {
      id: 1,
      name: "كراسات عادي",
      description: "أغلفة بسيطة وأسعار اقتصادية",
      icon: BookOpen,
      path: "/notebooks/kashakil/80-pages/9-lines/normal",
      color: "from-gray-400 to-gray-600",
      bgClass: "bg-gradient-to-br from-gray-50 to-gray-100"
    },
    {
      id: 2,
      name: "كراسات ديزني",
      description: "تصاميم ديزني المحببة للأطفال",
      icon: Sparkles,
      path: "/notebooks/kashakil/80-pages/9-lines/disney",
      color: "from-pink-400 to-purple-600",
      bgClass: "bg-gradient-to-br from-pink-50 to-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
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
          <Link to="/notebooks/kashakil/80-pages" className="hover:text-primary">80 ورقة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">كراسة 9 أسطر</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كشاكيل 80 ورقة 9 أسطر</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر نوع الغلاف المناسب لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.path}>
                <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${category.bgClass}`}>
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-16 w-16 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        تصفح المنتجات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/notebooks/kashakil/80-pages">العودة إلى كشاكيل 80 ورقة</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kashakil80NineLinesCategoryPage;
