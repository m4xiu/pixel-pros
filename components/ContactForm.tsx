"use client";

import { useState } from "react";
import { MessageCircle, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, EnquiryFormData } from "@/lib/whatsapp";

interface ContactFormProps {
  initialPackage?: string;
}

export default function ContactForm({ initialPackage }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    eventDate: "",
    eventLocation: "",
    guests: "",
    requiredService: initialPackage === "signature" ? "Photography + Videography" : "Photography",
    budget: "Not sure yet",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventDate || !formData.eventLocation.trim()) {
      setErrorMessage("Please complete all required fields (*): Name, Phone, Event Date & Location.");
      return;
    }

    setErrorMessage("");
    const waUrl = buildWhatsAppUrl(formData);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventDate || !formData.eventLocation.trim()) {
      setErrorMessage("Please complete all required fields (*): Name, Phone, Event Date & Location.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate direct inquiry registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#FAF8F5] p-8 sm:p-12 md:p-14 rounded-sm border border-[#E3DCCB] shadow-xl">
      {isSubmitted ? (
        <div className="text-center py-12 flex flex-col items-center gap-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#1E7D46] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-editorial text-3xl text-[#20201C] font-normal">
            Thank You, {formData.name || "Friend"}!
          </h3>
          <p className="text-sm text-[#77736A] font-light max-w-md leading-relaxed">
            Your enquiry has been prepared. Our team will review your date ({formData.eventDate || "selected date"}) and reach out to you directly via phone or WhatsApp shortly.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                eventType: "Wedding",
                eventDate: "",
                eventLocation: "",
                guests: "",
                requiredService: "Photography",
                budget: "Not sure yet",
                message: "",
              });
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#20201C] text-white text-xs tracking-widest uppercase hover:bg-[#161714]"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8B806D]">
              Reserve Your Date
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#20201C] font-normal">
              Tell us about your celebration.
            </h3>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-sm bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Your Name <span className="text-[#8B806D]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ananya & Karthik"
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Phone / WhatsApp Number <span className="text-[#8B806D]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Event Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="eventType" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Event Type <span className="text-[#8B806D]">*</span>
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              >
                <option value="Wedding">Wedding Celebration</option>
                <option value="Pre-Wedding">Pre-Wedding / Outdoor Shoot</option>
                <option value="Birthday">Birthday / Milestone Celebration</option>
                <option value="Couple">Couple & Romantic Portrait</option>
                <option value="Portrait">Editorial Portrait</option>
                <option value="Other">Other Event</option>
              </select>
            </div>
          </div>

          {/* Row 3: Date & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="eventDate" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Event Date <span className="text-[#8B806D]">*</span>
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="eventLocation" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Event Venue / Location <span className="text-[#8B806D]">*</span>
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                required
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="e.g. Marthandam, Nagercoil, Trivandrum..."
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Row 4: Service & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="requiredService" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Required Service <span className="text-[#8B806D]">*</span>
              </label>
              <select
                id="requiredService"
                name="requiredService"
                value={formData.requiredService}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              >
                <option value="Photography">Still Photography Only</option>
                <option value="Videography">Cinematic Videography Only</option>
                <option value="Photography + Videography">Photography + Videography</option>
                <option value="Drone Photography">Drone Aerial Coverage</option>
                <option value="Complete Package">Complete Photo + Cinema + Album Package</option>
                <option value="Other">Other Custom Service</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="guests" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Approx. Guests
              </label>
              <input
                type="text"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="e.g. 150 - 300"
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors"
              >
                <option value="Below ₹10,000">Below ₹10,000</option>
                <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                <option value="₹1,00,000+">₹1,00,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Row 5: Notes / Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-mono tracking-wider uppercase text-[#20201C]">
              Tell Us About Your Vision / Any Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share any special details, schedule times, or specific photo styles you love..."
              className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E3DCCB] rounded-sm text-sm text-[#20201C] focus:outline-none focus:border-[#20201C] focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Dual Submission Options */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 px-8 rounded-full bg-[#25D366] text-white font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#20bd59] hover:scale-[1.02] shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Enquiry via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#20201C] text-[#FAF8F5] font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#161714] hover:scale-[1.02] flex items-center justify-center gap-2.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Submitting..." : "Submit Form"}</span>
            </button>
          </div>

          <p className="text-[11px] text-[#77736A] text-center font-light mt-1">
            ✨ We respect your privacy. No spam. You will be connected directly with the Pixel Pros core team.
          </p>
        </form>
      )}
    </div>
  );
}
