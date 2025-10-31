// src/pages/LargeSquares40CategoryPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

const LargeSquares40CategoryPage = () => {
  useEffect(() => {
    document.title = "كراسات مربعات كبيرة 40 ورقة | تفانين";
  }, []);

  const categories = [
    {
      id: "normal",
      name: "كراسات عادي",
      description: "كراسات بأغلفة بسيطة واقتصادية",
      icon: BookOpen,
      color: "from-gray-400 to-gray-600",
      link: "/notebooks/krassat/40-pages/large-squares/normal"
    },
    {
      id: "disney",
      name: "كراسات ديزني",
      description: "كراسات بتصاميم ديزني المميزة",
      icon: Sparkles,
      color: "from-blue-400 to-indigo-600",
      link: "/notebooks/krassat/40-pages/large-squares/disney"
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
          <Link to="/notebooks/krassat" className="hover:text-primary">كراسات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks/krassat/40-pages" className="hover:text-primary">40 ورقة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">مربعات كبيرة</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسات مربعات كبيرة – 40 ورقة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر نوع الغلاف المناسب لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10 text-center">
                        <IconComponent className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <Button className="w-full btn-tafaneen">
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
            <Link to="/notebooks/krassat/40-pages">العودة إلى كراسات 40 ورقة</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LargeSquares40CategoryPage;
