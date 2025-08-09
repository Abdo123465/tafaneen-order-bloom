import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Ruler, 
  Triangle, 
  Compass,
  Package,
  ShoppingCart
} from "lucide-react";

function CalculatorsRulersPage() {
  const categories = [
    {
      id: 1,
      name: "آلة حاسبة علمية",
      englishName: "Scientific Calculator",
      description: "آلات حاسبة علمية متقدمة للطلاب والمهندسين",
      icon: Calculator,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      emoji: "🧮",
      count: "25+ منتج",
      route: "/calculators-rulers/scientific-calculator"
    },
    {
      id: 2,
      name: "آلة حاسبة محل (تجارية)",
      englishName: "Commercial Calculator",
      description: "آلات حاسبة تجارية للمحلات والأعمال",
      icon: ShoppingCart,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      emoji: "💰",
      count: "18+ منتج",
      route: "/calculators-rulers/commercial-calculator"
    },
    {
      id: 3,
      name: "مساطر",
      englishName: "Rulers",
      description: "مساطر بأحجام وأنواع مختلفة للقياس الدقيق",
      icon: Ruler,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      emoji: "📏",
      count: "35+ منتج",
      route: "/calculators-rulers/rulers"
    },
    {
      id: 4,
      name: "مثلث",
      englishName: "Triangle",
      description: "مثلثات هندسية للرسم والقياس",
      icon: Triangle,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      emoji: "📐",
      count: "20+ منتج",
      route: "/calculators-rulers/triangle"
    },
    {
      id: 5,
      name: "طقم هندسي",
      englishName: "Engineering Set",
      description: "أطقم هندسية كاملة للرسم الهندسي",
      icon: Package,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      emoji: "📦",
      count: "15+ منتج",
      route: "/calculators-rulers/engineering-set"
    },
    {
      id: 6,
      name: "براجل (برجار)",
      englishName: "Compass",
      description: "براجل للرسم الهندسي والدوائر",
      icon: Compass,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      emoji: "🧭",
      count: "12+ منتج",
      route: "/calculators-rulers/compass"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-primary font-medium">آلات حاسبة ومساطر</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Calculator className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">آلات حاسبة ومساطر</h1>
              <p className="text-gray-600 text-lg">اكتشف مجموعة واسعة من الآلات الحاسبة والأدوات الهندسية عالية الجودة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تصفح الفئات</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من الآلات الحاسبة والأدوات الهندسية المصممة لتلبية احتياجاتك الأكاديمية والمهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className={`${category.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.emoji}
                      </div>
                      <IconComponent className="h-10 w-10 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <div className="text-sm opacity-90 mb-2 font-medium">{category.count}</div>
                      <h3 className="text-xl font-bold leading-tight mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.englishName}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className={`w-full ${category.textColor} border-current hover:bg-current hover:text-white transition-all duration-300 group-hover:shadow-lg`}
                    >
                      <Link to={category.route} className="flex items-center justify-center gap-2">
                        <span>تصفح المنتجات</span>
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">125+</div>
              <div className="text-gray-600">إجمالي المنتجات</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">فئات رئيسية</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">علامة تجارية</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
          </div>
        </div>

        {/* Back to Categories */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-4 h-auto bg-white/80 backdrop-blur-sm hover:bg-white">
            <Link to="/" className="flex items-center gap-2">
              <span>العودة إلى الفئات الرئيسية</span>
              <Calculator className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorsRulersPage;
