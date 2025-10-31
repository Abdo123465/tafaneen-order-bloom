// src/pages/OfficeSuppliesPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Stamp, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const OfficeSuppliesPage = () => {
  const categories = [
    {
      id: 1,
      name: "خرامات ورق",
      description: "ثاقبات بأحجام متنوعة لتنظيم الأوراق",
      icon: Package,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      emoji: "🕳️",
      path: "/office-supplies/hole-punch"
    },
    {
      id: 2,
      name: "مشابك ودبابيس",
      description: "مشابك الورق - ورق الصابون - دبابيس التثبيت",
      icon: Package,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      textColor: "text-white",
      emoji: "📎",
      path: "/office-supplies/paper-clips"
    },
    {
      id: 3,
      name: "الأختام والطوابع",
      description: "أختام مكتبية بأشكال متنوعة وحبر أختام بألوان مختلفة",
      icon: Stamp,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      emoji: "🖊️",
      path: "/office-supplies/stamps"
    },
    {
      id: 4,
      name: "دباسات",
      description: "دباسات مكتبية بأحجام مختلفة",
      icon: Package,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      textColor: "text-white",
      emoji: "📌",
      path: "/office-supplies/staplers"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-primary hover:underline">الرئيسية</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="text-primary hover:underline">الفئات</Link>
          <span className="mx-2">/</span>
          <span className="text-muted-foreground">مستلزمات المكتب</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">مستلزمات المكتب</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاجه لمكتبك من خرامات، مشابك، وأدوات تنظيمية بجودة عالية
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className={`${category.color} ${category.textColor} p-8`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{category.emoji}</div>
                    <IconComponent className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <CardTitle className="text-2xl mb-3">{category.name}</CardTitle>
                    <p className="text-sm opacity-90 leading-relaxed">{category.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Button asChild className="w-full">
                    <Link to={category.path}>
                      تصفح المنتجات
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/categories">العودة إلى الفئات</Link>
          </Button>
        </div>
      </main>
      
    </div>
  );
};

export default OfficeSuppliesPage;
