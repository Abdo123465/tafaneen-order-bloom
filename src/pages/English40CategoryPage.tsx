import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen } from "lucide-react";

const English40CategoryPage = () => {
  useEffect(() => {
    document.title = "كراسات إنجليزي 40 ورقة | تفانين";
    const desc = "اختر بين كراسات إنجليزي عادية أو ديزني 40 ورقة";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const englishTypes = [
    {
      id: 1,
      name: "كراسات إنجليزي عادي",
      description: "كراسات اقتصادية بأغلفة بسيطة ومناسبة للاستخدام اليومي",
      icon: BookOpen,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      link: "/notebooks/krassat/40-pages/english/normal"
    },
    {
      id: 2,
      name: "كراسات إنجليزي ديزني",
      description: "كراسات بتصميمات ديزني المحببة للأطفال",
      icon: Sparkles,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      textColor: "text-pink-600",
      link: "/notebooks/krassat/40-pages/english/disney"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-8">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">الرئيسية</Link>
              <span className="mx-2">/</span>
              <Link to="/categories" className="hover:text-primary">الفئات</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks" className="hover:text-primary">كشكيل و الكراسات و كشاكيل</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks/main-category" className="hover:text-primary">كشاكيل و كراسات</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks/krassat" className="hover:text-primary">كراسات</Link>
              <span className="mx-2">/</span>
              <Link to="/notebooks/krassat/40-pages" className="hover:text-primary">40 ورقة</Link>
              <span className="mx-2">/</span>
              <span>كراسات إنجليزي</span>
            </nav>

            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كراسات إنجليزي 40 ورقة</h1>
            <p className="text-muted-foreground mb-8">اختر نوع الكراسة المناسب لك - عادي أو ديزني</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {englishTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${type.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h3 className="text-lg font-bold">{type.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {type.description}
                      </p>

                      <Link to={type.link}>
                        <Button
                          variant="outline"
                          className={`w-full ${type.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                        >
                          عرض المنتجات
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/notebooks/krassat/40-pages">العودة إلى كراسات 40 ورقة</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default English40CategoryPage;
