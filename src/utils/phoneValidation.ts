/**
 * Egyptian Phone Number Validation Utility
 * Supports Egyptian mobile and landline numbers in various formats
 */

export interface PhoneValidationResult {
  isValid: boolean;
  errorMessage?: string;
  formattedNumber?: string;
  type?: 'mobile' | 'landline';
}

/**
 * Validates Egyptian phone numbers
 * @param phone - The phone number to validate
 * @returns PhoneValidationResult object with validation details
 */
export function validateEgyptianPhone(phone: string): PhoneValidationResult {
  if (!phone || typeof phone !== 'string') {
    return {
      isValid: false,
      errorMessage: 'يرجى إدخال رقم الهاتف'
    };
  }

  // Remove all spaces, dashes, and parentheses
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Check for international format (+20)
  if (cleanPhone.startsWith('+20')) {
    const localNumber = cleanPhone.substring(3);
    return validateLocalEgyptianNumber(localNumber, cleanPhone);
  }

  // Check for country code without plus (0020)
  if (cleanPhone.startsWith('0020')) {
    const localNumber = cleanPhone.substring(4);
    return validateLocalEgyptianNumber(localNumber, cleanPhone);
  }

  // Check for country code without leading zeros (20)
  if (cleanPhone.startsWith('20') && cleanPhone.length >= 12) {
    const localNumber = cleanPhone.substring(2);
    return validateLocalEgyptianNumber(localNumber, cleanPhone);
  }

  // Validate as local Egyptian number
  return validateLocalEgyptianNumber(cleanPhone, cleanPhone);
}

/**
 * Validates local Egyptian phone numbers (without country code)
 * @param localNumber - The local phone number
 * @param originalNumber - The original input for formatting
 * @returns PhoneValidationResult object
 */
function validateLocalEgyptianNumber(localNumber: string, originalNumber: string): PhoneValidationResult {
  // Mobile numbers validation
  if (isMobileNumber(localNumber)) {
    return {
      isValid: true,
      formattedNumber: formatEgyptianPhone(originalNumber),
      type: 'mobile'
    };
  }

  // Landline numbers validation
  if (isLandlineNumber(localNumber)) {
    return {
      isValid: true,
      formattedNumber: formatEgyptianPhone(originalNumber),
      type: 'landline'
    };
  }

  return {
    isValid: false,
    errorMessage: 'رقم الهاتف المصري غير صحيح. يرجى إدخال رقم صحيح يبدأ بـ 010، 011، 012، 015 للموبايل أو رقم أرضي صحيح'
  };
}

/**
 * Checks if the number is a valid Egyptian mobile number
 * @param number - The phone number to check
 * @returns boolean indicating if it's a valid mobile number
 */
function isMobileNumber(number: string): boolean {
  // Egyptian mobile numbers: 010, 011, 012, 015 followed by 8 digits
  const mobilePattern = /^(010|011|012|015)\d{8}$/;
  return mobilePattern.test(number);
}

/**
 * Checks if the number is a valid Egyptian landline number
 * @param number - The phone number to check
 * @returns boolean indicating if it's a valid landline number
 */
function isLandlineNumber(number: string): boolean {
  // Egyptian landline patterns:
  // Cairo: 02 + 8 digits
  // Alexandria: 03 + 7 digits
  // Other governorates: 04x, 05x, 06x, 08x, 09x + 6-7 digits
  const landlinePatterns = [
    /^02\d{8}$/, // Cairo
    /^03\d{7}$/, // Alexandria
    /^04[0-9]\d{6,7}$/, // Various governorates
    /^05[0-9]\d{6,7}$/, // Various governorates
    /^06[0-9]\d{6,7}$/, // Various governorates
    /^08[0-9]\d{6,7}$/, // Various governorates
    /^09[0-9]\d{6,7}$/, // Various governorates
  ];

  return landlinePatterns.some(pattern => pattern.test(number));
}

/**
 * Formats Egyptian phone number for display
 * @param phone - The phone number to format
 * @returns Formatted phone number string
 */
export function formatEgyptianPhone(phone: string): string {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Handle international format
  if (cleanPhone.startsWith('+20')) {
    const localNumber = cleanPhone.substring(3);
    if (isMobileNumber(localNumber)) {
      return `+20 ${localNumber.substring(0, 3)} ${localNumber.substring(3, 6)} ${localNumber.substring(6)}`;
    }
    return `+20 ${localNumber}`;
  }

  // Handle local mobile numbers
  if (isMobileNumber(cleanPhone)) {
    return `${cleanPhone.substring(0, 3)} ${cleanPhone.substring(3, 6)} ${cleanPhone.substring(6)}`;
  }

  // Return as-is for other formats
  return cleanPhone;
}

/**
 * Normalizes Egyptian phone number to a standard format for storage
 * @param phone - The phone number to normalize
 * @returns Normalized phone number (with +20 prefix)
 */
export function normalizeEgyptianPhone(phone: string): string {
  const validation = validateEgyptianPhone(phone);
  if (!validation.isValid) {
    return phone; // Return original if invalid
  }

  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Already has international format
  if (cleanPhone.startsWith('+20')) {
    return cleanPhone;
  }

  // Add country code
  if (cleanPhone.startsWith('0020')) {
    return '+' + cleanPhone.substring(2);
  }

  if (cleanPhone.startsWith('20')) {
    return '+' + cleanPhone;
  }

  // Local number - add +20
  return '+20' + cleanPhone;
}