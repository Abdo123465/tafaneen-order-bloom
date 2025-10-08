import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const largeSquaresDisneyItems = [
  {
    id: "lg-sq-dis-28-1",
    name: "كراسة مربعات كبيرة 28 ورقة - ميكي ماوس",
    price: 10,
    image: "/assets/large-squares-disney-mickey.jpg",
    description: "كراسة مربعات كبيرة بتصميم ميكي ماوس، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "ميكي ماوس",
  },
  {
    id: "lg-sq-dis-28-2",
    name: "كراسة مربعات كبيرة 28 ورقة - إلسا",
    price: 10,
    image: "/assets/large-squares-disney-elsa.jpg",
    description: "كراسة مربعات كبيرة بتصميم إلسا من فروزن، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "إلسا",
  },
  {
    id: "lg-sq-dis-28-3",
    name: "كراسة مربعات كبيرة 28 ورقة - سبايدرمان",
    price: 10,
    image: "/assets/large-squares-disney-spiderman.jpg",
    description: "كراسة مربعات كبيرة بتصميم سبايدرمان، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "سبايدرمان",
  },
  {
    id: "lg-sq-dis-28-4",
    name: "كراسة مربعات كبيرة 28 ورقة - برنسيسات ديزني",
    price: 10,
    image: "/assets/large-squares-disney-princess.jpg",
    description: "كراسة مربعات كبيرة بتصميم برنسيسات ديزني، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "برنسيسات",
  },
  {
    id: "lg-sq-dis-28-5",
    name: "كراسة مربعات كبيرة 28 ورقة - بطوط",
    price: 10,
    image: "/assets/large-squares-disney-donald.jpg",
    description: "كراسة مربعات كبيرة بتصميم بطوط، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "بطوط",
  },
  {
    id: "lg-sq-dis-28-6",
    name: "كراسة مربعات كبيرة 28 ورقة - كارز",
    price: 10,
    image: "/assets/large-squares-disney-cars.jpg",
    description: "كراسة مربعات كبيرة بتصميم كارز، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "كارز",
  },
  {
    id: "lg-sq-dis-28-7",
    name: "كراسة مربعات كبيرة 28 ورقة - باربي",
    price: 10,
    image: "/assets/large-squares-disney-barbie.jpg",
    description: "كراسة مربعات كبيرة بتصميم باربي، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "باربي",
  },
  {
    id: "lg-sq-dis-28-8",
    name: "كراسة مربعات كبيرة 28 ورقة - بن تن",
    price: 10,
    image: "/assets/large-squares-disney-ben10.jpg",
    description: "كراسة مربعات كبيرة بتصميم بن تن، غلاف لامع مميز.",
    brand: "ديزني",
    pages: 28,
    size: "15×21 سم",
    paperWeight: "48 جرام",
    character: "بن تن",
  },
];

const LargeSquaresDisneyPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "كراسات مربعات كبيرة ديزني 28 ورقة | تفانين";
    const desc = "كراسات مربعات كبيرة 28 ورقة بتصاميم ديزني المحبوبة للأطفال.";
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
          <Link to="/notebooks/krassat/28-pages" className="hover:text-primary">28 ورقة</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/notebooks/krassat/28-pages/large-squares" className="hover:text-primary">مربعات كبيرة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">ديزني</span>
        </nav>

        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <img
              src="/assets/disney-category-bg.jpg"
              alt="Disney Cover"
              className="mx-auto h-40 object-cover rounded-xl shadow"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x160?text=ديزني")}
            />
            <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            كراسات مربعات كبيرة ديزني – 28 ورقة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كراسات مربعات كبيرة بتصاميم ديزني المحبوبة لإضفاء المرح على الدراسة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {largeSquaresDisneyItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-pink-100">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">✨</div>
                  <div className="absolute top-3 right-3 bg-pink-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    {item.brand}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                    {item.pages} ورقة
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-right">{item.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">الشخصية:</span><span className="font-medium text-pink-600">{item.character}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">الحجم:</span><span>{item.size}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">الورق:</span><span>{item.paperWeight}</span></div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{item.price} ج.م</span>
                    <Button className="btn-tafaneen bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}>
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
            <Link to="/notebooks/krassat/28-pages/large-squares">العودة إلى مربعات كبيرة</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LargeSquaresDisneyPage;
