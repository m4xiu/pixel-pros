export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  alt: string;
  features: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding",
    number: "01",
    title: "Wedding Photography",
    tagline: "Honest emotion, sacred heritage, and timeless celebrations.",
    description: "Comprehensive coverage of your sacred rituals, emotional family bonds, and the joyous energy of your big day.",
    detailedDescription: "From intimate morning rituals to grand evening receptions, we document the subtleties that make your wedding unique. Our team blends unobtrusive candid photojournalism with poised editorial portraiture, ensuring every sacred glance and spontaneous smile is preserved in rich, natural tones.",
    image: "/images/pixel-pros/wedding/pixel-pros-wedding-01.webp",
    alt: "Pixel Pros Luxury Wedding Photography Service in Marthandam",
    features: [
      "Traditional & Candid Ritual Coverage",
      "Editorial Bridal & Groom Portraiture",
      "Family & Blessing Moments",
      "High-Resolution Color-Graded Deliverables",
      "Handcrafted Premium Coffee Table Albums",
    ],
    deliverables: [
      "Full event high-res digital collection",
      "Curated highlights gallery (within 72 hours)",
      "Bespoke handcrafted archival photobook",
      "High-speed private online download gallery",
    ],
  },
  {
    id: "pre-wedding",
    number: "02",
    title: "Pre-Wedding Stories",
    tagline: "Cinematic outdoor narratives in breathtaking natural landscapes.",
    description: "Artistic, relaxed couple sessions crafted in dramatic locations across Tamil Nadu and Kerala.",
    detailedDescription: "Your pre-wedding shoot is an unhurried visual poem. We guide you through picturesque natural landscapes — from misty hills and lush coconut groves to serene backwaters and golden hour coasts — capturing your effortless connection without stiff poses.",
    image: "/images/pixel-pros/pre-wedding/pixel-pros-pre-wedding-01.webp",
    alt: "Pixel Pros Pre-Wedding and Outdoor Photography",
    features: [
      "Curated Location Scouting & Concept Planning",
      "Golden Hour & Sunset Lighting Artistry",
      "Multiple Outfit & Styling Transitions",
      "Editorial Cinematic Posing Direction",
      "Short Teaser Film Integration Available",
    ],
    deliverables: [
      "30–50 high-res artistically retouched frames",
      "Cinematic social media teaser reel (optional)",
      "High-resolution canvas print ready files",
    ],
  },
  {
    id: "birthday",
    number: "03",
    title: "Birthday & Milestones",
    tagline: "Vibrant celebrations, childhood wonder, and family togetherness.",
    description: "Capturing the authentic joy, laughter, and colorful moments of milestone birthdays and anniversaries.",
    detailedDescription: "Every milestone deserves to be remembered with genuine joy. Whether it's a child's first birthday, a sweet sixteen, or a golden jubilee, our team captures the candid laughter, cake-cutting excitement, and warm family hugs with unobtrusive grace.",
    image: "/images/pixel-pros/birthday/pixel-pros-birthday-01.webp",
    alt: "Pixel Pros Birthday and Milestone Celebrations",
    features: [
      "Candid & Posed Family Portraiture",
      "Event Decor & Atmosphere Capture",
      "Cake Cutting & Celebration Highlights",
      "Children & Guest Candid Moments",
      "Fast Delivery for Social Sharing",
    ],
    deliverables: [
      "Complete edited high-res event gallery",
      "Mini milestone album (optional add-on)",
      "Fast-track delivery for key moments",
    ],
  },
  {
    id: "couple",
    number: "04",
    title: "Couple & Portraits",
    tagline: "Intimate lifestyle sessions celebrating honest human connection.",
    description: "Quiet, romantic portraiture focused on subtle gestures, natural expressions, and authentic emotion.",
    detailedDescription: "A space for couples to simply be themselves. We create an intimate, calm environment where genuine connection unfolds naturally. Perfect for anniversaries, engagements, or just celebrating your journey together.",
    image: "/images/pixel-pros/couple/pixel-pros-couple-01.webp",
    alt: "Pixel Pros Couple & Portrait Photography Sessions",
    features: [
      "Natural Light Lifestyle Direction",
      "Intimate & Unscripted Moments",
      "Urban or Natural Setting Options",
      "Fine Art Color Tone Curation",
    ],
    deliverables: [
      "Curated selection of 25+ fine-art edits",
      "Mobile-optimized sharing formats",
      "Fine art archival print options",
    ],
  },
  {
    id: "videography",
    number: "05",
    title: "Cinematic Videography",
    tagline: "Moving visuals with cinematic pacing, soundscapes, and color.",
    description: "Documentary-style wedding films and highlight teasers that bring the sounds and emotions of your day back to life.",
    detailedDescription: "Photography captures a frozen instant; film preserves the laughter, the tremble in a voice, and the rhythm of the celebration. Our cinema team crafts emotion-driven films scored to rich ambient soundtracks and timeless color grading.",
    image: "/images/pixel-pros/wedding/pixel-pros-wedding-13.webp",
    alt: "Pixel Pros Cinematic Videography and Wedding Films",
    features: [
      "4K Ultra-HD Multi-Camera Production",
      "Professional Audio Recording & Sound Design",
      "Cinematic Teaser & Full-Length Feature Films",
      "Editorial Color Grading & Master Output",
    ],
    deliverables: [
      "1-3 minute cinematic trailer for social sharing",
      "15-30 minute full celebration cinematic highlight",
      "Complete raw ceremony archive upon request",
    ],
  },
  {
    id: "drone",
    number: "06",
    title: "Drone & Aerial Coverage",
    tagline: "Breathtaking perspectives from high above your celebration.",
    description: "Sweeping aerial photography and 4K footage capturing venue grandeur, landscape context, and crowd scale.",
    detailedDescription: "Elevate your visual story with majestic bird's-eye views. From sprawling heritage wedding venues to dramatic pre-wedding nature landscapes, our certified drone operators capture breathtaking aerial perspectives safely and artfully.",
    image: "/images/pixel-pros/pre-wedding/pixel-pros-pre-wedding-02.webp",
    alt: "Pixel Pros Aerial and Drone Photography in Marthandam",
    features: [
      "High-Resolution 4K Aerial Video & Stills",
      "Venue Architecture & Landscape Panorama",
      "Dynamic Outdoor Couple Motion Shots",
      "Subject to Weather & Local Permissions",
    ],
    deliverables: [
      "Seamlessly integrated aerial footage in master film",
      "High-resolution aerial photograph collection",
    ],
  },
];
