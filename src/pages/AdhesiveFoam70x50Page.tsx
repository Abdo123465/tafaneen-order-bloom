// src/pages/AdhesiveFoam70x50Page.tsx
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Square } from "lucide-react";
import { Link } from "react-router-dom";

const adhesiveFoam70x50Products = [
  { 
    id: 'adhesive-foam-70x50-1', 
    name: 'فوم لاصق 70×50 أبيض', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-1.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الأبيض، مثالي للمشاريع الكبيرة',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'أبيض'
  },
  { 
    id: 'adhesive-foam-70x50-2', 
    name: 'فوم لاصق 70×50 أزرق', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-2.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الأزرق، عالي الجودة',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'أزرق'
  },
  { 
    id: 'adhesive-foam-70x50-3', 
    name: 'فوم لاصق 70×50 أحمر', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-3.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الأحمر، لاصق قوي',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'أحمر'
  },
  { 
    id: 'adhesive-foam-70x50-4', 
    name: 'فوم لاصق 70×50 أخضر', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-4.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الأخضر، مثالي للديكور',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'أخضر'
  },
  { 
    id: 'adhesive-foam-70x50-5', 
    name: 'فوم لاصق 70×50 أصفر', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-5.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الأصفر، سهل الاستخدام',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'أصفر'
  },
  { 
    id: 'adhesive-foam-70x50-6', 
    name: 'فوم لاصق 70×50 وردي', 
    price: 45, 
    image: '/assets/adhesive-foam-70x50-6.jpg', 
    description: 'فوم لاصق بمقاس 70×50 سم باللون الوردي، جودة ممتازة',
    brand: 'تفانين',
    thickness: '3 مم',
    sheets: 1,
    color: 'وردي'
  }
];

const AdhesiveFoam70x50Page = () => {
  const { addItem } = useCart();
  
  useEffect(() => {
    document.title = "فوم لاصق 70×50 | تفانين";
    const desc = "تسوق فوم لاصق 70×50 سم بألوان متنوعة - أبيض، أزرق، أحمر، أخضر، أصفر، وردي. فوم لاصق عالي الجودة للمشاريع الفنية الكبيرة من تفانين.";
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
          <Link to="/cutting-pasting-tools/adhesive-foam" className="hover:text-primary">فوم لاصق</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">فوم لاصق 70×50</span>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🟩</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">فوم لاصق 70×50</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فوم لاصق بمقاس 70×50 سم بألوان متنوعة للمشاريع الفنية الكبيرة
          </p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-bold mb-2 text-teal-700">مقاس 70×50 سم</h3>
            <p className="text-sm text-teal-600">مقاس كبير للمشاريع الضخمة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2 text-blue-700">سُمك 3 مم</h3>
            <p className="text-sm text-blue-600">سُمك مثالي للثبات والمتانة</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2 text-green-700">ألوان متنوعة</h3>
            <p className="text-sm text-green-600">متوفر بـ 6 ألوان جميلة</p>
          </Card>
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center border-b pb-4">
          <Square className="inline-block mr-3 mb-1" />
          جميع منتجات فوم لاصق 70×50
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adhesiveFoam70x50Products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center overflow-hidden">
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
                   🟩
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
                 <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                   <span className="text-muted-foreground">السُمك: <span className="font-medium text-foreground">{product.thickness}</span></span>
                   <span className="text-muted-foreground">اللون: <span className="font-medium text-foreground">{product.color}</span></span>
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
           <Link to="/cutting-pasting-tools/adhesive-foam">العودة إلى فوم لاصق</Link>
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

export default AdhesiveFoam70x50Page;
