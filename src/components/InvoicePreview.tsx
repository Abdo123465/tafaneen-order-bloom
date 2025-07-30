import React from 'react';
import { EnhancedInvoiceData } from '@/utils/enhancedPdfGenerator';
import { toArabicNumbers, formatArabicDate, formatArabicTime, formatCurrency } from '@/utils/arabicNumbers';

interface InvoicePreviewProps {
  data: EnhancedInvoiceData;
}

export function InvoicePreview({ data }: InvoicePreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg" dir="rtl">
      {/* الترويسة */}
      <div className="bg-gradient-to-r from-[#2c6ea5] to-[#173752] text-white p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">مكتبة تفانين</h1>
        <p className="text-lg opacity-90">للأدوات المكتبية والقرطاسية</p>
        <div className="w-full h-0.5 bg-white/30 mt-4"></div>
      </div>

      {/* معلومات الفاتورة */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-[#173752] mb-6">فاتورة إلكترونية</h2>
        
        <div className="bg-[#eaf2f8] border border-[#c1d5e5] rounded-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-bold text-[#173752]">رقم الفاتورة:</span>
              <span className="mr-2">{toArabicNumbers(data.invoiceNumber)}</span>
            </div>
            <div>
              <span className="font-bold text-[#173752]">التاريخ:</span>
              <span className="mr-2">{formatArabicDate(data.date)}</span>
            </div>
            <div>
              <span className="font-bold text-[#173752]">الوقت:</span>
              <span className="mr-2">{formatArabicTime(data.date)}</span>
            </div>
          </div>
        </div>

        {/* بيانات العميل */}
        {data.customerName && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#173752] mb-2">بيانات العميل:</h3>
            <div className="text-sm">
              <p><span className="font-medium">الاسم:</span> {data.customerName}</p>
              {data.customerPhone && (
                <p><span className="font-medium">رقم الهاتف:</span> {data.customerPhone}</p>
              )}
            </div>
          </div>
        )}

        {/* جدول المنتجات */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#173752] mb-4">تفاصيل الطلب:</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#173752] text-white">
                  <th className="border border-[#c1d5e5] p-3 text-center">المنتج</th>
                  <th className="border border-[#c1d5e5] p-3 text-center w-20">الكمية</th>
                  <th className="border border-[#c1d5e5] p-3 text-center w-24">سعر الوحدة</th>
                  <th className="border border-[#c1d5e5] p-3 text-center w-24">الإجمالي</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-[#c1d5e5] p-3">{item.name}</td>
                    <td className="border border-[#c1d5e5] p-3 text-center">{toArabicNumbers(item.quantity)}</td>
                    <td className="border border-[#c1d5e5] p-3 text-center">{formatCurrency(item.price)}</td>
                    <td className="border border-[#c1d5e5] p-3 text-center font-medium">{formatCurrency(item.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ملخص الحساب */}
        <div className="flex justify-end mb-6">
          <div className="bg-[#eaf2f8] border border-[#c1d5e5] rounded-lg p-4 w-80">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">المجموع الفرعي:</span>
                <span>{formatCurrency(data.subtotal || data.totalPrice)}</span>
              </div>
              
              {data.discount && data.discount > 0 && (
                <div className="flex justify-between text-[#0e8a3e]">
                  <span className="font-medium">الخصم:</span>
                  <span>-{formatCurrency(data.discount)}</span>
                </div>
              )}
              
              {data.tax && data.tax > 0 && (
                <div className="flex justify-between">
                  <span className="font-medium">الضريبة:</span>
                  <span>{formatCurrency(data.tax)}</span>
                </div>
              )}
              
              <div className="border-t border-[#173752] pt-2">
                <div className="flex justify-between text-lg font-bold text-[#173752]">
                  <span>المجموع النهائي:</span>
                  <span>{formatCurrency(data.totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* معلومات الاستلام */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#173752] mb-2">
            {data.deliveryMethod === 'pickup' ? 'معلومات الاستلام:' : 'معلومات التوصيل:'}
          </h3>
          
          {data.deliveryMethod === 'pickup' ? (
            <div className="text-sm space-y-1">
              <p>• العنوان: مكتبة تفانين - شارع الجامعة الرئيسي</p>
              <p>• ساعات العمل: من ٩:٠٠ صباحاً إلى ٩:٠٠ مساءً</p>
              <p>• أيام العمل: السبت إلى الخميس</p>
              <p>• يرجى إحضار هذه الفاتورة عند الاستلام</p>
            </div>
          ) : (
            <div className="text-sm space-y-1">
              <p>• سيتم التواصل معكم لتحديد موعد التوصيل</p>
              <p>• رسوم التوصيل: مجاني للطلبات أكثر من ١٠٠ جنيه</p>
            </div>
          )}
        </div>

        {/* التذييل */}
        <div className="border-t border-[#c1d5e5] pt-4">
          <div className="bg-[#eaf2f8] rounded-lg p-4 text-center">
            <h4 className="text-lg font-bold text-[#173752] mb-2">شكراً لتسوقكم معنا!</h4>
            <p className="text-sm text-[#173752]">للاستفسارات: ٠١٠٢٦٢٧٤٢٣٥</p>
            <p className="text-sm text-[#173752]">مكتبة تفانين - جودة وثقة منذ سنوات</p>
          </div>
        </div>
      </div>
    </div>
  );
}