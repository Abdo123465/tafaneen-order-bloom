export interface WhatsAppSubscriber {
  id: string;
  phone: string;
  created_at: string;
  active: boolean;
}

export interface NewProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category: string;
  created_at: string;
}

export interface WhatsAppNotificationRequest {
  phone: string;
  message: string;
}

export interface WhatsAppNotificationResponse {
  success: boolean;
  message_id?: string;
  error?: string;
}

export interface NewProductsNotificationRequest {
  phone: string;
  products: NewProduct[];
}

export interface SubscriptionFormData {
  phone: string;
}
