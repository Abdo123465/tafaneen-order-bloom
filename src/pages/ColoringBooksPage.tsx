// src/pages/ColoringBooksPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

const coloringBooks = [
  { 
    id: 'coloring-1', 
    name: 'كتاب تلوين مياه + قلم BH-022', 
    price: 27, 
    image: '/assets/coloring-1.jpg', 
    description: 'كتاب تلوين مياه + قلم BH-022',
    brand: 'Magic Waterbook',
    pages: 4,
    theme: 'ديناصور'
  },
  { 
    id: 'coloring-2', 
    name: 'كيس ورق A5 مع ستيكر 13519', 
    price: 15, 
    image: '/assets/coloring-2.jpg', 
    description: 'كيس ورق A5 مع ستيكر 13519',
    brand: 'Draw and Color',
    pages: 10,
    theme: 'دباديب'
  },
  { 
    id: 'coloring-3', 
    name: 'كراسة تلوين ِA4 كبير سمايل', 
    price: 20, 
    image: '/assets/coloring-3.jpg', 
    description: 'كراسة تلوين ِA4 كبير سمايل',
    brand: 'Smile',
    pages: 4,
    theme: 'كرتون '
  },
  { 
    id: 'coloring-4', 
    name: 'كراسة تلوين ِA4 ديزني', 
    price: 15, 
    image: '/assets/coloring-4.jpg', 
    description: 'كراسة تلوين جميلة بتصاميم  ديزني',
    brand: ' ديزني',
    pages: 3,
    theme: 'طبيعة'
  },
  { 
    id: 'coloring-5', 
    name: 'كراسة تلوين ِA4 كبير سمايل', 
    price: 12, 
    image: '/assets/coloring-5.jpg', 
    description: 'كراسة تلوين تعليمية تحتوي على شخصيات كرتونية',
    brand: 'Smile',
    pages: 3,
    theme: 'أشخصيات كرتونية'
  }
    { 
    id: 'coloring-6', 
    name: 'كراسة تلوين A4 مانديلا بشر 16 ورقه', 
    price: 40, 
    image: '/assets/coloring-6.jpg', 
    description: 'كراسة تلوين مانديلا للمحترفين و اصحاب هواية التلوين',
    brand: 'مانديلا ',
    pages: 16,
    theme: 'اشكال احترافية'
  }
];

const ColoringBooksPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "كراسات التلوين | تفانين";
    const desc = "تسوق كراسات التلوين بأفضل التصاميم والمواضيع - حيوانات، أميرات، سيارات، طبيعة. كراسات تلوين عالية الجودة للأطفال من تفانين.";
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
          <Link to="/cutting-pasting-tools" className="hover:text-primary">أدوات القطع واللصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">كراسات التلوين</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">كراسات التلوين</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كراسات تلوين متنوعة ومسلية للأطفال بتصاميم جذابة ومواضيع شيقة
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-pink-700">تصاميم جذابة</h3>
            <p className="text-sm text-pink-600">رسومات جميلة ومتنوعة تناسب جميع الأعمار</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="font-bold mb-2 text-purple-700">ورق عالي الجودة</h3>
            <p className="text-sm text-purple-600">ورق سميك لا يسمح بنفاذ الألوان</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="font-bold mb-2 text-blue-700">تطوير المهارات</h3>
            <p className="text-sm text-blue-600">تنمي الإبداع والتركيز والمهارات الحركية</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Book className="inline-block mr-3 mb-1" />
          جميع كراسات التلوين
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coloringBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📚
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {book.brand}
                  </div>
                  
                  {/* Pages Count Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {book.pages} صفحة
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{book.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{book.description}</p>
                  
                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <span className="text-muted-foreground">الماركة: <span className="font-medium text-foreground">{book.brand}</span></span>
                    <span className="text-muted-foreground">عدد الصفحات: <span className="font-bold text-primary">{book.pages}</span></span>
                    <span className="text-muted-foreground col-span-2">الموضوع: <span className="font-medium text-foreground">{book.theme}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{book.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: book.id, 
                        name: book.name, 
                        price: book.price, 
                        image: book.image 
                      })}
                    >
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back to categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ColoringBooksPage;
