import { useState, useEffect } from "react";
import { WhatsAppSubscription } from "@/components/WhatsAppSubscription";
import { NewProductsNotification } from "@/components/NewProductsNotification";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsApp, Users, Bell, Gift, Star, TrendingUp } from "lucide-react";
import { NewProduct } from "@/types/whatsapp";

export default function WhatsAppSubscriptionPage() {
  const [newProducts] = useState<NewProduct[]>([
    {
      id: "1",
      name: "قلم جاف فاخر - مجموعة ألوان متعددة",
      description: "قلم جاف عالي الجودة مع حبر سلس وكتابة واضحة",
      price: 25.00,
      image_url: "/images/pen1.jpg",
      category: "أقلام جاف",
      created_at: new Date().toISOString()
    },
    {
      id: "2",
      name: "دفتر ملاحظات فاخر - 100 صفحة",
      description: "دفتر ملاحظات بجودة عالية مع غلاف جلدي أنيق",
      price: 45.00,
      image_url: "/images/notebook1.jpg",
      category: "دفاتر",
      created_at: new Date().toISOString()
    },
    {
      id: "3",
      name: "حاسبة علمية متقدمة",
      description: "حاسبة علمية مع وظائف متقدمة للطلاب والمهندسين",
      price: 120.00,
      image_url: "/images/calculator1.jpg",
      category: "حاسبات",
      created_at: new Date().toISOString()
    }
  ]);

  const handleShareToWhatsApp = (products: NewProduct[]) => {
    const message = `🎉 منتجات جديدة في تفانين!\n\n${products.map(product => 
      `• ${product.name} - ${product.price} ريال`
    ).join('\n')}\n\nاشترك في النشرة الإخبارية: https://tafaneen.com/subscribe`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: <Bell className="w-6 h-6 text-green-600" />,
      title: "إشعارات فورية",
      description: "احصل على إشعارات فورية عند إضافة منتجات جديدة"
    },
    {
      icon: <Gift className="w-6 h-6 text-green-600" />,
      title: "عروض حصرية",
      description: "عروض خاصة وحصرية للمشتركين في النشرة الإخبارية"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "أولوية في المعرفة",
      description: "كن أول من يعرف عن المنتجات الجديدة والعروض"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "مجتمع تفانين",
      description: "انضم إلى مجتمع عشاق القرطاسية والأدوات المكتبية"
    }
  ];

  const stats = [
    { label: "مشترك نشط", value: "2,847", icon: <Users className="w-4 h-4" /> },
    { label: "منتج جديد", value: "156", icon: <Star className="w-4 h-4" /> },
    { label: "إشعار مرسل", value: "12,450", icon: <Bell className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <WhatsApp className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            اشترك في نشرة تفانين الإخبارية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            سجّل رقم واتساب الخاص بك لتصلك إشعارات فورية عند إضافة منتجات جديدة في تفانين
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Subscription Form */}
          <div className="lg:col-span-1">
            <WhatsAppSubscription />
          </div>

          {/* Features */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  مميزات الاشتراك
                </CardTitle>
                <CardDescription className="text-center">
                  لماذا يجب عليك الاشتراك في النشرة الإخبارية؟
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                إحصائيات النشرة الإخبارية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="mx-auto w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-3">
                      <div className="text-green-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-700 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Products Preview */}
        <div className="mb-12">
          <NewProductsNotification 
            products={newProducts} 
            onShareToWhatsApp={handleShareToWhatsApp}
          />
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                الأسئلة الشائعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    كيف يمكنني إلغاء الاشتراك؟
                  </h3>
                  <p className="text-gray-600">
                    يمكنك إلغاء الاشتراك في أي وقت عن طريق إرسال رسالة "إلغاء" إلى رقم واتساب تفانين.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    كم مرة سأستلم الإشعارات؟
                  </h3>
                  <p className="text-gray-600">
                    ستصلك الإشعارات فقط عند إضافة منتجات جديدة أو عروض خاصة، وليس بشكل يومي.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    هل ستتم مشاركة رقم هاتفي مع أطراف ثالثة؟
                  </h3>
                  <p className="text-gray-600">
                    لا، رقم هاتفك محمي ولن يتم مشاركته مع أي طرف ثالث. نحن نستخدمه فقط لإرسال الإشعارات.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    هل الاشتراك مجاني؟
                  </h3>
                  <p className="text-gray-600">
                    نعم، الاشتراك في النشرة الإخبارية مجاني تماماً. لن يتم خصم أي رسوم من حسابك.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                انضم إلى آلاف العملاء الراضين! 🎉
              </h2>
              <p className="text-xl mb-6 opacity-90">
                اشترك الآن واحصل على إشعارات فورية بالمنتجات الجديدة والعروض الحصرية
              </p>
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <WhatsApp className="w-5 h-5 mr-2" />
                اشترك الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

