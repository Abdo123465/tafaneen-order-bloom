import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

function ScientificCalculatorPage() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'sci-calc-1',
      name: 'آلة حاسبة علمية كاسيو FX-991ES PLUS',
      price: 120,
      originalPrice: 150,
      image: '🧮',
      description: 'آلة حاسبة علمية متقدمة مع 417 وظيفة رياضية',
      rating: 4.8,
      reviews: 156,
      features: ['417 وظيفة', 'شاشة طبيعية', 'حل المعادلات', 'جدول القيم']
    },
    {
      id: 'sci-calc-2',
      name: 'آلة حاسبة علمية شارب EL-W506X',
      price: 95,
      originalPrice: 115,
      image: '🧮',
      description: 'آلة حاسبة علمية بشاشة كبيرة وواضحة',
      rating: 4.6,
      reviews: 89,
      features: ['556 وظيفة', 'شاشة LCD كبيرة', 'ذاكرة متقدمة', 'وضع الامتحان']
    },
    {
      id: 'sci-calc-3',
      name: 'آلة حاسبة علمية تكساس TI-30X IIS',
      price: 85,
      originalPrice: 100,
      image: '🧮',
      description: 'آلة حاسبة علمية موثوقة للطلاب',
      rating: 4.7,
      reviews: 203,
      features: ['241 وظيفة', 'عرض سطرين', 'إحصائيات', 'تحويل الوحدات']
    },
    {
      id: 'sci-calc-4',
      name: 'آلة حاسبة علمية كانون F-789SGA',
      price: 75,
      originalPrice: 90,
      image: '🧮',
      description: 'آلة حاسبة علمية اقتصادية وعملية',
      rating: 4.4,
      reviews: 67,
      features: ['605 وظيفة', 'شاشة نقطية', 'حماية الغطاء', 'توفير الطاقة']
    },
    {
      id: 'sci-calc-5',
      name: 'آلة حاسبة علمية HP 35S',
      price: 180,
      originalPrice: 220,
      image: '🧮',
      description: 'آلة حاسبة علمية احترافية قابلة للبرمجة',
      rating: 4.9,
      reviews: 124,
      features: ['قابلة للبرمجة', 'RPN و Algebraic', '800 سجل', 'شاشة سطرين']
    },
    {
      id: 'sci-calc-6',
      name: 'آلة حاسبة علمية كاسيو FX-82MS',
      price: 45,
      originalPrice: 55,
      image: '🧮',
      description: 'آلة حاسبة علمية أساسية للطلاب',
      rating: 4.3,
      reviews: 312,
      features: ['240 وظيفة', 'شاشة سطرين', 'إحصائيات أساسية', 'سهلة الاستخدام']
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link to="/calculators-rulers" className="hover:text-primary transition-colors">آلات حاسبة ومساطر</Link>
            <span>/</span>
            <span className="text-primary font-medium">آلة حاسبة علمية</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">آلة حاسبة علمية</h1>
              <p className="text-gray-600">آلات حاسبة علمية متقدمة للطلاب والمهندسين والباحثين</p>
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
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
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{product.price} ج.م</span>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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

export default ScientificCalculatorPage;
