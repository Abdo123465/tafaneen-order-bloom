import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useProductNotifications } from "@/hooks/useProductNotifications";
import { 
  Bell, 
  Users, 
  Package, 
  Calendar, 
  Send, 
  RefreshCw,
  MessageCircle,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

export function ProductNotificationManager() {
  const { 
    stats, 
    isLoading, 
    sendNotifications, 
    getNewProducts, 
    getActiveSubscribers, 
    refreshStats 
  } = useProductNotifications();
  
  const [newProducts, setNewProducts] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // جلب البيانات
  const loadData = async () => {
    setLoadingData(true);
    try {
      const [products, subs] = await Promise.all([
        getNewProducts(),
        getActiveSubscribers()
      ]);
      setNewProducts(products);
      setSubscribers(subs);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "لم يتم الإرسال بعد";
    return new Date(dateString).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* العنوان */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-right">إدارة إشعارات المنتجات</h1>
          <p className="text-muted-foreground text-right mt-2">
            إرسال إشعارات WhatsApp للمشتركين عند إضافة منتجات جديدة
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={loadData} 
            variant="outline" 
            disabled={loadingData}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loadingData ? 'animate-spin' : ''}`} />
            تحديث البيانات
          </Button>
          <Button 
            onClick={sendNotifications} 
            disabled={isLoading || newProducts.length === 0 || subscribers.length === 0}
            className="gap-2 bg-green-600 hover:bg-green-700"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                جارٍ الإرسال...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                إرسال الإشعارات
              </>
            )}
          </Button>
        </div>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المشتركين</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSubscribers}</div>
            <Badge variant="secondary" className="mt-2">
              نشط: {stats.activeSubscribers}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">منتجات جديدة</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{newProducts.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              لم يتم إرسال إشعار عنها
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">تم الإشعار عنها</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.totalProductsNotified}</div>
            <p className="text-xs text-muted-foreground mt-2">
              منتج تم إرساله
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">آخر إرسال</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">
              {formatDate(stats.lastNotificationDate)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* تنبيهات */}
      {newProducts.length === 0 && (
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertDescription className="text-right">
            لا توجد منتجات جديدة لإرسال إشعارات عنها حالياً.
          </AlertDescription>
        </Alert>
      )}

      {subscribers.length === 0 && (
        <Alert>
          <Users className="h-4 w-4" />
          <AlertDescription className="text-right">
            لا يوجد مشتركين نشطين حالياً لإرسال الإشعارات إليهم.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* المنتجات الجديدة */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-right">
              <Package className="h-5 w-5" />
              المنتجات الجديدة ({newProducts.length})
            </CardTitle>
            <CardDescription className="text-right">
              المنتجات التي لم يتم إرسال إشعارات عنها بعد
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loadingData ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="h-6 w-6 animate-spin" />
              </div>
            ) : newProducts.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {newProducts.map((product) => (
                  <div key={product.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start text-right">
                      <div className="flex-1">
                        <h4 className="font-medium text-right">{product.name}</h4>
                        <p className="text-sm text-muted-foreground text-right">
                          {product.description?.substring(0, 100)}...
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-end">
                          <Badge variant="secondary">{product.category}</Badge>
                          <span className="text-sm font-medium">{product.price} جنيه</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 text-right">
                      تم الإضافة: {formatDate(product.created_at)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>لا توجد منتجات جديدة</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* معلومات الإرسال */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-right">
              <MessageCircle className="h-5 w-5" />
              معلومات الإرسال
            </CardTitle>
            <CardDescription className="text-right">
              تفاصيل عملية إرسال الإشعارات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg text-right">
              <h4 className="font-medium text-blue-900 mb-2">كيفية عمل النظام:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• سيتم إنشاء ملف نصي يحتوي على روابط WhatsApp</li>
                <li>• كل رابط مُجهز برسالة المنتجات الجديدة</li>
                <li>• يمكنك النقر على كل رابط لإرسال الرسالة</li>
                <li>• أو استخدام أدوات إرسال جماعي خارجية</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{subscribers.length}</div>
                <div className="text-sm text-muted-foreground">مشترك سيتم إرسال له</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{newProducts.length}</div>
                <div className="text-sm text-muted-foreground">منتج جديد</div>
              </div>
            </div>

            {newProducts.length > 0 && subscribers.length > 0 && (
              <div className="p-3 bg-green-50 rounded-lg text-right">
                <div className="text-sm text-green-800">
                  <strong>جاهز للإرسال!</strong><br/>
                  سيتم إنشاء {subscribers.length} رابط واتساب لإرسال معلومات {newProducts.length} منتج جديد.
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
