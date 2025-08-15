import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AdminUtils } from "@/utils/adminUtils";
import { Package, Plus, RefreshCw } from "lucide-react";

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
}

export function ProductForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    category: "",
    is_featured: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await AdminUtils.addProductWithNotification({
        name: formData.name,
        description: formData.description || undefined,
        price: formData.price,
        image_url: formData.image_url || undefined,
        category: formData.category || undefined,
        is_featured: formData.is_featured
      });

      if (result.success) {
        toast({
          title: "تم إضافة المنتج بنجاح ✅",
          description: `تم إضافة "${formData.name}" وسيظهر في قائمة المنتجات الجديدة للإشعارات.`,
        });
        
        // إعادة تعيين النموذج
        setFormData({
          name: "",
          description: "",
          price: 0,
          image_url: "",
          category: "",
          is_featured: false
        });
      } else {
        throw new Error("فشل في إضافة المنتج");
      }
    } catch (error) {
      toast({
        title: "خطأ في إضافة المنتج ❌",
        description: "حدث خطأ أثناء إضافة المنتج. حاول مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "كتب الكبار",
    "كتب الأطفال", 
    "القرطاسية",
    "أدوات المكتب",
    "الأدوات المدرسية",
    "كتب تعليمية",
    "روايات",
    "كتب دينية"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-right">
          <Package className="h-5 w-5" />
          إضافة منتج جديد
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-right">
                اسم المنتج *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="مثال: كتاب الأسود يليق بك"
                className="text-right"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-right">
                السعر (جنيه) *
              </label>
              <Input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.price || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                placeholder="مثال: 45.50"
                className="text-right"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-right">
              الوصف
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="وصف تفصيلي للمنتج..."
              className="text-right h-24"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-right">
                الفئة
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-md text-right bg-white"
              >
                <option value="">اختر الفئة</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-right">
                رابط الصورة
              </label>
              <Input
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                placeholder="https://example.com/image.jpg"
                className="text-right"
                dir="ltr"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_featured"
              checked={formData.is_featured}
              onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
              className="rounded"
            />
            <label htmlFor="is_featured" className="text-sm font-medium">
              منتج مميز
            </label>
          </div>

          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setFormData({
                name: "",
                description: "",
                price: 0,
                image_url: "",
                category: "",
                is_featured: false
              })}
            >
              إعادة تعيين
            </Button>
            
            <Button type="submit" disabled={isSubmitting} className="gap-2">
              {isSubmitting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  جارٍ الإضافة...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  إضافة المنتج
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
