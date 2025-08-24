import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const ballpointPens = [
  { id: 'ballpoint-1', name: 'قلم حبر جاف أزرق - عبوة 10 قطع', price: 35, image: '🖊️', description: 'أقلام حبر جاف عالية الجودة باللون الأزرق' },
  { id: 'ballpoint-2', name: 'قلم حبر جاف أسود - عبوة 10 قطع', price: 35, image: '🖊️', description: 'أقلام حبر جاف باللون الأسود للكتابة الرسمية' },
  { id: 'ballpoint-3', name: 'قلم حبر جاف أحمر - عبوة 5 قطع', price: 20, image: '🖊️', description: 'أقلام حبر جاف حمراء للتصحيح والتمييز' },
  { id: 'ballpoint-4', name: 'مجموعة أقلام جاف ملونة - 12 لون', price: 60, image: '🌈', description: 'مجموعة متنوعة من أقلام الحبر الجاف الملونة' },
  { id: 'ballpoint-5', name: 'قلم حبر جاف فاخر معدني', price: 85, image: '🖊️', description: 'قلم حبر جاف فاخر بتصميم معدني أنيق' },
  { id: 'ballpoint-6', name: 'أقلام حبر جاف قابلة للمحو - 6 قطع', price: 45, image: '🖊️', description: 'أقلام حبر جاف قابلة للمحو والتصحيح' },
];

const BallpointPensPage = () => {
  const { addItem } = useCart();

  useEffect(() => {
    document.title = "أقلام الجاف | تفانين";
    const desc = "تسوق أقلام الحبر الجاف بألوان متنوعة وجودة عالية من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta);} 
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/pens" className="hover:text-primary">الأقلام ومستلزمات الكتابة</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أقلام الجاف</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🖊️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الجاف</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام حبر جاف عالية الجودة بألوان متنوعة للكتابة اليومية والمهنية
          </p>
        </div>

        {/* Ballpoint Pen Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Ballpoint Pen Sets Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 text-white">
            <Link to="/pens/ballpoint-sets" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أطقم أقلام الجاف</h3>
                <p className="text-white/90 text-sm">
                  أطقم أقلام جاف متنوعة وعالية الجودة بأسعار مميزة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Roto Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
            <Link to="/pens/roto" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام روتو</h3>
                <p className="text-white/90 text-sm">
                  أقلام روتو عالية الجودة للكتابة السلسة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Prima Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 text-white">
            <Link to="/pens/prima" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام بريما</h3>
                <p className="text-white/90 text-sm">
                  أقلام بريما عالية الجودة للكتابة السلسة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Roxi Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-purple-500 to-violet-600 text-white">
            <Link to="/pens/roxi" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام روكسي</h3>
                <p className="text-white/90 text-sm">
                  أقلام روكسي عالية الجودة للكتابة السلسة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Pensan Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <Link to="/pens/pensan" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام بنسان</h3>
                <p className="text-white/90 text-sm">
                  أقلام بنسان عالية الجودة للكتابة السلسة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Bravo Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 text-white">
            <Link to="/pens/bravo" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام برافو</h3>
                <p className="text-white/90 text-sm">
                  أقلام برافو عالية الجودة للكتابة السلسة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Fransawy Pens Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
            <Link to="/pens/fransawy" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <PenTool className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform mb-4" />
                <h3 className="text-xl font-bold mb-2">أقلام فرنساوي</h3>
                <p className="text-white/90 text-sm">
                  أقلام فرنساوي عالية الجودة للكتابة الفاخرة والمريحة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام الجاف
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ballpointPens.map((pen) => (
            <div key={pen.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {pen.image}
              </div>
              <h3 className="font-semibold mb-2">{pen.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pen.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pen.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pen.id, name: pen.name, price: pen.price, image: pen.image })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/pens">العودة إلى فئات الأقلام</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BallpointPensPage;
