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

        {/* Pencils Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Faber Castell Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <Link to="/pens/pencils/faber-castell" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2">أقلام فابر كاستل</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص فابر كاستل الألمانية عالية الجودة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Xioosongshu Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <Link to="/pens/pencils/xioosongshu" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">✏️</div>
                <h3 className="text-xl font-bold mb-2">أقلام Xioosongshu</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Xioosongshu عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Star Color Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <Link to="/pens/pencils/star-color" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2">أقلام ستار كولور</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص ستار كولور عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Charcoal Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 text-white">
            <Link to="/pens/pencils/charcoal" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">⚫</div>
                <h3 className="text-xl font-bold mb-2">أقلام الفحم</h3>
                <p className="text-white/90 text-sm">
                  أقلام فحم احترافية للرسم الفني والتظليل
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Altes Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <Link to="/pens/pencils/altes" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇩🇪</div>
                <h3 className="text-xl font-bold mb-2">أقلام Altes</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص ألمانية عالية الجودة للفنانين والمحترفين
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Deli Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-red-500 to-orange-600 text-white">
            <Link to="/pens/pencils/deli" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-2">أقلام Deli</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Deli الصينية عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Bedaya Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-green-600 to-teal-600 text-white">
            <Link to="/pens/pencils/bedaya" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇪🇬</div>
                <h3 className="text-xl font-bold mb-2">أقلام Bedaya</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Bedaya المصرية عالية الجودة للمدارس
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Doms Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <Link to="/pens/pencils/doms" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-bold mb-2">أقلام Doms</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Doms الهندية عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Smart Keep Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
            <Link to="/pens/pencils/smart-keep" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇹🇷</div>
                <h3 className="text-xl font-bold mb-2">أقلام Smart Keep</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Smart Keep التركية عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Prima Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-red-600 to-pink-600 text-white">
            <Link to="/pens/pencils/prima" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-2">أقلام Prima</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص Prima الإيطالية الفاخرة عالية الجودة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          {/* Bravo Pencils Sub-category Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
            <Link to="/pens/pencils/bravo" className="block hover:no-underline h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="text-5xl mb-4">🇧🇷</div>
                <h3 className="text-xl font-bold mb-2">أقلام برافو</h3>
                <p className="text-white/90 text-sm">
                  أقلام رصاص برافو البرازيلية عالية الجودة بأسعار مناسبة
                </p>
                <ArrowRight className="h-6 w-6 mt-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
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
