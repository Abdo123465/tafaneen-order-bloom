import { BookOpen, PenTool, GraduationCap, Users, Baby, Heart } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "كتب متنوعة للكبار",
    icon: BookOpen,
    color: "bg-book-category",
    description: "مجموعة واسعة من الكتب الثقافية والأدبية",
    count: "1200+ كتاب",
    image: "📚"
  },
  {
    id: 2,
    name: "كتب الأطفال التعليمية",
    icon: GraduationCap,
    color: "bg-children-category",
    description: "كتب تعليمية وقصص مفيدة للأطفال",
    count: "800+ كتاب",
    image: "🎓"
  },
  {
    id: 3,
    name: "القرطاسية والأدوات",
    icon: PenTool,
    color: "bg-stationery-category",
    description: "أدوات الكتابة والرسم والمكتب",
    count: "500+ منتج",
    image: "✏️"
  },
  {
    id: 4,
    name: "كتب الأطفال الدينية",
    icon: Heart,
    color: "bg-primary",
    description: "قصص وكتب دينية مناسبة للأطفال",
    count: "300+ كتاب",
    image: "🕌"
  },
  {
    id: 5,
    name: "كتب التلوين",
    icon: Baby,
    color: "bg-accent",
    description: "كتب تلوين للأطفال والكبار",
    count: "200+ كتاب",
    image: "🎨"
  },
  {
    id: 6,
    name: "الكتب العلمية",
    icon: Users,
    color: "bg-secondary",
    description: "كتب الرياضيات والعلوم والتكنولوجيا",
    count: "400+ كتاب",
    image: "🔬"
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            تصفح حسب <span className="text-gradient">الفئات</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من الكتب والقرطاسية المنظمة في فئات متنوعة
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="card-category group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`${category.color} text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-2xl">{category.image}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium text-sm">
                        {category.count}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        تصفح الآن ←
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-tafaneen text-lg px-8 py-4">
            عرض جميع الفئات
          </button>
        </div>
      </div>
    </section>
  );
}