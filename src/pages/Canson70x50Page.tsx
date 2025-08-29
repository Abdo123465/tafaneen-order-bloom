// src/pages/Canson70x50Page.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const canson70x50Products = [
  { 
    id: 'canson-70x50-1', 
    name: 'فرخ كانسون خفيف', 
    price: 22, 
    image: '/assets/canson-70x50-1.jpg', 
    description: 'فرخ كانسون خفيف',
    brand: 'كانسون خفيف',
    weight: '70 جرام',
    sheets: 1
  },
  { 
    id: 'canson-70x50-2', 
    name: 'فرخ كانسون ثقيل', 
    price: 37, 
    image: '/assets/canson-70x50-2.jpg', 
    description: 'ورق كانسون بمقاس 70×50 سم ، مثالي للألوان المائية',
    brand: 'كانسون ثقيل',
    weight: '150 جرام',
    sheets: 1
  },
  { 
    id: 'canson-70x50-3', 
    name: ' فرخ كانسون ثقيل 2', 
    price: 45, 
    image: '/assets/canson-70x50-3.jpg', 
    description: 'ورق كانسون بمقاس 70×50 سم ، مثالي للأكريليك والزيت',
    brand: 'كانسون ثقيل 2',
    weight: '180 جرام',
    sheets: 1
  },
    { 
    id: 'canson-70x50-4', 
    name: 'فرخ كانسون ثقيل جدا', 
    price: 70, 
    image: '/assets/canson-70x50-3.jpg', 
    description: 'ورق كانسون بمقاس 70×50 سم ب، مثالي للأكريليك والزيت',
    brand: 'كانسون ثقيل جدا',
    weight: '200 جرام',
    sheets: 1
  },
];

const Canson70x50Page = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "ورق كانسون 70×50 | تفانين";
    const desc = "تسوق ورق كانسون 70×50 سم بأوزان مختلفة - 160 جرام، 200 جرام، 250 جرام. ورق كانسون عالي الجودة للرسم والفنون من تفانين.";
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
          <Link to="/cutting-pasting-tools/canson-paper" className="hover:text-primary">ورق كانسون</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">ورق كانسون 70×50</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">ورق كانسون 70×50</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ورق كانسون بمقاس 70×50 سم بأوزان مختلفة للأعمال الفنية الكبيرة
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-gray-700">مقاس 70×50 سم</h3>
            <p className="text-sm text-gray-600">مقاس كبير مثالي للأعمال الفنية</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">⚖</div>
            <h3 className="font-bold mb-2 text-blue-700">أوزان متنوعة</h3>
            <p className="text-sm text-blue-600">متوفر بأوزان 160، 200، 250 جرام</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-green-700">مناسب لجميع الألوان</h3>
            <p className="text-sm text-green-600">مثالي مع ألوان الماء والأكريليك</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <FileText className="inline-block mr-3 mb-1" />
          جميع منتجات ورق كانسون 70×50
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {canson70x50Products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📋
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {product.brand}
                  </div>
                  
                  {/* Weight Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {product.weight}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                  
                  {/* Product Details */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-muted-foreground">الوزن: <span className="font-medium text-foreground">{product.weight}</span></span>
                    <span className="text-muted-foreground">عدد الأوراق: <span className="font-bold text-primary">{product.sheets}</span></span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-primary font-bold text-xl">{product.price} ج.م</span>
                    <Button 
                      className="btn-tafaneen px-6"
                      onClick={() => addItem({ 
                        id: product.id, 
                        name: product.name, 
                        price: product.price, 
                        image: product.image 
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
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto ml-4">
            <Link to="/cutting-pasting-tools/canson-paper">العودة إلى ورق كانسون</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/cutting-pasting-tools">العودة إلى أدوات القطع واللصق</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Canson70x50Page;
