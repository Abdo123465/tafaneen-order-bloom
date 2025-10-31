// src/pages/Kashakil80ArabicNormalPage.tsx
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const kashakil80ArabicNormalItems = [
  {
    id: "kash80-arab-nor-1",
    name: "كشكول 80ق مالك ديزني عربي",
    price: 20,
    image: "/assets/kash80-arab-nor-blue.jpg",
    description: "كشكول عربي 80 ورقة، غلاف لامع بسيط، ورق 60 جرام.",
    brand: "محلي",
    pages: 80,
    size: "22.5×16 سم",
    paperWeight: "48 جرام",
  },
];

const Kashakil80ArabicNormalPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "كشاكيل 80 ورقة عربي عادي | تفانين";
    const desc = "كشاكيل عربي 80 ورقة بأغلفة بسيطة وأسعار اقتصادية.";
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
          <Link to="/notebooks/kashakil/80-pages/arabic" className="hover:text-primary">كراسة عربي</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">عادي</span>
        </nav>

        <div className="text-center mb-12">
          <img
            src="/assets/normal-cover-banner.jpg"
            alt="Normal Cover"
            className="mx-auto h-40 object-cover rounded-xl mb-4 shadow"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x160?text=عادي")}
          />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كشاكيل 80 ورقة عربي عادي</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كشاكيل اقتصادية بأغلفة بسيطة ومناسبة للاستخدام اليومي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kashakil80ArabicNormalItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">📝</div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {item.brand}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                    {item.pages} ورقة
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-right">{item.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">الحجم:</span><span>{item.size}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">الورق:</span><span>{item.paperWeight}</span></div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{item.price} ج.م</span>
                    <Button className="btn-tafaneen" onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}>
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/notebooks/kashakil/80-pages/arabic">العودة إلى كراسة عربي</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Kashakil80ArabicNormalPage;
