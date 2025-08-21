// src/pages/PencilsPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const pencils = [
  { id: 'pencil-1', name: 'قلم رصاص HB - عبوة 12 قطعة', price: 25, image: '✏️', description: 'أقلام رصاص عالية الجودة مناسبة للكتابة والرسم' },
  { id: 'pencil-2', name: 'قلم رصاص 2B للرسم - عبوة 6 قطع', price: 30, image: '✏️', description: 'أقلام رصاص ناعمة مثالية للرسم والتظليل' },
  { id: 'pencil-3', name: 'قلم رصاص ميكانيكي 0.5 مم', price: 15, image: '✏️', description: 'قلم رصاص ميكانيكي بدقة عالية للكتابة الدقيقة' },
  { id: 'pencil-4', name: 'مجموعة أقلام رصاص متدرجة H-6B', price: 85, image: '✏️', description: 'مجموعة شاملة من أقلام الرصاص بدرجات مختلفة' },
  { id: 'pencil-5', name: 'قلم رصاص ملون - 24 لون', price: 120, image: '🌈', description: 'أقلام رصاص ملونة بألوان زاهية وجودة عالية' },
  { id: 'pencil-6', name: 'قلم رصاص 4B للفنانين', price: 12, image: '✏️', description: 'قلم رصاص ناعم جداً للرسم الفني المتقدم' },
];

const PencilsPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "أقلام الرصاص | تفانين";
    const desc = "تسوق أقلام الرصاص بجميع الدرجات - HB, 2B, 4B وأقلام ميكانيكية عالية الجودة من تفانين.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
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
          <span className="text-foreground">أقلام الرصاص</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✏️</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">أقلام الرصاص</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أقلام رصاص عالية الجودة بدرجات مختلفة للكتابة والرسم والتصميم
          </p>
        </div>

        {/* Faber Castell Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white">
          <Link to="/pens/pencils/faber-castell" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام فابر كاستل</h3>
                <p className="text-white/90">
                  أقلام رصاص فابر كاستل الألمانية عالية الجودة
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        {/* Xioosongshu Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
          <Link to="/pens/pencils/xioosongshu" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">✏️</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام Xioosongshu</h3>
                <p className="text-white/90">
                  أقلام رصاص Xioosongshu عالية الجودة بأسعار مناسبة
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        {/* Star Color Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 text-white">
          <Link to="/pens/pencils/star-color" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام ستار كولور</h3>
                <p className="text-white/90">
                  أقلام رصاص ستار كولور عالية الجودة بأسعار مناسبة
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        {/* Charcoal Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 text-white">
          <Link to="/pens/pencils/charcoal" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">⚫</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام الفحم</h3>
                <p className="text-white/90">
                  أقلام فحم احترافية للرسم الفني والتظليل
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        {/* Altes Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <Link to="/pens/pencils/altes" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">🇩🇪</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام Altes</h3>
                <p className="text-white/90">
                  أقلام رصاص ألمانية عالية الجودة للفنانين والمحترفين
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        {/* Deli Pencils Sub-category Card */}
        <Card className="mb-12 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-red-500 to-orange-600 text-white">
          <Link to="/pens/pencils/deli" className="block hover:no-underline">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-5xl">🇨🇳</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">أقلام Deli</h3>
                <p className="text-white/90">
                  أقلام رصاص Deli الصينية عالية الجودة بأسعار مناسبة
                </p>
              </div>
              <ArrowRight className="h-8 w-8 ml-auto text-white/80 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Link>
        </Card>

        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          جميع أقلام الرصاص
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pencils.map((pencil) => (
            <div key={pencil.id} className="card-product">
              <div className="bg-muted/50 rounded-xl aspect-square flex items-center justify-center text-6xl mb-4">
                {pencil.image}
              </div>
              <h3 className="font-semibold mb-2">{pencil.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pencil.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{pencil.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ id: pencil.id, name: pencil.name, price: pencil.price, image: pencil.image })}
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

export default PencilsPage;
