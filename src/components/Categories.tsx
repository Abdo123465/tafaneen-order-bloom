// src/components/Categories.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PenTool, Scissors, BookOpen } from "lucide-react";

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "فئة الكانسون",
      description: "أوراق الكانسون عالية الجودة للرسم والأعمال الفنية",
      icon: PenTool,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      count: "200+ منتج",
      path: "/canson"
    },
    {
      id: 2,
      name: "فئة الفوم",
      description: "مجموعة متنوعة من الفوم للمشاريع الفنية والحرفية",
      icon: Scissors,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      count: "150+ منتج",
      path: "/foam"
    },
    {
      id: 3,
      name: "فئة البريات",
      description: "كراسات وكشاكيل بأنواع وأحجام مختلفة للكتابة والدراسة",
      icon: BookOpen,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      count: "300+ منتج",
      path: "/notebooks"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            فئات المنتجات الرئيسية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من المنتجات عالية الجودة مقسمة إلى فئات منفصلة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white rounded-xl shadow-lg"
              >
                <CardContent className="p-0">
                  <div className={`${category.color} relative p-8 text-white overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                    <div className="relative z-10">
                      <IconComponent className="h-16 w-16 mb-6" />
                      <div className="text-sm opacity-90 mb-2 font-medium">{category.count}</div>
                      <h3 className="text-2xl font-bold leading-tight">{category.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg"
                      className={`w-full ${category.textColor} border-current hover:bg-current hover:text-white transition-all duration-300 font-semibold`}
                    >
                      <Link to={category.path}>تصفح المنتجات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white text-lg px-10 py-4 h-auto rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/categories">عرض جميع الفئات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
