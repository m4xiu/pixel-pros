export const siteConfig = {
  name: "PIXEL PROS",
  legalName: "Pixel Pros Photography & Films",
  tagline: "Stories Worth Remembering",
  subTagline: "Photography & Films for the moments that matter.",
  philosophy: "We don’t just take photographs. We preserve moments.",
  
  contact: {
    phone: "6380624239",
    phoneDisplay: "+91 63806 24239",
    whatsapp: "9442989740",
    whatsappDisplay: "+91 94429 89740",
    email: process.env.PIXEL_PROS_INQUIRY_EMAIL || "info@pixelpros.in",
    location: "Porancode, Kattukadai",
    serviceAreas: "Marthandam, Kanyakumari, Tamil Nadu, Kerala & Beyond",
    googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "",
  },
  
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  },
  
  seo: {
    title: "Pixel Pros — Premium Wedding & Editorial Photography in Marthandam, Tamil Nadu",
    description: "Pixel Pros is a luxury photography and videography studio in Porancode, Kattukadai. Specializing in timeless wedding photography, pre-weddings, candid couples, and cinematic films across Tamil Nadu and Kerala.",
    keywords: [
      "Photography in Marthandam",
      "Wedding Photography in Marthandam",
      "Photography in Tamil Nadu",
      "Photography in Kerala",
      "Wedding Photographer Marthandam",
      "Pre Wedding Photography Marthandam",
      "Birthday Photography Marthandam",
      "Couple Photography Marthandam",
      "Photography Porancode",
      "Pixel Pros Photography",
      "Cinematic Wedding Films Kerala",
      "Luxury South Indian Wedding Photographer"
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pixelprosphotography.com",
    ogImage: "/images/pixel-pros/hero/pixel-pros-hero-01.webp",
  }
};
