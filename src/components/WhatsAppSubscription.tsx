import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WhatsApp, CheckCircle, AlertCircle, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { WhatsAppService } from "@/services/whatsappService";
import { SubscriptionFormData } from "@/types/whatsapp";

const subscriptionSchema = z.object({
  phone: z.string()
    .min(10, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل")
    .max(15, "رقم الهاتف يجب أن يكون 15 رقم على الأكثر")
    .regex(/^(\+966|966|05|5)\d{8}$/, "يرجى إدخال رقم هاتف سعودي صحيح")
});

export function WhatsAppSubscription() {
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
    whatsappUrl?: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema)
  });

  const phoneValue = watch('phone');

  const onSubmit = async (data: SubscriptionFormData) => {
    setIsLoading(true);
    setSubscriptionStatus({ type: null, message: '' });

    try {
      const result = await WhatsAppService.subscribe(data.phone);

      if (result.success) {
        setSubscriptionStatus({
          type: 'success',
          message: 'تم الاشتراك بنجاح! انقر على الزر أدناه لإرسال رسالة ترحيب عبر واتساب.',
          whatsappUrl: result.whatsappUrl
        });
        reset();
      } else {
        setSubscriptionStatus({
          type: 'error',
          message: result.error || 'حدث خطأ أثناء الاشتراك'
        });
      }
    } catch (error: any) {
      setSubscriptionStatus({
        type: 'error',
        message: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (phoneValue && !errors.phone) {
      const formattedPhone = WhatsAppService.formatPhoneNumber(phoneValue);
      const message = `مرحباً! أريد الاشتراك في نشرة تفانين الإخبارية للمنتجات الجديدة. رقم هاتفي: ${formattedPhone}`;
      const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleWelcomeMessage = () => {
    if (subscriptionStatus.whatsappUrl) {
      window.open(subscriptionStatus.whatsappUrl, '_blank');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" id="subscription-form">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <WhatsApp className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          اشترك عبر واتساب
        </CardTitle>
        <CardDescription className="text-gray-600">
          سجّل رقم واتساب الخاص بك لتصلك إشعارات فورية عند إضافة منتجات جديدة في تفانين
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="05xxxxxxxx"
                className="pl-10 text-right"
                {...register('phone')}
                dir="rtl"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {subscriptionStatus.type && (
            <Alert className={subscriptionStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
              {subscriptionStatus.type === 'success' ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={subscriptionStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {subscriptionStatus.message}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري الاشتراك...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  اشترك الآن
                </div>
              )}
            </Button>

            {subscriptionStatus.type === 'success' && subscriptionStatus.whatsappUrl && (
              <Button
                type="button"
                onClick={handleWelcomeMessage}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  أرسل رسالة ترحيب عبر واتساب
                </div>
              </Button>
            )}

            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppClick}
              disabled={!phoneValue || !!errors.phone}
              className="w-full border-green-200 text-green-700 hover:bg-green-50"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                أو أرسل رسالة عبر واتساب
              </div>
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">مميزات الاشتراك:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
              إشعارات فورية بالمنتجات الجديدة
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
              عروض خاصة وحصرية
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
              إلغاء الاشتراك في أي وقت
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
              مجاني تماماً
            </li>
          </ul>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-700 text-center">
            💡 <strong>كيف يعمل النظام:</strong> عند الاشتراك، سيتم حفظ رقم هاتفك في قاعدة البيانات. 
            عند إضافة منتجات جديدة، سيتم إنشاء رابط واتساب تلقائياً لإرسال الإشعارات.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
