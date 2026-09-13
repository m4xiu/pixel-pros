export interface FAQItem {
  question: string;
  answer: string;
  category?: "Booking & Logistics" | "Deliverables & Albums" | "Services & Coverage";
}

export const faqData: FAQItem[] = [
  {
    category: "Booking & Logistics",
    question: "Do you travel for events?",
    answer: "Yes, Pixel Pros travels for events across Marthandam, Tamil Nadu, Kerala, and other destinations depending on schedule and availability. Travel and accommodation arrangements are coordinated during the consultation.",
  },
  {
    category: "Booking & Logistics",
    question: "How early should I book?",
    answer: "We recommend booking as early as possible — typically 2 to 6 months in advance for weddings and peak auspicious dates, to ensure our core team is exclusively reserved for your celebration.",
  },
  {
    category: "Booking & Logistics",
    question: "Do you require advance payment?",
    answer: "Yes, an advance booking deposit is required to confirm and lock your event date on our calendar. The remaining balance is handled according to the agreed milestones.",
  },
  {
    category: "Booking & Logistics",
    question: "What happens if my event date changes?",
    answer: "Please contact the Pixel Pros team as early as possible. Date changes are accommodated based on our calendar availability and the agreed booking terms.",
  },
  {
    category: "Deliverables & Albums",
    question: "Do you provide edited photographs?",
    answer: "Yes, every photograph delivered in your final collection undergoes individual color grading, tonal correction, and signature Pixel Pros artistic polish.",
  },
  {
    category: "Deliverables & Albums",
    question: "How long does delivery take?",
    answer: "We share a sneak-peek highlights gallery shortly after your event. Your full, high-resolution collection and edited photographs are generally delivered within approximately 3 weeks. Handcrafted printed albums take a few additional weeks for printing and binding.",
  },
  {
    category: "Deliverables & Albums",
    question: "Do you provide albums?",
    answer: "Yes, we design and produce handcrafted premium coffee table albums featuring archival lay-flat binding, fine art matte papers, and custom cover finishes.",
  },
  {
    category: "Services & Coverage",
    question: "Do you provide videography?",
    answer: "Yes, we provide full cinematic videography and wedding film production, including 4K multi-camera coverage, audio recording, highlight trailers, and extended ceremony films.",
  },
  {
    category: "Services & Coverage",
    question: "Do you provide drone photography?",
    answer: "Yes, we offer professional 4K aerial drone photography and videography, subject to event venue location, weather conditions, and applicable local airspace permissions.",
  },
];
