// src/pages/SearchPage.tsx
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star, Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { 
  searchProducts, 
  filterByCategory, 
  sortProducts, 
  getUniqueCategories,
  getUniqueBrands,
  type Product 
} from "@/data/products";

// مكون محسن لعرض المنتج مع صور حقيقية
function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-muted/30 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* شارات المنتج */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
              جديد
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
              الأكثر مبيعاً
            </Badge>
          )}
          {product.isPopular && (
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
              شائع
            </Badge>
          )}
          {product.originalPrice && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">
              خصم
            </Badge>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              غير متوفر
            </Badge>
          </div>
        )}
        
        {/* زر الإعجاب */}
        <Button
          size="icon"
          variant="outline"
          className="absolute top-2 left-2 bg-white/90 hover:bg-white border-none shadow-md"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        {/* معلومات العلامة التجارية والفئة */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-medium">
            {product.brand}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        {/* اسم المنتج */}
        <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* وصف المنتج */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        {/* التقييم */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-200"
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            ({product.rating})
          </span>
        </div>
        
        {/* السعر */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">
            {product.price} ج.م
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice} ج.م
            </span>
          )}
        </div>
        
        {/* زر الإضافة إلى السلة */}
        <Button 
          className="w-full btn-tafaneen gap-2 font-semibold" 
          disabled={!product.inStock}
          onClick={() => addItem({ 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            image: product.image 
          })}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "أضف إلى السلة" : "غير متوفر"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("relevance");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterBrand, setFilterBrand] = useState("all");
  const [currentQuery, setCurrentQuery] = useState(query);

  // البحث الذكي المحسن
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      if (query.trim() === "") {
        setSearchResults([]);
      } else {
        // البحث الذكي باستخدام الدالة المحسنة
        let results = searchProducts(query);
        
        // تطبيق فلتر الفئة
        results = filterByCategory(results, filterCategory);
        
        // تطبيق فلتر العلامة التجارية
        if (filterBrand !== "all") {
          results = results.filter(product => 
            product.brand.toLowerCase() === filterBrand.toLowerCase()
          );
        }
        
        // ترتيب النتائج
        results = sortProducts(results, sortBy);
        
        setSearchResults(results);
      }
      setLoading(false);
    }, 400); // تقليل وقت التأخير للاستجابة السريعة
    
    return () => clearTimeout(timer);
  }, [query, sortBy, filterCategory, filterBrand]);

  // تحديث البحث عند تغيير النص
  const handleSearchChange = (newQuery: string) => {
    setCurrentQuery(newQuery);
    const newParams = new URLSearchParams(searchParams);
    if (newQuery.trim()) {
      newParams.set("q", newQuery);
    } else {
      newParams.delete("q");
    }
    setSearchParams(newParams);
  };

  // الحصول على الفئات والعلامات التجارية الفريدة
  const categories = getUniqueCategories();
  const brands = ["all", ...getUniqueBrands()];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">نتائج البحث</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
            العودة للصفحة الرئيسية
          </Button>
        </div>
        <div className="flex items-center text-muted-foreground mb-6">
          <Search className="h-4 w-4 ml-2" />
          <span>عرض نتائج البحث عن: "{query}"</span>
          <span className="mx-2">•</span>
          <span>{searchResults.length} منتج تم العثور عليه</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              value={currentQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="ابحث عن الأدوات المكتبية والقرطاسية... (مثل: ليكويد، برافو، روتو)"
              className="pr-12 pl-4 py-3 rounded-xl border-2 focus:border-primary text-base"
              dir="rtl"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 min-w-[120px]">
                  <Filter className="h-4 w-4" />
                  {filterCategory === "all" ? "جميع الفئات" : filterCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={filterCategory === category ? "bg-accent font-medium" : ""}
                  >
                    {category === "all" ? "جميع الفئات" : category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 min-w-[120px]">
                  <Filter className="h-4 w-4" />
                  {filterBrand === "all" ? "جميع الماركات" : filterBrand}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {brands.map((brand) => (
                  <DropdownMenuItem 
                    key={brand}
                    onClick={() => setFilterBrand(brand)}
                    className={filterBrand === brand ? "bg-accent font-medium" : ""}
                  >
                    {brand === "all" ? "جميع الماركات" : brand}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 min-w-[120px]">
                  ترتيب حسب
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem 
                  onClick={() => setSortBy("relevance")}
                  className={sortBy === "relevance" ? "bg-accent font-medium" : ""}
                >
                  الأكثر صلة
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("price-low")}
                  className={sortBy === "price-low" ? "bg-accent font-medium" : ""}
                >
                  السعر: من الأقل إلى الأعلى
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("price-high")}
                  className={sortBy === "price-high" ? "bg-accent font-medium" : ""}
                >
                  السعر: من الأعلى إلى الأقل
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("rating")}
                  className={sortBy === "rating" ? "bg-accent font-medium" : ""}
                >
                  الأعلى تقييماً
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("name")}
                  className={sortBy === "name" ? "bg-accent font-medium" : ""}
                >
                  الاسم (أ-ي)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-square w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-9 w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      ) : searchResults.length > 0 ? (
        <>
          {/* معلومات النتائج */}
          <div className="mb-6 p-4 bg-muted/30 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">تم العثور على</span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {searchResults.length}
                </Badge>
                <span>منتج</span>
              </div>
              
              {/* إحصائيات سريعة */}
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>أقلام برافو: {searchResults.filter(p => p.brand === 'برافو').length}</span>
                <span>أقلام روتو: {searchResults.filter(p => p.brand === 'روتو').length}</span>
                <span>أقلام بريما: {searchResults.filter(p => p.brand === 'بريما').length}</span>
              </div>
            </div>
          </div>

          {/* شبكة المنتجات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="mb-6 text-muted-foreground">
            <Search className="h-16 w-16 mx-auto mb-4 opacity-30" />
          </div>
          <h3 className="text-2xl font-bold mb-4">لا توجد نتائج للبحث</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            لم نتمكن من العثور على منتجات تطابق بحثك عن "{query}"
          </p>
          
          {/* اقتراحات البحث */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-4">جرب البحث عن:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['ليكويد بول', 'برافو', 'روتو', 'بريما', 'فرنساوي', 'أقلام حبر سائل'].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearchChange(suggestion)}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h5 className="font-medium">نصائح للبحث:</h5>
                <ul className="text-muted-foreground space-y-1">
                  <li>• تحقق من تهجئة الكلمات</li>
                  <li>• استخدم كلمات أكثر عمومية</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">أمثلة على البحث:</h5>
                <ul className="text-muted-foreground space-y-1">
                  <li>• "ليكويد" للبحث عن أقلام سائلة</li>
                  <li>• "برافو" لجميع أقلام برافو</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">فئات شائعة:</h5>
                <ul className="text-muted-foreground space-y-1">
                  <li>• أقلام حبر سائل</li>
                  <li>• أقلام جاف</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
