// src/pages/EnglishDisney9Page.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const englishDisneyItems = [
  {
    id: "en-dis-9-1",
    name: "كراسه 9 ق ديزني انجليزي",
    price: 15,
    image: "/assets/english-disney-9.jpg",
    description: "كراسة ديزني انجليزي 9 أسطر 28 ورقة",
    brand: "Disney",
    pages: 28,
    size: "22.5×18 سم",
    paperWeight: "60 جرام",
  },
];

const EnglishDisney9Page = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "كراسه 9 ق عربي ديزني  | تفانين";
    const desc = "احصل على كراسة ديزني عربي 9 أسطر 28 ورقة بتصاميم ديزني المميزة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/disney-bg.jpg')" }}
      >
        <main className="container mx-auto px-4 py-10">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link to="/">الرئيسية</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/categories">الفئات</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/notebooks">كشكيل و الكراسات و كشاكيل</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/notebooks/main-category">كشاكيل و كراسات</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/notebooks/krassat">كراسات</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/notebooks/krassat/28-pages">28 ورقة</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-white font-medium">ديزني انجليزي 9 أسطر</span>
          </nav>

          {/* العنوان والصورة */}
          <div className="text-center mb-12">
            <img
              src="/assets/english-disney-9-banner.jpg"
              alt="Disney English 9 Lines Notebook"
              className="mx-auto h-40 object-cover rounded-xl mb-4 shadow"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x160?text=Disney+English+9+Lines")}
            />
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-Black drop-shadow">كراسه 9 ق ديزني عربي</h1>
            <p className="text-xl text-Black/90 max-w-2xl mx-auto drop-shadow">كراسة ديزني عربي 9 أسطر 28 ورقة بتصاميم ديزني المميزة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englishDisneyItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white/70 backdrop-blur-sm border-0">
                <CardContent className="p-0">
                  <div className="relative h-48 flex items-center justify-center overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 items-center justify-center text-6xl hidden">📘</div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                      {item.brand}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-green-600 text-white rounded-full px-3 py-1 text-xs font-bold shadow-sm">
                      {item.pages} ورقة
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-right text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-700 mb-4 text-right">{item.description}</p>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">الحجم:</span><span>{item.size}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">الورق:</span><span>{item.paperWeight}</span></div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <span className="text-primary font-bold text-xl">{item.price} ج.م</span>
                      <Button className="btn-tafaneen" onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}>إضافة للسلة</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="bg-white/80 backdrop-blur-sm">
              <Link to="/notebooks/krassat/28-pages">العودة إلى كراسات 28 ورقة</Link>
            </Button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EnglishDisney9Page;
