export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  priceDisplay: string;
  priceNote: string;
  description: string;
  isPopular?: boolean;
  inclusions: string[];
  recommendedFor: string;
}

export const packagesData: PackageTier[] = [
  {
    id: "essential",
    name: "Essential Collection",
    priceDisplay: "₹XX,XXX",
    priceNote: "Custom pricing based on event duration & location",
    description: "Designed for intimate gatherings, single-session celebrations, and couples looking for focused, high-art photography.",
    inclusions: [
      "1 Lead Photographer Coverage",
      "Full event high-resolution color-graded photos",
      "Candid & traditional portraiture",
      "Private online download gallery",
      "Delivery in approximately 3 weeks",
      "Travel within Marthandam / Local Area included",
    ],
    recommendedFor: "Intimate ceremonies, birthdays, pre-wedding sessions & single events",
  },
  {
    id: "signature",
    name: "Signature Wedding",
    badge: "Most Cherished",
    isPopular: true,
    priceDisplay: "₹XX,XXX",
    priceNote: "Customized quote tailored to multi-day celebrations",
    description: "Our comprehensive wedding package combining candid storytelling, traditional coverage, and premium heirloom album.",
    inclusions: [
      "2 Senior Photographers (Candid + Traditional)",
      "1 Cinematic Videographer (Full HD / 4K)",
      "High-resolution edited photo collection",
      "Cinematic Wedding Highlight Film (3–5 min)",
      "Full ceremony feature film",
      "Handcrafted Premium Archival Photobook (Album)",
      "Fast-track social media preview within 72 hours",
      "Drone coverage (Subject to venue permissions)",
    ],
    recommendedFor: "Complete wedding celebrations requiring photo + film storytelling",
  },
  {
    id: "premium",
    name: "The Royal Heritage",
    badge: "Full Experience",
    priceDisplay: "₹XX,XXX",
    priceNote: "All-inclusive multi-event photography & cinematic cinema",
    description: "The ultimate bespoke experience covering engagement, pre-wedding shoot, grand multi-day wedding, and luxury albums.",
    inclusions: [
      "Full Photography & Cinematic Cinema Crew",
      "Pre-Wedding Outdoor Shoot at destination location",
      "Full multi-session wedding & reception coverage",
      "4K Master Cinematic Teaser + Extended Wedding Film",
      "Two Premium Handcrafted Archival Leather Albums",
      "Parent Mini Photo Albums (Set of 2)",
      "4K Aerial Drone Cinematography",
      "Same-day / Next-day social highlights delivery",
      "All master digital RAW / high-res archives",
    ],
    recommendedFor: "Grand multi-day weddings, destination celebrations, and luxury keepsakes",
  },
];
