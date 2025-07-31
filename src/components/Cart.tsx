import { useState } from "react";
import { ShoppingCart, MapPin, Truck, MessageCircle, Download, X, Plus, Minus, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount, clearCart } = useCart();
  const [showOptions, setShowOptions] = useState(false);
  const [showPickupOptions, setShowPickupOptions] = useState(false);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNameError, setCustomerNameError] = useState('');
  const [customerPhoneError, setCustomerPhoneError] = useState('');

  const cartCount = getItemCount();
  const totalPrice = getTotalPrice();

  const generateInvoiceNumber = () => {
    return `TF-${Date.now().toString().slice(-8)}`;
  };

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

    const invoiceNumber = generateInvoiceNumber();
    const today = new Date();
    const date = today.toLocaleDateString('ar-EG');
    const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    // تنسيق تفاصيل المنتجات بشكل منظم
    const orderItems = items.map((item, index) => 
      `${index + 1}. ${item.name}
الكمية: ${item.quantity}
سعر الوحدة: ${item.price} ج.م
المجموع: ${item.price * item.quantity} ج.م`
    ).join('\n\n');
    
    const message = `فاتورة طلب - مكتبة تفانيين

معلومات الفاتورة:
رقم الفاتورة: ${invoiceNumber}
التاريخ: ${date}
الوقت: ${time}
طريقة الاستلام: استلام من المكتبة

معلومات العميل:
الاسم: ${customerName}
رقم الهاتف: ${customerPhone}

المنتجات المطلوبة:
${orderItems}

الإجمالي الكلي: ${totalPrice} ج.م

موقع الاستلام:
مكتبة تفانيين - 122 ز البوابة الاولي حدائق الاهرام اما اسماك بورسعيد بجوار المول القديم
أوقات الاستلام: من 10 صباحاً حتى 5 مساءً

للاستفسار: 01026274235

شكراً لثقتك بمكتبة تفانيين!`;
    
    // تجربة عدة طرق لفتح WhatsApp
    const phoneNumber = "201026274235";
    const encodedMessage = encodeURIComponent(message);
    
    // طريقة 1: محاولة فتح التطبيق مباشرة
    const whatsappApp = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // طريقة 2: استخدام الرابط العادي
    const whatsappWeb = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // طريقة 3: استخدام api.whatsapp
    const whatsappApi = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // تجربة فتح التطبيق أولاً، ثم الويب
    const tryOpenWhatsApp = () => {
      // محاولة فتح التطبيق
      window.location.href = whatsappApp;
      
      // إذا لم ينجح، فتح الويب بعد ثانية
      setTimeout(() => {
        window.open(whatsappWeb, '_blank');
      }, 1000);
    };
    
    tryOpenWhatsApp();
    
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

    const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فاتورة الطلب - مكتبة تفانيين</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Cairo', sans-serif; background: #f9f9f9; padding: 20px; }
        .invoice-container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #d9534f; padding-bottom: 20px; }
        .header img { max-width: 150px; margin-bottom: 10px; }
        .header h1 { color: #d9534f; font-size: 28px; margin-bottom: 10px; }
        .header p { color: #666; font-size: 14px; }
        .invoice-details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
        .section { background: #f2dede; padding: 20px; border-radius: 8px; }
        .section h3 { color: #d9534f; margin-bottom: 10px; font-size: 18px; }
        .info-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: right; border-bottom: 1px solid #ddd; }
        th { background: #d9534f; color: #fff; font-weight: 600; }
        .total { text-align: left; margin-top: 20px; font-size: 18px; font-weight: bold; color: #d9534f; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
        @media print { body { background: white; } .invoice-container { box-shadow: none; } }
    </style>
</head>
<body>
    <div class="invoice-container">
        <div class="header">
            <img src="/lovable-uploads/cff92227-a94e-4017-8547-5a984088ec2e.png" alt="شعار المكتبة">
            <h1>مكتبة تفانيين</h1>
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
                <div class="info-row"><span>طريقة الاستلام:</span><span>${selectedDeliveryMethod === 'pickup' ? 'استلام من المكتبة' : 'توصيل للمنزل'}</span></div>
            </div>
            
            <div class="section">
                <h3>معلومات العميل</h3>
                <div class="info-row"><span>الاسم:</span><span>${customerName || 'غير محدد'}</span></div>
                <div class="info-row"><span>الهاتف:</span><span>${customerPhone || 'غير محدد'}</span></div>
            </div>
        </div>
        
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
        
        <div class="total">
            <strong>الإجمالي الكلي: ${totalPrice} ج.م</strong>
        </div>
        
        <div class="footer">
            <p>شكراً لثقتك بمكتبة تفانيين!</p>
            <p>للاستفسار: 01026274235</p>
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

  const handleDeliveryOption = () => {
    setSelectedDeliveryMethod('delivery');
    const invoiceNumber = generateInvoiceNumber();
    const today = new Date();
    const date = today.toLocaleDateString('ar-EG');
    const time = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    // تنسيق تفاصيل المنتجات بشكل منظم
    const orderItems = items.map((item, index) => 
      `${index + 1}. *${item.name}*
   • الكمية: ${item.quantity}
   • سعر الوحدة: ${item.price} ج.م
   • المجموع: ${item.price * item.quantity} ج.م`
    ).join('\n\n');
    
    const message = `📋 *فاتورة طلب - مكتبة تفانيين*
━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *معلومات الفاتورة*
• رقم الفاتورة: ${invoiceNumber}
• التاريخ: ${date}
• الوقت: ${time}
• طريقة الاستلام: توصيل للمنزل

🛒 *المنتجات المطلوبة*
━━━━━━━━━━━━━━━━━━━━━━━━━━
${orderItems}
━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 *الإجمالي الكلي: ${totalPrice} ج.م*

🚚 *خدمة التوصيل*
متوفرة داخل مدينة المنصورة
📱 يرجى إرسال العنوان التفصيلي ووقت التوصيل المناسب

📞 *للاستفسار*: 01026274235

شكراً لثقتك بمكتبة تفانيين! 🙏`;
    
    // استخدام طريقة مجانية لفتح واتساب
    const whatsappUrl = `https://wa.me/201026274235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال طلب التوصيل",
      description: "تم فتح واتساب لإرسال تفاصيل الفاتورة",
    });
    
    // إعادة تعيين الحالة بعد الإرسال
    setShowOptions(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-right">سلة التسوق</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
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
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>الإجمالي: {totalPrice} جنيه</span>
              </div>
              
              {/* Main Options */}
              {!showOptions && !showPickupOptions && (
                <div className="space-y-2">
                  <Button 
                    className="w-full btn-tafaneen"
                    onClick={() => setShowOptions(true)}
                  >
                    إتمام الطلب
                  </Button>
                </div>
              )}
              
              {/* Delivery/Pickup Options */}
              {showOptions && !showPickupOptions && (
                <div className="space-y-2">
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
                    توصيل
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setShowOptions(false);
                    }}
                  >
                    <X className="h-4 w-4 ml-2" />
                    رجوع
                  </Button>
                </div>
              )}
              
              {/* Pickup Sub-options */}
              {showPickupOptions && (
                <div className="space-y-4">
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
                        onChange={(e) => {
                          setCustomerPhone(e.target.value);
                          setCustomerPhoneError(e.target.value ? '' : 'يرجى إدخال رقم الهاتف');
                        }}
                        placeholder="أدخل رقم الهاتف"
                        className="text-right"
                      />
                      {customerPhoneError && <p className="text-destructive text-sm mt-1 text-right">{customerPhoneError}</p>}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    style={{ backgroundColor: '#25D366', color: 'white' }}
                    onClick={handleWhatsAppNotification}
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
