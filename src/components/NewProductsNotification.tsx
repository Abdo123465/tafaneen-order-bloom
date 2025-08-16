import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsApp, ShoppingBag, Star, Calendar } from "lucide-react";
import { NewProduct } from "@/types/whatsapp";

interface NewProductsNotificationProps {
  products: NewProduct[];
  onShareToWhatsApp: (products: NewProduct[]) => void;
}

export function NewProductsNotification({ products, onShareToWhatsApp }: NewProductsNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setIsVisible(true);
    }
  }, [products]);

  if (!isVisible || products.length === 0) {
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-green-200 bg-green-50">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <ShoppingBag className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-green-900">
          منتجات جديدة في تفانين! 🎉
        </CardTitle>
        <CardDescription className="text-green-700">
          تم إضافة {products.length} منتج جديد. اشترك في النشرة الإخبارية لتصلك الإشعارات أولاً!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow"
            >
              {product.image_url && (
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                  {product.name}
                </h3>
                
                {product.description && (
                  <p className="text-gray-600 text-xs line-clamp-2">
                    {product.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className="font-bold text-green-600 text-sm">
                    {formatPrice(product.price)}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(product.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > 6 && (
          <div className="text-center mb-4">
            <p className="text-green-700 text-sm">
              و {products.length - 6} منتج آخر...
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => onShareToWhatsApp(products)}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <WhatsApp className="w-4 h-4 mr-2" />
            شارك المنتجات الجديدة عبر واتساب
          </Button>
          
          <Button
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            <Star className="w-4 h-4 mr-2" />
            تصفح جميع المنتجات
          </Button>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
          <h4 className="font-medium text-green-900 mb-2 text-center">
            💡 نصيحة: اشترك في النشرة الإخبارية
          </h4>
          <p className="text-green-700 text-sm text-center">
            احصل على إشعارات فورية عند إضافة منتجات جديدة، عروض خاصة، وأسعار مخفضة!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

