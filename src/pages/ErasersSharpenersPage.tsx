// src/pages/ErasersSharpenersPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eraser, Zap, ArrowRight, Package, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const ErasersSharpenersPage = () => {
  const categories = [
    {
      id: 1,
      name: "برايات",
      description: "برايات يدوية وكهربائية بأحجام مختلفة للأقلام الرصاص والألوان",
      icon: Package,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      textColor: "text-white",
      emoji: "✏️",
      path: "/erasers-sharpeners/sharpeners"
    },
    {
      id: 2,
      name: "أساتيك",
      description: "أساتيك مطاطية عالية الجودة بأشكال وأحجام مختلفة",
      icon: Eraser,
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      textColor: "text-white",
      emoji: "🧹",
      path: "/erasers-sharpeners/erasers"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-primary hover:underline">الرئيسية</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="text-primary hover:underline">الفئات</Link>
          <span className="mx-2">/</span>
          <span className="text-muted-foreground">أساتيك وبرايات</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">أساتيك وبرايات</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة متنوعة من الأساتيك والبرايات عالية الجودة لتلبية جميع احتياجاتك
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className={`${category.color} ${category.textColor} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{category.emoji}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{category.name}</CardTitle>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                    <IconComponent className="h-12 w-12 opacity-50" />
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
      
      <Footer />
    </div>
  );
};

export default ErasersSharpenersPage;
