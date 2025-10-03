// src/pages/OfficeStaplersPage.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

const officeStaplersProducts = [
  { 
    id: 'office-stapler-1', 
    name: 'دباسة مكتبية صغيرة 24/6 - ديلي', 
    price: 35, 
    image: '/assets/office-stapler-1.jpg', 
    description: 'دباسة مكتبية صغيرة الحجم، مثالية للاستخدام اليومي',
    brand: 'ديلي',
    size: 'صغير',
    capacity: '20 ورقة',
    stapleSize: '24/6'
  },
  { 
    id: 'office-stapler-2', 
    name: 'دباسة مكتبية متوسطة 24/6 - كانجارو', 
    price: 50, 
    image: '/assets/office-stapler-2.jpg', 
    description: 'دباسة مكتبية متوسطة الحجم بتصميم عصري',
    brand: 'كانجارو',
    size: 'متوسط',
    capacity: '25 ورقة',
    stapleSize: '24/6'
  },
  { 
    id: 'office-stapler-3', 
    name: 'دباسة مكتبية كبيرة 23/13 - ديلي', 
    price: 85, 
    image: '/assets/office-stapler-3.jpg', 
    description: 'دباسة مكتبية كبيرة للاستخدام المكثف',
    brand: 'ديلي',
    size: 'كبير',
    capacity: '50 ورقة',
    stapleSize: '23/13'
  },
  { 
    id: 'office-stapler-4', 
    name: 'دباسة مكتبية صغيرة 24/6 - ماكس', 
    price: 40, 
    image: '/assets/office-stapler-4.jpg', 
    description: 'دباسة مكتبية خفيفة ومتينة للاستخدام اليومي',
    brand: 'ماكس',
    size: 'صغير',
    capacity: '20 ورقة',
    stapleSize: '24/6'
  },
  { 
    id: 'office-stapler-5', 
    name: 'دباسة مكتبية متوسطة 24/6 - SDI', 
    price: 60, 
    image: '/assets/office-stapler-5.jpg', 
    description: 'دباسة مكتبية بجودة عالية ومتانة ممتازة',
    brand: 'SDI',
    size: 'متوسط',
    capacity: '30 ورقة',
    stapleSize: '24/6'
  },
  { 
    id: 'office-stapler-6', 
    name: 'دباسة مكتبية كبيرة 23/13 - كانجارو', 
    price: 95, 
    image: '/assets/office-stapler-6.jpg', 
    description: 'دباسة مكتبية قوية للمستندات السميكة',
    brand: 'كانجارو',
    size: 'كبير',
    capacity: '60 ورقة',
    stapleSize: '23/13'
  },
  { 
    id: 'office-stapler-7', 
    name: 'دباسة مكتبية صغيرة 24/6 - بريما', 
    price: 30, 
    image: '/assets/office-stapler-7.jpg', 
    description: 'دباسة مكتبية اقتصادية بجودة جيدة',
    brand: 'بريما',
    size: 'صغير',
    capacity: '15 ورقة',
    stapleSize: '24/6'
  },
  { 
    id: 'office-stapler-8', 
    name: 'دباسة مكتبية متوسطة 24/8 - ديلي', 
    price: 70, 
    image: '/assets/office-stapler-8.jpg', 
    description: 'دباسة مكتبية بمقبض مريح وأداء ممتاز',
    brand: 'ديلي',
    size: 'متوسط',
    capacity: '40 ورقة',
    stapleSize: '24/8'
  },
];

const OfficeStaplersPage = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "دباسات مكتبية | تفانين";
    const desc = "تسوق دباسات مكتبية بأحجام مختلفة للاستخدام المكتبي - صغيرة ومتوسطة وكبيرة. دباسات عالية الجودة من أفضل العلامات التجارية من تفانين.";
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
          <Link to="/office-supplies" className="hover:text-primary">الأدوات المكتبية</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">دباسات مكتبية</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📌</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">دباسات مكتبية</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دباسات بأحجام مختلفة للاستخدام المكتبي - صغيرة ومتوسطة وكبيرة
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">📏</div>
            <h3 className="font-bold mb-2 text-blue-700">أحجام متنوعة</h3>
            <p className="text-sm text-blue-600">صغيرة ومتوسطة وكبيرة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-bold mb-2 text-green-700">متانة عالية</h3>
            <p className="text-sm text-green-600">مصنوعة من مواد عالية الجودة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold mb-2 text-purple-700">علامات موثوقة</h3>
            <p className="text-sm text-purple-600">من أفضل الشركات العالمية</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Hammer className="inline-block mr-3 mb-1" />
          جميع الدباسات المكتبية
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeStaplersProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-6xl hidden">
                    📌
                  </div>
                  
                  {/* Size Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {product.size}
                  </div>
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                    {product.brand}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                  
                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <span className="text-muted-foreground">الحجم: <span className="font-medium text-foreground">{product.size}</span></span>
                    <span className="text-muted-foreground">مقاس الدبوس: <span className="font-medium text-foreground">{product.stapleSize}</span></span>
                    <span className="text-muted-foreground col-span-2">السعة: <span className="font-medium text-foreground">{product.capacity}</span></span>
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
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/office-supplies">العودة إلى الأدوات المكتبية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeStaplersPage;
