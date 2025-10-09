// src/pages/English40LinesDisneyPage.tsx
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
    id: "en-dis-9-40-1",
    name: "كراسه 40 ق 9 اسطر ديزني",
    price: 15,
    image: "/assets/english-disney-9.jpg", // Using same image as placeholder
    description: "كراسة ديزني 9 أسطر 40 ورقة",
    brand: "Disney",
    pages: 40,
    size: "22.5×16 سم",
    paperWeight: "60 جرام",
  },
];

const English40LinesDisneyPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "كراسه 9 ق ديزني - 40 ورقة | تفانين";
    const desc = "احصل على كراسة ديزني 9 أسطر 40 ورقة بتصاميم ديزني المميزة.";
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
      <main className="container mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks">كشكيل و الكراسات و كشاكيل</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks/krassat">كراسات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks/krassat/40-pages">40 ورقة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks/krassat/40-pages/9-lines">9 أسطر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-primary font-medium">ديزني</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسه 9 أسطر ق ديزني - 40 ورقة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">كراسة ديزني 9 أسطر 40 ورقة بتصاميم ديزني المميزة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {englishDisneyItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 flex items-center justify-center overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-right">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{item.price} ج.م</span>
                    <Button onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}>إضافة للسلة</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/notebooks/krassat/40-pages/9-lines">العودة إلى كراسات 9 أسطر</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default English40LinesDisneyPage;
