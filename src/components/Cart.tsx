import { useState } from "react";
import { ShoppingCart, MapPin, Truck, MessageCircle, Download, X, Plus, Minus, Trash2, FileText, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { validateEgyptianPhone, formatEgyptianPhone } from "@/utils/phoneValidation";
import QRCode from "react-qr-code";

// دالة آمنة لتحميل الملفات
const downloadFileSafely = (blob: Blob, filename: string): boolean => {
  try {
    // التحقق من دعم المتصفح
    if (!window.URL || !window.URL.createObjectURL) {
      throw new Error('Browser does not support file download');
    }

    // تنظيف اسم الملف من الأحرف الخطيرة
    const safeFilename = filename.replace(/[<>:"/\\|?*]/g, '_');
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // تعيين الخصائص بطريقة آمنة
    link.href = url;
    link.download = safeFilename;
    link.style.display = 'none';
    link.rel = 'noopener noreferrer';
    
    // تنفيذ التحميل بدون إضافة العنصر للـ DOM
    link.click();
    
    // تنظيف الذاكرة فوراً
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('خطأ في تحميل الملف:', error);
    return false;
  }
};

// دالة لتنظيف وتعقيم النصوص
const sanitizeText = (text: string): string => {
  if (typeof text !== 'string') return '';
  
  // إزالة الأحرف الخطيرة
  return text
    .replace(/[<>]/g, '') // إزالة HTML tags
    .replace(/javascript:/gi, '') // إزالة javascript protocols
    .replace(/data:/gi, '') // إزالة data protocols
    .trim();
};

export function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount, clearCart } = useCart();
  const [showOptions, setShowOptions] = useState(false);
  const [showPickupOptions, setShowPickupOptions] = useState(false);
  const [showDeliveryCheckout, setShowDeliveryCheckout] = useState(false);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  // بيانات العميل
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNameError, setCustomerNameError] = useState('');
  const [customerPhoneError, setCustomerPhoneError] = useState('');
  
  // بيانات العنوان للتوصيل
  const [areaName, setAreaName] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [floor, setFloor] = useState('');
  
  // خيارات البوابات مع أسعار التوصيل
  const AREA_OPTIONS = [
    // بوابات بسعر 20 جنيه
    { label: 'البوابة الأولى', fee: 20 },
    { label: 'البوابة الثانية', fee: 20 },
    { label: 'البوابة الثالثة', fee: 20 },
    { label: 'البوابة الرابعة', fee: 20 },
    { label: 'مساكن ضباط', fee: 20 },
    { label: 'الرماية', fee: 20 },
    
    // بوابات بسعر 25 جنيه
    { label: 'البوابة الأولى - المناطق (ع، ص، ن، ا، س، م، ك)', fee: 25 },
    { label: 'البوابة الثانية - المناطق (ع، ص، ن، ا، س، م، ك)', fee: 25 },
    { label: 'البوابة الثالثة - المناطق (ع، ص، ن، ا، س، م، ك)', fee: 25 },
    { label: 'البوابة الرابعة - المناطق (ع، ص، ن، ا، س، م، ك)', fee: 25 },
    
    // بوابات بسعر 30 جنيه
    { label: 'مساكن الشباب', fee: 30 },
    { label: 'الرماية - المنطقة الخاصة', fee: 30 },
  ] as const;
  
  const [area, setArea] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'vodafone' | 'instapay'>('cod');
  
  // حساب الأسعار
  const cartCount = getItemCount();
  const totalPrice = getTotalPrice();
  const deliveryFee = AREA_OPTIONS.find(o => o.label === area)?.fee ?? 0;
  
  // التوصيل المجاني للطلبات أكثر من 1000 ج.م
  const isFreeDelivery = totalPrice >= 1000;
  const actualDeliveryFee = isFreeDelivery ? 0 : deliveryFee;
  
  const subtotal = totalPrice + (showDeliveryCheckout ? actualDeliveryFee : 0);
  const surcharge = showDeliveryCheckout && paymentMethod === 'vodafone' ? Math.ceil(subtotal * 0.01) : 0;
  const finalTotal = subtotal + surcharge;
  
  // التحقق من إمكانية المتابعة
  const canProceed = Boolean(
    customerName && 
    !customerPhoneError && 
    customerPhone && 
    areaName && 
    apartmentNumber &&
    buildingNumber && 
    floor && 
    area
  );

  // التحقق من صحة رقم الهاتف مع تعقيم البيانات
  const handlePhoneChange = (value: string) => {
    const sanitizedValue = sanitizeText(value);
    setCustomerPhone(sanitizedValue);
    setCustomerPhoneError('');
    
    if (sanitizedValue.trim()) {
      const validation = validateEgyptianPhone(sanitizedValue);
      if (!validation.isValid) {
        setCustomerPhoneError(validation.errorMessage || "رقم الهاتف غير صحيح");
      }
    }
  };

  // معالجة تغيير اسم العميل مع تعقيم البيانات
  const handleNameChange = (value: string) => {
    const sanitizedValue = sanitizeText(value);
    setCustomerName(sanitizedValue);
    setCustomerNameError(sanitizedValue ? '' : 'يرجى إدخال اسم العميل');
  };

  // إنشاء رقم فاتورة آمن
  const generateInvoiceNumber = (): string => {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `TF-${timestamp}-${random}`;
  };

  // معالجة إشعار واتساب للاستلام من المكتبة
  const handleWhatsAppNotification = () => {
    // تعقيم البيانات قبل التحقق
    const sanitizedName = sanitizeText(customerName);
    const sanitizedPhone = sanitizeText(customerPhone);

    // التحقق من إدخال معلومات العميل
    if (!sanitizedName) {
      setCustomerNameError('يرجى إدخال اسم العميل');
      return;
    }
    if (!sanitizedPhone) {
      setCustomerPhoneError('يرجى إدخال رقم الهاتف');
      return;
    }

    // التحقق من صحة رقم الهاتف المصري
    const phoneValidation = validateEgyptianPhone(sanitizedPhone);
    if (!phoneValidation.isValid) {
      setCustomerPhoneError(phoneValidation.errorMessage || "يرجى إدخال رقم هاتف مصري صحيح");
      return;
    }
    
    try {
      const invoiceNumber = generateInvoiceNumber();
      const today = new Date();
      const date = today.toLocaleDateString('ar-EG');
      const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
      
      // تنسيق تفاصيل المنتجات بشكل منظم مع تعقيم البيانات
      const orderItems = items.map((item, index) => {
        const sanitizedItemName = sanitizeText(item.name);
        return `${index + 1}. ${sanitizedItemName}\nالكمية: ${item.quantity}\nسعر الوحدة: ${item.price} ج.م\nالمجموع: ${item.price * item.quantity} ج.م`;
      }).join('\n\n');
      
      const formattedPhone = formatEgyptianPhone(sanitizedPhone);
      
      const message = `فاتورة طلب - مكتبة تفانين

معلومات الفاتورة:
رقم الفاتورة: ${invoiceNumber}
التاريخ: ${date}
الوقت: ${time}
طريقة الاستلام: استلام من المكتبة

معلومات العميل:
الاسم: ${sanitizedName}
رقم الهاتف: ${formattedPhone}

المنتجات المطلوبة:
${orderItems}

الإجمالي الكلي: ${totalPrice} ج.م

موقع الاستلام:
مكتبة تفانين - 122 ز البوابة الاولي حدائق الاهرام اما اسماك بورسعيد بجوار المول القديم
أوقات الاستلام: من 10 صباحاً حتى 5 مساءً

للاستفسار: 01026274235

شكراً لثقتك بمكتبة تفانين!`;
      
      // فتح واتساب بطريقة آمنة
      const phoneNumber = "201026274235";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // التحقق من أن الرابط آمن
      if (whatsappUrl.startsWith('https://wa.me/')) {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error('Invalid WhatsApp URL');
      }
      
      toast({
        title: "تم إرسال الإشعار",
        description: "تم فتح واتساب لإرسال تفاصيل الفاتورة",
      });

      // إعادة تعيين حقول العميل بعد الإرسال
      setCustomerName("");
      setCustomerPhone("");
      setShowPickupOptions(false);
      setShowOptions(false);
    } catch (error) {
      console.error('خطأ في إرسال الإشعار:', error);
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء محاولة إرسال الإشعار",
        variant: "destructive",
      });
    }
  };

  // إنشاء فاتورة HTML آمنة
  const generateHTMLInvoice = () => {
    if (items.length === 0) {
      toast({
        title: "السلة فارغة",
        description: "يرجى إضافة منتجات للسلة أولاً",
        variant: "destructive",
      });
      return;
    }

    try {
      const invoiceNumber = generateInvoiceNumber();
      const today = new Date();
      const date = today.toLocaleDateString('ar-EG');
      const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

      // تعقيم بيانات العميل
      const sanitizedCustomerName = sanitizeText(customerName) || 'غير محدد';
      const sanitizedCustomerPhone = sanitizeText(customerPhone) || 'غير محدد';
      const sanitizedAreaName = sanitizeText(areaName);
      const sanitizedApartmentNumber = sanitizeText(apartmentNumber);
      const sanitizedBuildingNumber = sanitizeText(buildingNumber);
      const sanitizedFloor = sanitizeText(floor);
      const sanitizedArea = sanitizeText(area);

      // تحديد نوع الخدمة والتكلفة
      const serviceType = selectedDeliveryMethod === 'pickup' ? 'استلام من المكتبة' : 'توصيل للمنزل';
      const deliveryCost = selectedDeliveryMethod === 'pickup' ? 0 : deliveryFee;
      const paymentMethodText = paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 
                               paymentMethod === 'vodafone' ? 'فودافون كاش' : 'إنستاباي';

      // تعقيم بيانات المنتجات
      const sanitizedItems = items.map(item => ({
        ...item,
        name: sanitizeText(item.name)
      }));

      const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فاتورة الطلب - مكتبة تفانين</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
            font-family: 'Cairo', sans-serif; 
            background: #f9f9f9; 
            padding: 20px; 
            direction: rtl;
            text-align: right;
        }
        .invoice-container { 
            max-width: 800px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 12px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.1); 
        }
        .header { 
            text-align: center; 
            margin-bottom: 30px; 
            border-bottom: 2px solid #d9534f; 
            padding-bottom: 20px; 
        }
        .header h1 { 
            color: #d9534f; 
            font-size: 28px; 
            margin-bottom: 10px; 
        }
        .header p { 
            color: #666; 
            font-size: 14px; 
        }
        .invoice-details { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 20px; 
            margin-bottom: 30px; 
        }
        .section { 
            background: #f2dede; 
            padding: 20px; 
            border-radius: 8px; 
        }
        .section h3 { 
            color: #d9534f; 
            margin-bottom: 10px; 
            font-size: 18px; 
        }
        .info-row { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 8px; 
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0; 
        }
        th, td { 
            padding: 12px; 
            text-align: right; 
            border-bottom: 1px solid #ddd; 
        }
        th { 
            background: #d9534f; 
            color: #fff; 
            font-weight: 600; 
        }
        .total-section { 
            background: #f8f9fa; 
            padding: 20px; 
            border-radius: 8px; 
            margin: 20px 0; 
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 10px; 
            padding: 5px 0; 
        }
        .final-total { 
            font-size: 20px; 
            font-weight: bold; 
            color: #d9534f; 
            border-top: 2px solid #d9534f; 
            padding-top: 10px; 
        }
        .footer { 
            text-align: center; 
            margin-top: 30px; 
            padding-top: 20px; 
            border-top: 1px solid #ddd; 
        }
        .address-section {
            background: #e8f4f8;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        @media print { 
            body { background: white; } 
            .invoice-container { box-shadow: none; } 
        }
    </style>
