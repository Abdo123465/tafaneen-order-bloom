// src/pages/Kashakil80SmallSquaresCategoryPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Kashakil80SmallSquaresCategoryPage = () => {
  useEffect(() => {
    document.title = "كشاكيل 80 ورقة مربعات صغيرة | تفانين";
    const desc = "اختر من بين كشاكيل مربعات صغيرة 80 ورقة العادية أو ديزني.";
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
      name: "كراسة مربعات صغيرة عادي",
      description: "كشاكيل مربعات صغيرة 80 ورقة بأغلفة بسيطة ومناسبة للكتابة الدقيقة",
      image: "/assets/kash80-sm-sq-nor-category.jpg",
      link: "/notebooks/kashakil/80-pages/small-squares/normal"
    },
    {
      id: 2,
      name: "كراسة مربعات صغيرة ديزني",
      description: "كشاكيل مربعات صغيرة 80 ورقة بتصاميم ديزني المحببة للأطفال",
      image: "/assets/kash80-sm-sq-dis-category.jpg",
      link: "/notebooks/kashakil/80-pages/small-squares/disney"
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
          <span className="text-foreground">كراسة مربعات صغيرة</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كشاكيل 80 ورقة مربعات صغيرة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين كشاكيل مربعات صغيرة 80 ورقة المناسبة للكتابة الدقيقة والرسم الدقيق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">📓</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <Button asChild className="w-full">
                    <Link to={category.link}>تصفح المنتجات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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

export default Kashakil80SmallSquaresCategoryPage;
