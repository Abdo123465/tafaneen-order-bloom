import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Arabic28CategoryPage = () => {
  useEffect(() => {
    document.title = "عربي – 28 ورقة | تفانين";
    const desc = "اختر بين كراسات العربي 28 ورقة ديزني أو العادي.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const cats = [
    {
      id: 1,
      name: "عربي ديزني",
      path: "/notebooks/krassat/28-pages/arabic-disney",
      image: "/assets/disney-choice.jpg",
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
    {
      id: 2,
      name: "عربي عادي",
      path: "/notebooks/krassat/28-pages/arabic-normal",
      image: "/assets/normal-choice.jpg",
      color: "bg-gradient-to-br from-slate-500 to-slate-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10">
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
          <span>عربي</span>
        </nav>

        <h1 className="text-2xl lg:text-3xl font-bold mb-4">عربي – 28 ورقة</h1>
        <p className="text-muted-foreground mb-8">اختر نوع الكراسة الذي يناسبك.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cats.map((cat) => (
            <Card key={cat.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className={`${cat.color} relative h-40 text-white flex items-center justify-center overflow-hidden`}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x160?text=" + cat.name)}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <FileText className="h-10 w-10" />
                    <span className="text-2xl font-bold">{cat.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <Button asChild className="w-full">
                    <Link to={cat.path}>تصفح المنتجات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Arabic28CategoryPage;
