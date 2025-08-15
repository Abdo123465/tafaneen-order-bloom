// خدمة WhatsApp المجانية باستخدام wa.me links
export class WhatsAppService {
  private static formatPhoneNumber(phone: string): string {
    // إزالة أي رموز غير رقمية
    let cleaned = phone.replace(/\D/g, '');
    
    // إضافة كود مصر إذا لم يكن موجوداً
    if (cleaned.startsWith('01')) {
      cleaned = '20' + cleaned;
    } else if (!cleaned.startsWith('20')) {
      cleaned = '20' + cleaned;
    }
    
    return cleaned;
  }

  static formatProductMessage(products: any[]): string {
    const header = `🛍️ *منتجات جديدة في متجر تفانين!*\n\n`;
    
    const productsList = products.map((product, index) => {
      return `${index + 1}. *${product.name}*\n` +
             `💰 ${product.price} جنيه\n` +
             `📝 ${product.description || 'لا يوجد وصف'}\n` +
             `🔗 رابط المنتج: ${window.location.origin}/product/${product.id}\n`;
    }).join('\n');

    const footer = `\n📞 للطلب أو الاستفسار:\n` +
                  `واتساب: wa.me/201026274235\n` +
                  `📱 اتصال: 01026274235\n\n` +
                  `🚚 التوصيل متاح لجميع أنحاء الجمهورية\n` +
                  `💳 الدفع: كاش عند الاستلام\n\n` +
                  `متجر تفانين - للكتب والقرطاسية 📚`;

    return header + productsList + footer;
  }

  static async sendNotificationToSubscriber(phone: string, message: string): Promise<boolean> {
    try {
      const formattedPhone = this.formatPhoneNumber(phone);
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
      
      // فتح رابط WhatsApp في نافذة جديدة
      // هذا سيتطلب تدخل يدوي من المشرف لإرسال الرسالة
      window.open(whatsappUrl, '_blank');
      
      return true;
    } catch (error) {
      console.error('Error creating WhatsApp link:', error);
      return false;
    }
  }

  static async sendBulkNotifications(subscribers: string[], message: string): Promise<void> {
    // إنشاء رسالة واحدة تحتوي على جميع الأرقام
    const phoneList = subscribers.map(phone => this.formatPhoneNumber(phone));
    
    // إنشاء ملف نصي يحتوي على الرسالة وقائمة الأرقام
    const content = `الرسالة المطلوب إرسالها:\n\n${message}\n\n` +
                   `قائمة الأرقام (${phoneList.length} رقم):\n` +
                   phoneList.map((phone, index) => 
                     `${index + 1}. https://wa.me/${phone}?text=${encodeURIComponent(message)}`
                   ).join('\n');

    // إنشاء وتحميل الملف
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `whatsapp-notifications-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(`تم إنشاء ملف يحتوي على ${subscribers.length} رابط واتساب`);
  }
}
