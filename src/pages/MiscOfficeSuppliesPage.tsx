import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { allProducts, Product, filterByCategory } from "@/data/products";

const ProductImage = ({ src, alt, fallbackEmoji, className }: { src: string; alt: string; fallbackEmoji: string; className?: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  return (
    <div className={`bg-white rounded-xl aspect-square flex items-center justify-center overflow-hidden border border-gray-100 group-hover:shadow-md transition-shadow ${className}`}>
      {!imageError ? (
        <>
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <ImageIcon className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <img 
            src={src}
            alt={alt}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </>
      ) : (
        <div className="text-6xl">{fallbackEmoji || '📦'}</div>
      )}
    </div>
  );
};

export default function MiscOfficeSuppliesPage() {
  const { addItem } = useCart();
  const [miscProducts, setMiscProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = "أدوات مكتبية متنوعة | تفانين";
    const desc = "اكتشف مجموعتنا من الأدوات المكتبية المتنوعة التي تلبي احتياجاتك اليومية.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { 
      meta = document.createElement('meta'); 
      meta.setAttribute('name','description'); 
      document.head.appendChild(meta);
    } 
    meta.setAttribute('content', desc);

    setMiscProducts(filterByCategory(allProducts, 'أدوات مكتبية متنوعة'));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">الفئات</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/office-supplies" className="hover:text-primary">مستلزمات المكتب</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">أدوات مكتبية متنوعة</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            أدوات مكتبية متنوعة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            كل ما تحتاجه من أدوات مكتبية في مكان واحد.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {miscProducts.map((item) => (
            <div key={item.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {item.brand}
                </span>
              </div>
              
              <ProductImage 
                src={item.image}
                alt={item.name}
                fallbackEmoji='📦'
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{item.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
                  onClick={() => addItem({ 
                    id: item.id, 
                    name: item.name, 
                    price: item.price, 
                    image: item.image 
                  })}
                >
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
