import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, DollarSign } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

function CommercialCalculatorPage() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'comm-calc-1',
      name: 'آلة حاسبة تجارية كاسيو DR-120R',
      price: 280,
      originalPrice: 320,
      image: '💰',
      description: 'آلة حاسبة تجارية مع طباعة للمحلات والمكاتب',
      rating: 4.7,
      reviews: 89,
      features: ['طباعة سطرين', '12 رقم', 'ذاكرة مستقلة', 'حساب الضرائب']
    },
    {
      id: 'comm-calc-2',
      name: 'آلة حاسبة مكتبية شارب EL-1197PIII',
      price: 350,
      originalPrice: 400,
      image: '💰',
      description: 'آلة حاسبة مكتبية متقدمة مع طباعة ملونة',
      rating: 4.8,
      reviews: 67,
      features: ['طباعة ملونة', '12 رقم', 'سرعة عالية', 'وضع صامت']
    },
    {
      id: 'comm-calc-3',
      name: 'آلة حاسبة تجارية كانون P1-DHV-3',
      price: 220,
      originalPrice: 260,
      image: '💰',
      description: 'آلة حاسبة تجارية موثوقة للاستخدام اليومي',
      rating: 4.5,
      reviews: 134,
      features: ['طباعة أحادية', '12 رقم', 'حساب التكلفة', 'ذاكرة GT']
    },
    {
      id: 'comm-calc-4',
      name: 'آلة حاسبة مكتبية كاسيو FR-2650RC',
      price: 450,
      originalPrice: 520,
      image: '💰',
      description: 'آلة حاسبة احترافية للمحاسبة والمالية',
      rating: 4.9,
      reviews: 45,
      features: ['طباعة سريعة', '12 رقم', 'حساب العملة', 'ذاكرة متعددة']
    },
    {
      id: 'comm-calc-5',
      name: 'آلة حاسبة تجارية HP 12C',
      price: 380,
      originalPrice: 450,
      image: '💰',
      description: 'آلة حاسبة مالية احترافية للمصرفيين',
      rating: 4.8,
      reviews: 78,
      features: ['حسابات مالية', 'RPN', 'برمجة', 'بطارية طويلة']
    },
    {
      id: 'comm-calc-6',
      name: 'آلة حاسبة مكتبية شارب CS-2635RH',
      price: 180,
      originalPrice: 210,
      image: '💰',
      description: 'آلة حاسبة مكتبية أساسية وعملية',
      rating: 4.3,
      reviews: 156,
      features: ['شاشة كبيرة', '12 رقم', 'أزرار كبيرة', 'تصميم مريح']
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link to="/calculators-rulers" className="hover:text-primary transition-colors">آلات حاسبة ومساطر</Link>
            <span>/</span>
            <span className="text-primary font-medium">آلة حاسبة محل (تجارية)</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">آلة حاسبة محل (تجارية)</h1>
              <p className="text-gray-600">آلات حاسبة تجارية ومكتبية للمحلات والأعمال التجارية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">المنتجات المتاحة</h2>
            <p className="text-gray-600">{products.length} منتج متاح</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              ترتيب حسب السعر
            </Button>
            <Button variant="outline" size="sm">
              ترتيب حسب التقييم
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white text-center">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm ml-2">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{product.price} ج.م</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through ml-2">{product.originalPrice} ج.م</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                        وفر {product.originalPrice - product.price} ج.م
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    أضف إلى السلة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto">
            <Link to="/calculators-rulers">العودة إلى آلات حاسبة ومساطر</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommercialCalculatorPage;
