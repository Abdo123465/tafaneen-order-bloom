// src/pages/SearchPage.tsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

// بيانات وهمية للمنتجات - في التطبيق الحقيقي سيتم جلبها من API
const mockProducts = [
  {
    id: 1,
    name: "قلم حبر سائل أزرق",
    description: "قلم عالي الجودة من شركة بريمو",
    price: 5.5,
    originalPrice: 7,
    image: "/lovable-uploads/pen1.jpg",
    category: "أقلام",
    inStock: true,
  },
  {
    id: 2,
    name: "كراسة 80 ورق",
    description: "كراسة عالية الجودة من شركة كاشاكيل",
    price: 15,
    originalPrice: null,
    image: "/lovable-uploads/notebook1.jpg",
    category: "كراسات",
    inStock: true,
  },
  {
    id: 3,
    name: "مجموعة أقلام تلوين",
    description: "مجموعة 12 قلم تلوين من ستار كولور",
    price: 35,
    originalPrice: 45,
    image: "/lovable-uploads/pencils1.jpg",
    category: "أدوات فنية",
    inStock: true,
  },
  {
    id: 4,
    name: "دباسة مكتبية",
    description: "دباسة قوية من شركة روكيت",
    price: 25,
    originalPrice: null,
    image: "/lovable-uploads/stapler1.jpg",
    category: "أدوات مكتبية",
    inStock: false,
  },
  {
    id: 5,
    name: "حافظة أقلام جلدية",
    description: "حافظة أقلام فاخرة من جلد طبيعي",
    price: 45,
    originalPrice: 60,
    image: "/lovable-uploads/pen-case1.jpg",
    category: "إكسسوارات",
    inStock: true,
  },
  {
    id: 6,
    name: "ممحاة قوية",
    description: "ممحاة عالية الجودة من شركة فابر كاستيل",
    price: 3.5,
    originalPrice: null,
    image: "/lovable-uploads/eraser1.jpg",
    category: "أدوات مكتبية",
    inStock: true,
  },
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("relevance");
  const [filterCategory, setFilterCategory] = useState("all");

  // محاكاة جلب البيانات من API
  useEffect(() => {
    setLoading(true);
    
    // في تطبيق حقيقي، سيتم هنا إجراء طلب API لجلب نتائج البحث
    // هذا مجرد محاكاة لتأخير الشبكة
    const timer = setTimeout(() => {
      if (query.trim() === "") {
        setSearchResults([]);
      } else {
        // تصفية المنتجات بناءً على عبارة البحث
        const filtered = mockProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        // ترتيب النتائج حسب الاختيار
        let sorted = [...filtered];
        if (sortBy === "price-low") {
          sorted.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
          sorted.sort((a, b) => b.price - a.price);
        }
        
        // تصفية حسب الفئة
        if (filterCategory !== "all") {
          sorted = sorted.filter(product => 
            product.category.toLowerCase() === filterCategory.toLowerCase()
          );
        }
        
        setSearchResults(sorted);
      }
      setLoading(false);
    }, 800); // محاكاة تأخير الشبكة
    
    return () => clearTimeout(timer);
  }, [query, sortBy, filterCategory]);

  // الحصول على الفئات الفريدة من المنتجات
  const categories = ["all", ...new Set(mockProducts.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">نتائج البحث</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Search className="h-4 w-4 ml-2" />
          <span>عرض نتائج البحث عن: "{query}"</span>
          <span className="mx-2">•</span>
          <span>{searchResults.length} منتج تم العثور عليه</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              defaultValue={query}
              placeholder="ابحث عن الأدوات المكتبية والقرطاسية..."
              className="pr-10 rounded-xl border-2 focus:border-primary"
              dir="rtl"
            />
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  الفئة
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={filterCategory === category ? "bg-accent" : ""}
                  >
                    {category === "all" ? "جميع الفئات" : category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  ترتيب حسب
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => setSortBy("relevance")}
                  className={sortBy === "relevance" ? "bg-accent" : ""}
                >
                  الأكثر صلة
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("price-low")}
                  className={sortBy === "price-low" ? "bg-accent" : ""}
                >
                  السعر: من الأقل إلى الأعلى
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortBy("price-high")}
                  className={sortBy === "price-high" ? "bg-accent" : ""}
                >
                  السعر: من الأعلى إلى الأقل
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-20 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-xl font-semibold mb-2">لا توجد نتائج للبحث</h3>
          <p className="text-muted-foreground mb-6">
            لم نتمكن من العثور على منتجات تطابق بحثك عن "{query}"
          </p>
          <div className="space-y-2 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">نصائح للبحث:</p>
            <ul className="text-sm text-muted-foreground space-y-1 text-right">
              <li>• تحقق من تهجئة الكلمات</li>
              <li>• استخدم كلمات أكثر عمومية</li>
              <li>• جرب كلمات مفتاحية مختلفة</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