</head>
<body>
    <div class="invoice-container">
        <div class="header">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
                <div style="background: #d9534f; color: white; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">
                    T
                </div>
            </div>
            <h1>مكتبة تفانين</h1>
            <p>فاتورة طلب إلكترونية</p>
            <p>📍 122 ز البوابة الاولي حدائق الاهرام اما اسماك بورسعيد بجوار المول القديم</p>
            <p>📞 01026274235</p>
        </div>
        
        <div class="invoice-details">
            <div class="section">
                <h3>معلومات الفاتورة</h3>
                <div class="info-row"><span>رقم الفاتورة:</span><span>${invoiceNumber}</span></div>
                <div class="info-row"><span>التاريخ:</span><span>${date}</span></div>
                <div class="info-row"><span>الوقت:</span><span>${time}</span></div>
                <div class="info-row"><span>طريقة الاستلام:</span><span>${serviceType}</span></div>
            </div>
            
            <div class="section">
                <h3>معلومات العميل</h3>
                <div class="info-row"><span>الاسم:</span><span>${sanitizedCustomerName}</span></div>
                <div class="info-row"><span>الهاتف:</span><span>${sanitizedCustomerPhone}</span></div>
            </div>
        </div>
        
        ${selectedDeliveryMethod === 'delivery' ? `
        <div class="address-section">
            <h3 style="color: #d9534f; margin-bottom: 10px;">عنوان التوصيل</h3>
            <p><strong>المنطقة:</strong> ${sanitizedAreaName}</p>
            <p><strong>رقم الشقة:</strong> ${sanitizedApartmentNumber}</p>
            <p><strong>رقم العمارة:</strong> ${sanitizedBuildingNumber}</p>
            <p><strong>الدور:</strong> ${sanitizedFloor}</p>
            <p><strong>المنطقة/البوابة:</strong> ${sanitizedArea}</p>
        </div>
        ` : ''}
        
        <table>
            <thead>
                <tr>
                    <th>المنتج</th>
                    <th>الكمية</th>
                    <th>السعر</th>
                    <th>الإجمالي</th>
                </tr>
            </thead>
            <tbody>
                ${sanitizedItems.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price} ج.م</td>
                    <td>${item.price * item.quantity} ج.م</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
        
        <div class="total-section">
            <div class="total-row">
                <span>مجموع المنتجات:</span>
                <span>${totalPrice} ج.م</span>
            </div>
            ${selectedDeliveryMethod === 'delivery' ? `
            <div class="total-row">
                <span>رسوم التوصيل:</span>
                <span>${deliveryCost} ج.م</span>
            </div>
            ` : ''}
            ${paymentMethod === 'vodafone' ? `
            <div class="total-row">
                <span>رسوم فودافون كاش (1%):</span>
                <span>${surcharge} ج.م</span>
            </div>
            ` : ''}
            <div class="total-row">
                <span>طريقة الدفع:</span>
                <span>${paymentMethodText}</span>
            </div>
            <div class="total-row final-total">
                <span>الإجمالي النهائي:</span>
                <span>${selectedDeliveryMethod === 'pickup' ? totalPrice : finalTotal} ج.م</span>
            </div>
        </div>
        
        <div class="footer">
            <p>شكراً لثقتك بمكتبة تفانين!</p>
            <p>للاستفسار: 01026274235</p>
            <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-EG')}</p>
        </div>
    </div>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const success = downloadFileSafely(blob, `فاتورة-${invoiceNumber}.html`);
      
      if (success) {
        toast({
          title: "تم تحميل الفاتورة",
          description: "تم تحميل الفاتورة بتنسيق HTML بنجاح",
        });
      } else {
        toast({
          title: "خطأ في التحميل",
          description: "حدث خطأ أثناء محاولة تحميل الفاتورة",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('خطأ في إنشاء الفاتورة:', error);
      toast({
        title: "خطأ في إنشاء الفاتورة",
        description: "حدث خطأ أثناء محاولة إنشاء الفاتورة",
        variant: "destructive",
      });
    }
  };

  // معالجة خيار التوصيل
  const handleDeliveryOption = () => {
    setSelectedDeliveryMethod('delivery');
    setShowDeliveryCheckout(true);
    setShowOptions(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { 
      setIsOpen(open); 
      if (!open) { 
        setShowOptions(false); 
        setShowPickupOptions(false); 
        setShowDeliveryCheckout(false); 
      } 
    }}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -left-2 h-5 w-5 flex items-center justify-center p-0 text-xs badge-new">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg overflow-hidden">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="text-right text-lg font-semibold">سلة التسوق</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* عناصر السلة */}
          <div className="flex-1 overflow-y-auto py-4 px-1 max-h-[50vh] cart-scrollbar">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>السلة فارغة</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="flex-1 text-right">
                      <h4 className="font-medium">{sanitizeText(item.name)}</h4>
                      <p className="text-sm text-muted-foreground">{item.price} جنيه</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
