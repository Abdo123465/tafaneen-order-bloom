import { ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/data/products";

export function LatestProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();

  // Get latest products (using isNew flag or just the first few)
  const latestProducts = allProducts.filter(p => p.isNew).slice(0, 6);

  // If no products have isNew flag, just take the first few
  const productsToShow = latestProducts.length > 0 ? latestProducts : allProducts.slice(0, 6);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    toast({
      title: "تم إضافة المنتج",
      description: `${product.name} تم إضافته للسلة`,
    });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white/10 backdrop-blur-sm border-y border-white/20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-fade-in">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-orange-500/20">
              <Zap className="h-4 w-4 fill-orange-500" />
              وصل حديثاً
            </div>
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-gradient">أحدث المنتجات</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-xl font-medium md:mb-2">
            تابع آخر الإضافات والتشكيلات الجديدة التي وصلت لمتجر تفانين مؤخراً.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsToShow.map((product, index) => (
            <div
              key={product.id}
              className="glass-card group p-5 flex flex-col h-full hover:bg-white/60 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image & Badge */}
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square bg-white/50 p-4 border border-white/10 group-hover:scale-[1.03] transition-transform duration-500">
                <div className="w-full h-full flex items-center justify-center text-7xl">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <span>🛍️</span>
                  )}
                </div>

                {/* New Badge */}
                <div className="absolute top-4 right-4 animate-bounce-in">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none px-3 py-1 text-xs font-bold shadow-lg">
                    جديد 🆕
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="text-xs font-bold text-primary mb-1">{product.brand}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold">السعر</span>
                    <span className="text-2xl font-black text-primary">
                      {product.price} <span className="text-sm font-bold">ج.م</span>
                    </span>
                  </div>

                  <Button
                    className="btn-tafaneen px-6 rounded-2xl shadow-lg"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="ml-2 h-5 w-5" />
                    إضافة
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
