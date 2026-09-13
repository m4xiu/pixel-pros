export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guests?: string;
  requiredService: string;
  budget?: string;
  message?: string;
}

export const WHATSAPP_NUMBER = "9442989740";

/**
 * Builds a clean, beautifully formatted WhatsApp enquiry message and returns the safe click-to-chat URL.
 */
export function buildWhatsAppUrl(data: EnquiryFormData): string {
  const parts: string[] = [];
  
  parts.push("✨ *New Enquiry for Pixel Pros* ✨\n");
  parts.push("Hello Pixel Pros, I would like to enquire about your photography and videography services.\n");
  
  parts.push(`👤 *Name:* ${data.name.trim()}`);
  parts.push(`📞 *Phone:* ${data.phone.trim()}`);
  if (data.email?.trim()) {
    parts.push(`✉️ *Email:* ${data.email.trim()}`);
  }
  
  parts.push(`🎉 *Event Type:* ${data.eventType}`);
  parts.push(`📅 *Event Date:* ${data.eventDate}`);
  parts.push(`📍 *Location:* ${data.eventLocation.trim()}`);
  
  if (data.guests?.trim()) {
    parts.push(`👥 *Estimated Guests:* ${data.guests.trim()}`);
  }
  
  parts.push(`📷 *Required Service:* ${data.requiredService}`);
  
  if (data.budget?.trim()) {
    parts.push(`💰 *Budget Range:* ${data.budget}`);
  }
  
  if (data.message?.trim()) {
    parts.push(`\n📝 *Additional Notes / Vision:*\n${data.message.trim()}`);
  }
  
  parts.push("\nLooking forward to hearing from your team. Thank you!");

  const rawText = parts.join("\n");
  const encodedText = encodeURIComponent(rawText);
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Generates a quick direct chat link for the floating button or instant action CTAs.
 */
export function getQuickWhatsAppUrl(customGreeting?: string): string {
  const text = customGreeting || "Hello Pixel Pros! I would like to enquire about your photography services and check date availability.";
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
