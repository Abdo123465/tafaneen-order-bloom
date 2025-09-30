// src/pages/ErasersSharpenersPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eraser, Zap, ArrowRight, Package, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ErasersSharpenersPage = () => {
  const categories = [
    {
      id: 1,
      title: "أساتيك",
      description: "أساتيك مطاطية عالية الجودة بأشكال وأحجام مختلفة",
      icon: <Eraser className="h-8 w-8" />,
      link: "/erasers-sharpeners/erasers",
      color: "from-pink-500 to-rose-600",
      products: "150+ منتج"
    },
    {
      id: 2,
      title: "برايات يدوية",
      description: "برايات يدوية بأحجام مختلفة للأقلام الرصاص والألوان",
      icon: <Package className="h-8 w-8" />,
      link: "/erasers-sharpeners/manual-sharpeners",
      color: "from-purple-500 to-indigo-600",
      products: "80+ منتج"
    },
    {
      id: 3,
      title: "برايات كهربائية",
      description: "برايات كهربائية سريعة ودقيقة للاستخدام المكتبي",
      icon: <Zap className="h-8 w-8" />,
      link: "/erasers-sharpeners/electric-sharpeners",
      color: "from-blue-500 to-cyan-600",
      products: "40+ منتج"
    },
    {
      id: 4,
      title: "أساتيك فنية",
      description: "أساتيك خاصة للفنانين والرسامين المحترفين",
      icon: <Star className="h-8 w-8" />,
      link: "/erasers-sharpeners/art-erasers",
      color: "from-orange-500 to-red-600",
      products: "30+ منتج"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                أساتيك وبرايات
              </h1>
              <p className="text-xl mb-8 opacity-95">
                مجموعة متنوعة من الأساتيك والبرايات عالية الجودة لتلبية جميع احتياجاتك
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {categories.map((category) => (
                <Card 
                  key={category.id} 
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <span className="text-sm text-gray-500">{category.products}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <Button 
                      asChild
                      className={`w-full bg-gradient-to-r ${category.color} text-white hover:shadow-lg transition-all duration-300`}
                    >
                      <Link to={category.link} className="flex items-center justify-center gap-2">
                        <span>استكشف المنتجات</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              لماذا تختار منتجاتنا؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">جودة عالية</h3>
                <p className="text-gray-600">منتجات من أفضل العلامات التجارية العالمية</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">تنوع كبير</h3>
                <p className="text-gray-600">مجموعة واسعة تناسب جميع الاستخدامات</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">أسعار منافسة</h3>
                <p className="text-gray-600">أفضل الأسعار مع ضمان الجودة</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ErasersSharpenersPage;
