import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { allProducts, Product } from "@/data/products";

const ProductImage = ({ src, alt, fallbackEmoji, className }: { src: string, alt: string, fallbackEmoji: string, className?: string }) => {
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
        <div className="text-6xl">{fallbackEmoji}</div>
      )}
    </div>
  );
};

export default function StampsPage() {
  const { addItem } = useCart();
  const [stampProducts, setStampProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = "ختامة و حبر ختامة | تفانين";
    const desc = "تصفح مجموعتنا من الأختام المكتبية وأحبار الختامات عالية الجودة.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    const filteredProducts = allProducts.filter(product => {
      const categories = Array.isArray(product.category) ? product.category : [product.category];
      return categories.includes('أختام') || categories.includes('حبر ختامة');
    });
    setStampProducts(filteredProducts);
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
          <span className="text-foreground">ختامة و حبر ختامة</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            ختامة و حبر ختامة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعتنا المتنوعة من الأختام وأحبار الختامات لتلبية جميع احتياجاتك المكتبية.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stampProducts.map((product) => (
            <div key={product.id} className="card-product relative group">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {product.brand}
                </span>
              </div>
              
              <ProductImage 
                src={product.image}
                alt={product.name}
                fallbackEmoji="📠"
                className="mb-4"
              />
              
              <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-bold text-lg">{product.price} ج.م</span>
                <Button 
                  className="btn-tafaneen"
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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
