// src/pages/GlitterFoam70x50Page.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const glitterFoam70x50Products = [
  { 
    id: 'glitter-foam-70x50-1', 
    name: 'فوم جليتر 70×50 كل الوان', 
    price: 35, 
    image: '/assets/glitter-foam-70x50-1.jpg', 
    description: 'فوم جليتر لامع بلون ذهبي رائع للديكورات الكبيرة',
    brand: 'جليتر فوم',
    color: 'كل الوان',
    thickness: '2 مم',
    sheets: 1
  },
];

const GlitterFoam70x50Page = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "فوم جليتر 70×50 | تفانين";
    const desc = "تسوق فوم جليتر 70×50 سم بألوان متنوعة - ذهبي، فضي، أحمر، أزرق، وردي. فوم جليتر لامع للديكورات الكبيرة من تفانين.";
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
          <Link to="/cutting-pasting-tools/glitter-foam" className="hover:text-primary">فوم جليتر</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">فوم جليتر 70×50</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">فوم جليتر 70×50</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فوم جليتر بمقاس 70×50 سم بألوان متنوعة للديكورات الكبيرة والمشاريع الضخمة
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-purple-700">مقاس 70×50 سم</h3>
            <p className="text-sm text-purple-600">مقاس كبير للديكورات الضخمة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="font-bold mb-2 text-pink-700">ألوان متنوعة</h3>
           <p className="text-sm text-pink-600">متوفر بألوان لامعة جذابة</p>
         </Card>
         <Card className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
           <div className="text-4xl mb-4">✨</div>
           <h3 className="font-bold mb-2 text-violet-700">لمعة قوية</h3>
           <p className="text-sm text-violet-600">جليتر لامع للمشاريع الكبيرة</p>
         </Card>
       </div>
       
       <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
         <Sparkles className="inline-block mr-3 mb-1" />
         جميع منتجات فوم جليتر 70×50
       </h2>
       
       {/* Products Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {glitterFoam70x50Products.map((product) => (
           <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
             <CardContent className="p-0">
               {/* Product Image */}
               <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
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
                   ✨
                 </div>
                 
                 {/* Color Badge */}
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                   {product.color}
                 </div>
                 
                 {/* Thickness Badge */}
                 <div className="absolute top-3 left-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold">
                   {product.thickness}
                 </div>
               </div>
               
               {/* Product Info */}
               <div className="p-6">
                 <h3 className="font-bold text-lg mb-2 text-right leading-relaxed">{product.name}</h3>
                 <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-right">{product.description}</p>
                 
                 {/* Product Details */}
                 <div className="flex justify-between items-center mb-4 text-sm">
                   <span className="text-muted-foreground">السُمك: <span className="font-medium text-foreground">{product.thickness}</span></span>
                   <span className="text-muted-foreground">عدد القطع: <span className="font-bold text-primary">{product.sheets}</span></span>
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
           <Link to="/cutting-pasting-tools/glitter-foam">العودة إلى فوم جليتر</Link>
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

export default GlitterFoam70x50Page;
