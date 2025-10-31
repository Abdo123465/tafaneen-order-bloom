import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";

const English9LinesPage = () => {
  useEffect(() => {
    document.title = "كراسة 9 أسطر | تفانين";
    const desc = "اختر كراسة 9 أسطر - ديزني أو عادي";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const notebookTypes = [
    {
      id: 1,
      name: "ديزني",
      description: "كراسة 9 أسطر بتصاميم ديزني المميزة",
      icon: Sparkles,
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-pink-600",
      path: "/notebooks/krassat/28-pages/english/9-lines/disney",
      image: "/assets/disney-category-bg.jpg"
    },
    {
      id: 2,
      name: "عادي",
      description: "كراسة 9 أسطر بتصميم عادي",
      icon: BookOpen,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      path: "/notebooks/krassat/28-pages/english/9-lines/normal",
      image: "/assets/normal-cover-banner.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Link to="/notebooks/krassat/28-pages" className="hover:text-primary">28 ورقة</Link>
              <span className="mx-2">/</span>
              <span>كراسة 9 أسطر</span>
            </nav>

            <h1 className="text-2xl lg:text-3xl font-bold mb-4">كراسة 9 أسطر</h1>
            <p className="text-muted-foreground mb-8">اختر نوع الكراسة - ديزني أو عادي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notebookTypes.map((notebook) => {
              const IconComponent = notebook.icon;
              return (
                <Card key={notebook.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${notebook.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold">{notebook.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {notebook.description}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className={`w-full ${notebook.textColor} border-current hover:bg-current hover:text-white transition-colors`}
                      >
                        <Link to={notebook.path}>تصفح المنتجات</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default English9LinesPage;
