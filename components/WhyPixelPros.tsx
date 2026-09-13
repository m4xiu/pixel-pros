export default function WhyPixelPros() {
  const reasons = [
    {
      number: "01",
      title: "Natural & Candid",
      description: "We focus on unforced expressions, quiet glances, and spontaneous laughter rather than staged artificial poses.",
    },
    {
      number: "02",
      title: "Story-Driven Photography",
      description: "Your wedding or shoot is documented as a cohesive emotional visual narrative from beginning to end.",
    },
    {
      number: "03",
      title: "Professional Fine Art Editing",
      description: "Individual color-grading and delicate tonal adjustments that honor natural skin tones and rich South Indian traditions.",
    },
    {
      number: "04",
      title: "Seamless Photo + Film Synergy",
      description: "One synchronized team handling both still photography and 4K cinema without getting in each other’s frames.",
    },
    {
      number: "05",
      title: "Aerial & Drone Perspectives",
      description: "Majestic bird's-eye views that frame your venue architecture and the grand scale of your celebrations.",
    },
    {
      number: "06",
      title: "Dedicated Personal Attention",
      description: "We limit the number of commissions we accept each season to ensure undivided artistic care for every client.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Our Guiding Principles
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal leading-tight tracking-tight">
            Why couples choose <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              Pixel Pros.
            </span>
          </h2>
        </div>

        {/* 6 Quiet Editorial Blocks with Spacing & Fine Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-4 p-6 sm:p-8 rounded-sm bg-[#EDE7DA]/40 border-t border-[#E3DCCB] transition-colors duration-300 hover:bg-[#EDE7DA]/80"
            >
              <span className="font-mono text-xs text-[#8B806D] opacity-80">
                {item.number}
              </span>

              <h3 className="font-editorial text-2xl text-[#20201C] font-normal">
                {item.title}
              </h3>

              <p className="text-sm text-[#77736A] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
