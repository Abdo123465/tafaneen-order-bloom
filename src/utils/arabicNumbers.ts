// تحويل الأرقام الإنجليزية إلى العربية
export function toArabicNumbers(num: string | number): string {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = num.toString();
  for (let i = 0; i < englishNumbers.length; i++) {
    result = result.replace(new RegExp(englishNumbers[i], 'g'), arabicNumbers[i]);
  }
  return result;
}

// تنسيق التاريخ بالعربية
export function formatArabicDate(date: Date): string {
  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  
  const day = toArabicNumbers(date.getDate());
  const month = months[date.getMonth()];
  const year = toArabicNumbers(date.getFullYear());
  
  return `${day} ${month} ${year}`;
}

// تنسيق الوقت بالعربية
export function formatArabicTime(date: Date): string {
  const hours = toArabicNumbers(date.getHours().toString().padStart(2, '0'));
  const minutes = toArabicNumbers(date.getMinutes().toString().padStart(2, '0'));
  return `${hours}:${minutes}`;
}

// تنسيق الأرقام للعملة
export function formatCurrency(amount: number): string {
  return `${toArabicNumbers(amount.toFixed(2))} ج.م`;
}