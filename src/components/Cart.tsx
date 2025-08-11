
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
  const subtotal = totalPrice + (showDeliveryCheckout ? deliveryFee : 0);
  const surcharge = showDeliveryCheckout && paymentMethod === 'vodafone' ? Math.round(subtotal * 0.01) : 0;
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

  // التحقق من صحة رقم الهاتف
  const handlePhoneChange = (value: string) => {
    setCustomerPhone(value);
    setCustomerPhoneError('');
    
    if (value.trim()) {
      const validation = validateEgyptianPhone(value);
      if (!validation.isValid) {
        setCustomerPhoneError(validation.errorMessage || "رقم الهاتف غير صحيح");
      }
    }
  };

  // إنشاء رقم فاتورة
  const generateInvoiceNumber = () => {
    return `TF-${Date.now().toString().slice(-8)}`;
  };

  // معالجة إشعار واتساب للاستلام من المكتبة
  const handleWhatsAppNotification = () => {
    // التحقق من إدخال معلومات العميل
    if (!customerName) {
      setCustomerNameError('يرجى إدخال اسم العميل');
      return;
    }
    if (!customerPhone) {
      setCustomerPhoneError('يرجى إدخال رقم الهاتف');
      return;
    }

    // التحقق من صحة رقم الهاتف المصري
    const phoneValidation = validateEgyptianPhone(customerPhone);
    if (!phoneValidation.isValid) {
      setCustomerPhoneError(phoneValidation.errorMessage || "يرجى إدخال رقم هاتف مصري صحيح");
      return;
    }
    
    const invoiceNumber = generateInvoiceNumber();
    const today = new Date();
    const date = today.toLocaleDateString('ar-EG');
    const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    // تنسيق تفاصيل المنتجات بشكل منظم
    const orderItems = items.map((item, index) => 
      `${index + 1}. ${item.name}\nالكمية: ${item.quantity}\nسعر الوحدة: ${item.price} ج.م\nالمجموع: ${item.price * item.quantity} ج.م`
    ).join('\n\n');
    
    const formattedPhone = formatEgyptianPhone(customerPhone);
    
    const message = `فاتورة طلب - مكتبة تفانين

معلومات الفاتورة:
رقم الفاتورة: ${invoiceNumber}
التاريخ: ${date}
الوقت: ${time}
طريقة الاستلام: استلام من المكتبة

معلومات العميل:
الاسم: ${customerName}
رقم الهاتف: ${formattedPhone}

المنتجات المطلوبة:
${orderItems}

الإجمالي الكلي: ${totalPrice} ج.م

موقع الاستلام:
مكتبة تفانين - 122 ز البوابة الاولي حدائق الاهرام اما اسماك بورسعيد بجوار المول القديم
أوقات الاستلام: من 10 صباحاً حتى 5 مساءً

للاستفسار: 01026274235

شكراً لثقتك بمكتبة تفانين!`;
    
    // فتح واتساب
    const phoneNumber = "201026274235";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال الإشعار",
      description: "تم فتح واتساب لإرسال تفاصيل الفاتورة",
    });

    // إعادة تعيين حقول العميل بعد الإرسال
    setCustomerName("");
    setCustomerPhone("");
    setShowPickupOptions(false);
    setShowOptions(false);
  };

  // إنشاء فاتورة HTML
  const generateHTMLInvoice = () => {
    if (items.length === 0) {
      toast({
        title: "السلة فارغة",
        description: "يرجى إضافة منتجات للسلة أولاً",
        variant: "destructive",
      });
      return;
    }

    const invoiceNumber = generateInvoiceNumber();
    const today = new Date();
    const date = today.toLocaleDateString('ar-EG');
    const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

    // تحديد نوع الخدمة والتكلفة
    const serviceType = selectedDeliveryMethod === 'pickup' ? 'استلام من المكتبة' : 'توصيل للمنزل';
    const deliveryCost = selectedDeliveryMethod === 'pickup' ? 0 : deliveryFee;
    const paymentMethodText = paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 
                             paymentMethod === 'vodafone' ? 'فودافون كاش' : 'إنستاباي';

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
                <div class="info-row"><span>الاسم:</span><span>${customerName || 'غير محدد'}</span></div>
                <div class="info-row"><span>الهاتف:</span><span>${customerPhone || 'غير محدد'}</span></div>
            </div>
        </div>
        
        ${selectedDeliveryMethod === 'delivery' ? `
        <div class="address-section">
            <h3 style="color: #d9534f; margin-bottom: 10px;">عنوان التوصيل</h3>
            <p><strong>المنطقة:</strong> ${areaName}</p>
            <p><strong>رقم الشقة:</strong> ${apartmentNumber}</p>
            <p><strong>رقم العمارة:</strong> ${buildingNumber}</p>
            <p><strong>الدور:</strong> ${floor}</p>
            <p><strong>المنطقة/البوابة:</strong> ${area}</p>
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
                ${items.map(item => `
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
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `فاتورة-${invoiceNumber}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "تم تحميل الفاتورة",
      description: "تم تحميل الفاتورة بتنسيق HTML بنجاح",
    });
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
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.price} جنيه</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* التذييل */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* الإجمالي */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>الإجمالي: {showDeliveryCheckout ? finalTotal : totalPrice} جنيه</span>
              </div>
              
              {/* الخيارات الرئيسية */}
              {!showOptions && !showPickupOptions && !showDeliveryCheckout && (
                <div className="space-y-2">
                  <Button 
                    className="w-full btn-tafaneen"
                    onClick={() => setShowOptions(true)}
                  >
                    إتمام الطلب
                  </Button>
                </div>
              )}
              
              {/* خيارات التوصيل/الاستلام */}
              {showOptions && !showPickupOptions && !showDeliveryCheckout && (
                <div className="space-y-2 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2 cart-scrollbar">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">اختر طريقة الاستلام</h3>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={() => {
                      setSelectedDeliveryMethod('pickup');
                      setShowPickupOptions(true);
                    }}
                  >
                    <MapPin className="h-4 w-4" />
                    استلام من المكتبة
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={handleDeliveryOption}
                  >
                    <Truck className="h-4 w-4" />
                    توصيل للمنزل
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowOptions(false)}
                  >
                    <X className="h-4 w-4 ml-2" />
                    رجوع
                  </Button>
                </div>
              )}
              
              {/* نموذج التوصيل */}
              {showDeliveryCheckout && (
                <div className="space-y-4 max-h-96 overflow-y-auto cart-scrollbar pr-2">
                  <div className="text-center mb-2">
                    <h3 className="text-lg font-semibold">معلومات التوصيل</h3>
                    <p className="text-sm text-muted-foreground">أدخل بياناتك ثم اختر طريقة الدفع</p>
                  </div>

                  {/* البيانات الشخصية */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-right">الاسم *</label>
                      <Input
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          setCustomerNameError(e.target.value ? '' : 'يرجى إدخال اسم العميل');
                        }}
                        placeholder="أدخل اسم العميل"
                        className="text-right"
                        required
                      />
                      {customerNameError && <p className="text-destructive text-sm mt-1 text-right">{customerNameError}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-right">رقم الهاتف *</label>
                      <Input
                        value={customerPhone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="010xxxxxxxx أو +20 10xxxxxxxx"
                        className={`text-right ${customerPhoneError ? 'border-destructive' : ''}`}
                        dir="ltr"
                        required
                      />
                      {customerPhoneError && <p className="text-destructive text-sm mt-1 text-right">{customerPhoneError}</p>}
                    </div>

                    {/* العنوان */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-right">اسم المنطقة *</label>
                      <Input 
                        value={areaName} 
                        onChange={(e) => setAreaName(e.target.value)} 
                        placeholder="اسم المنطقة" 
                        className="text-right" 
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-right">رقم الشقة *</label>
                      <Input 
                        value={apartmentNumber} 
                        onChange={(e) => setApartmentNumber(e.target.value)} 
                        placeholder="رقم الشقة" 
                        className="text-right" 
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-right">رقم العمارة *</label>
                        <Input 
                          value={buildingNumber} 
                          onChange={(e) => setBuildingNumber(e.target.value)} 
                          placeholder="مثال: 12" 
                          className="text-right" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-right">الدور *</label>
                        <Input 
                          value={floor} 
                          onChange={(e) => setFloor(e.target.value)} 
                          placeholder="مثال: 3" 
                          className="text-right" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-right">اختيار المنطقة / البوابة *</label>
                      <select 
                        value={area} 
                        onChange={(e) => setArea(e.target.value)} 
                        className="w-full border rounded-md p-2 text-right bg-background"
                        required
                      >
                        <option value="" disabled>اختر المنطقة</option>
                        {AREA_OPTIONS.map(opt => (
                          <option key={opt.label} value={opt.label}>
                            {opt.label} - رسوم توصيل {opt.fee} ج
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-muted-foreground mt-1 text-right">
                        رسوم التوصيل الحالية: {deliveryFee} ج
                      </p>
                    </div>
                  </div>

                  {/* طريقة الدفع أو تذكير */}
                  {!canProceed ? (
                    <div className="rounded-md border border-dashed p-3 text-right text-sm text-muted-foreground">
                      يرجى إدخال جميع البيانات المطلوبة بالأعلى (الاسم، الهاتف، العنوان، المنطقة/البوابة) لإظهار طرق الدفع ورابط/رمز الدفع.
                    </div>
                  ) : (
                    <>
                      {/* طريقة الدفع */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-right">طريقة الدفع</h4>
                        <div className="grid grid-cols-1 gap-2">
                          <Button 
                            variant={paymentMethod === 'cod' ? 'default' : 'outline'} 
                            onClick={() => setPaymentMethod('cod')}
                            className="text-sm"
                          >
                            الدفع عند الاستلام
                          </Button>
                          <Button 
                            variant={paymentMethod === 'vodafone' ? 'default' : 'outline'} 
                            onClick={() => setPaymentMethod('vodafone')}
                            className="text-sm"
                          >
                            فودافون كاش (+1%)
                          </Button>
                          <Button 
                            variant={paymentMethod === 'instapay' ? 'default' : 'outline'} 
                            onClick={() => setPaymentMethod('instapay')}
                            className="text-sm"
                          >
                            إنستا باي
                          </Button>
                        </div>
                        
                        {/* روابط ورموز الدفع الإلكتروني */}
                        {paymentMethod !== 'cod' && (
                          <div className="mt-3 space-y-2 text-center">
                            <Button 
                              className="btn-tafaneen w-full" 
                              onClick={() => {
                                const link = paymentMethod === 'vodafone' 
                                  ? 'http://vf.eg/vfcash?id=mt&qrId=E9kZZk&qrString=ac04f93ecff3b89619c576f2fa4436a0872aca3a6ccdfb5a8f6ef3a6b92ebeb7'
                                  : 'https://ipn.eg/C/Q/mosaadhosny7890/instapay?ISIGN=23052603MEUCIQC/ACli2Pcxq8/e/to1eqMfNxYCj4wQd8l/o2KSJTg1LwIgScy/K3IM2HEEei0Zkzqru9bBWjuFwgsbjHL1q0iffKA=';
                                window.open(link, '_blank');
                              }}
                            >
                              الانتقال إلى الدفع
                            </Button>
                            <div className="flex flex-col items-center gap-2">
                              <QRCode 
                                value={paymentMethod === 'vodafone' 
                                  ? 'http://vf.eg/vfcash?id=mt&qrId=E9kZZk&qrString=ac04f93ecff3b89619c576f2fa4436a0872aca3a6ccdfb5a8f6ef3a6b92ebeb7'
                                  : 'https://ipn.eg/C/Q/mosaadhosny7890/instapay?ISIGN=23052603MEUCIQC/ACli2Pcxq8/e/to1eqMfNxYCj4wQd8l/o2KSJTg1LwIgScy/K3IM2HEEei0Zkzqru9bBWjuFwgsbjHL1q0iffKA='
                                } 
                                size={128} 
                              />
                              <p className="text-xs text-muted-foreground">يمكنك المسح للدفع مباشرة</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ملخص الحساب */}
                      <div className="space-y-1 text-right">
                        <div className="flex justify-between"><span>مجموع المنتجات</span><span>{totalPrice} ج</span></div>
                        <div className="flex justify-between"><span>رسوم التوصيل</span><span>{deliveryFee} ج</span></div>
                        {paymentMethod === 'vodafone' && (
                          <div className="flex justify-between"><span>+ 1% رسوم فودافون كاش</span><span>{surcharge} ج</span></div>
                        )}
                        <div className="flex justify-between font-semibold"><span>الإجمالي النهائي</span><span>{finalTotal} ج</span></div>
                      </div>

                      {/* الإجراءات */}
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full flex items-center gap-2"
                          style={{ backgroundColor: '#25D366', color: 'white' }}
                          onClick={() => {
                            // إرسال واتساب مع التفاصيل الكاملة
                            const invoiceNumber = generateInvoiceNumber();
                            const today = new Date();
                            const date = today.toLocaleDateString('ar-EG');
                            const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
                            const orderItems = items.map((item, index) => `${index + 1}. ${item.name}\nالكمية: ${item.quantity}\nسعر الوحدة: ${item.price} ج.م\nالمجموع: ${item.price * item.quantity} ج.م`).join('\n\n');
                            const payLabel = paymentMethod === 'cod' ? 'الدفع عند الاستلام' : paymentMethod === 'vodafone' ? 'فودافون كاش' : 'إنستا باي';
                            const payLink = paymentMethod === 'vodafone'
                              ? 'http://vf.eg/vfcash?id=mt&qrId=E9kZZk&qrString=ac04f93ecff3b89619c576f2fa4436a0872aca3a6ccdfb5a8f6ef3a6b92ebeb7'
                              : paymentMethod === 'instapay'
                              ? 'https://ipn.eg/C/Q/mosaadhosny7890/instapay?ISIGN=23052603MEUCIQC/ACli2Pcxq8/e/to1eqMfNxYCj4wQd8l/o2KSJTg1LwIgScy/K3IM2HEEei0Zkzqru9bBWjuFwgsbjHL1q0iffKA='
                              : '';
                            const message = `فاتورة طلب - مكتبة تفانين\n\nمعلومات الفاتورة:\nرقم الفاتورة: ${invoiceNumber}\nالتاريخ: ${date}\nالوقت: ${time}\nطريقة الاستلام: توصيل للمنزل\n\nمعلومات العميل:\nالاسم: ${customerName}\nرقم الهاتف: ${formatEgyptianPhone(customerPhone)}\nالعنوان: ${areaName}, عمارة ${buildingNumber}, شقة ${apartmentNumber}, الدور ${floor}\nالمنطقة/البوابة: ${area}\n\nالمنتجات المطلوبة:\n${orderItems}\n\nرسوم التوصيل: ${deliveryFee} ج.م\n${paymentMethod === 'vodafone' ? 'رسوم فودافون كاش (1%): ' + surcharge + ' ج.م\n' : ''}الإجمالي النهائي: ${finalTotal} ج.م\n\nطريقة الدفع: ${payLabel}${payLink ? '\nرابط الدفع: ' + payLink : ''}\n\nللاستفسار: 01026274235`;
                            const phoneNumber = '201026274235';
                            const whatsappWeb = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                            window.open(whatsappWeb, '_blank');
                          }}
                        >
                          <MessageCircle className="h-4 w-4" />
                          إرسال الإشعار إلى المكتبة
                        </Button>

                        <Button variant="outline" className="w-full flex items-center gap-2" onClick={generateHTMLInvoice}>
                          <FileText className="h-4 w-4" />
                          تنزيل الفاتورة (HTML)
                        </Button>

                        <Button variant="ghost" className="w-full" onClick={() => setShowDeliveryCheckout(false)}>
                          <X className="h-4 w-4 ml-2" />
                          رجوع
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* خيارات الاستلام الفرعية */}
              {showPickupOptions && (
                <div className="space-y-4 max-h-80 overflow-y-auto cart-scrollbar pr-2">
                  <div className="text-center mb-2">
                    <h3 className="text-lg font-semibold">معلومات العميل</h3>
                    <p className="text-sm text-muted-foreground">يرجى إدخال بياناتك لإتمام الطلب</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-medium mb-1 text-right">الاسم</label>
                      <Input
                        id="customerName"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          setCustomerNameError(e.target.value ? '' : 'يرجى إدخال اسم العميل');
                        }}
                        placeholder="أدخل اسم العميل"
                        className="text-right"
                      />
                      {customerNameError && <p className="text-destructive text-sm mt-1 text-right">{customerNameError}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="customerPhone" className="block text-sm font-medium mb-1 text-right">رقم الهاتف</label>
                      <Input
                        id="customerPhone"
                        value={customerPhone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="010xxxxxxxx أو +20 10xxxxxxxx"
                        className={`text-right ${customerPhoneError ? 'border-destructive' : ''}`}
                        dir="ltr"
                      />
                      {customerPhoneError && <p className="text-destructive text-sm mt-1 text-right">{customerPhoneError}</p>}
                      <p className="text-xs text-muted-foreground text-right mt-1">
                        رقم هاتف مصري صحيح (موبايل أو أرضي)
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    style={{ backgroundColor: '#25D366', color: 'white' }}
                    onClick={handleWhatsAppNotification}
                    disabled={!!customerPhoneError}
                  >
                    <MessageCircle className="h-4 w-4" />
                    إرسال الإشعار عبر واتساب
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    style={{ backgroundColor: '#2c6ea5', color: 'white' }}
                    onClick={generateHTMLInvoice}
                  >
                    <FileText className="h-4 w-4" />
                    تنزيل الفاتورة
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowPickupOptions(false)}
                  >
                    <X className="h-4 w-4 ml-2" />
                    رجوع
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
