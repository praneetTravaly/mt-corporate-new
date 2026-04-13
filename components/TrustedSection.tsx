"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, X, ChevronRight } from "lucide-react";

export interface ShowcaseDetail {
  id: string;
  title: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string | string[];
    isList?: boolean;
    items?: { title: string; desc: string }[];
  }[];
  cta: string;
  secondaryCta: string;
  ctaUrl?: string;
  secondaryCtaUrl?: string;
}

export const showcaseDetails: Record<string, ShowcaseDetail> = {
  "Premium Partners": {
    id: "premium-partners",
    title: "Institutional-Grade Hospitality Partnerships",
    heroDescription: "A growing network of independent hotels, regional groups, and emerging chains trust MyTravaly to power distribution, revenue intelligence, and operational efficiency across markets.",
    sections: [
      {
        title: "Section 1 — Partnership Philosophy",
        content: "We do not onboard properties. We build long-term technology alliances. Each partner integrates into a unified infrastructure designed to enhance visibility, strengthen margins, and unlock global demand."
      },
      {
        title: "Section 2 — Portfolio Snapshot",
        content: [
          "Global Footprint: Properties across multiple countries and expanding markets.",
          "Property Segments: Hotels, Resorts, Homestay & Campsites, Emerging Regional Chains",
          "Integration Layers: OTA Distribution, PMS & Operations, Direct Booking Infrastructure, Revenue Intelligence"
        ],
        isList: true
      },
      {
        title: "Section 3 — Quality Standards",
        content: "Every Premium Partner undergoes: Identity verification, Operational readiness review, Payment compliance validation, and Ongoing performance monitoring. This ensures consistency, reliability, and brand integrity across the ecosystem."
      },
      {
        title: "Section 4 — Growth Metrics",
        content: [
          "10,000+ active hospitality partners",
          "Multi-market expansion strategy underway",
          "Growing enterprise adoption"
        ],
        isList: true
      }
    ],
    cta: "Explore Partnership Opportunities",
    secondaryCta: "Speak to Hospitality Strategy Team",
    ctaUrl: "https://mytravaly.com/partner",
    secondaryCtaUrl: "https://hbc.mytravaly.com"
  },
  "Verified Properties": {
    id: "verified-stays",
    title: "Engineered for Trust. Designed for Confidence.",
    heroDescription: "Verification at MyTravaly is not a badge — it is a structured compliance and operational validation framework ensuring every stay meets defined standards.",
    sections: [
      {
        title: "Section 1 — Our Verification Framework",
        content: "Each listed property undergoes multi-layer validation:",
        items: [
          { title: "Identity Verification", desc: "Business registration & ownership validation." },
          { title: "Operational Review", desc: "Live inventory confirmation and booking workflow testing." },
          { title: "Payment Security Compliance", desc: "Multi-currency secure gateway integration." },
          { title: "Performance Monitoring", desc: "Ongoing cancellation ratios, guest satisfaction signals, operational responsiveness." }
        ]
      },
      {
        title: "Section 2 — Continuous Oversight",
        content: "Verification is not a one-time process. Our system continuously monitors performance signals to ensure ecosystem reliability. Low-quality performance triggers review protocols."
      },
      {
        title: "Section 3 — Traveler Protection Architecture",
        content: [
          "Transparent pricing",
          "Secure checkout",
          "Instant confirmation",
          "Structured refund management"
        ],
        isList: true
      },
      {
        title: "Section 4 — Why It Matters",
        content: "Trust increases conversion. Conversion strengthens partner revenue. Revenue growth compounds ecosystem value."
      }
    ],
    cta: "Book with Confidence",
    secondaryCta: "View Verified Properties",
    ctaUrl: "https://mytravaly.com/marketplace",
    secondaryCtaUrl: "https://mytravaly.com/marketplace"
  },
  "Partner Success Stories": {
    id: "success-stories",
    title: "Performance That Scales",
    heroDescription: "Measurable revenue growth, operational efficiency gains, and global visibility expansion — delivered through integrated infrastructure.",
    sections: [
      {
        title: "Section 1 — Impact Overview",
        content: [
          "Average Revenue Uplift: +24%",
          "Improved Occupancy Ratios: +18%",
          "Direct Booking Growth via StayConfirm: 3.2x",
          "Operational Time Savings with PMS: 40%",
          "Margin Optimization via HBC: +12%"
        ],
        isList: true
      },
      {
        title: "Section 2 — Case Study: RKS Beachfront",
        content: "RKS Beachfront evolved from a locally dependent property into a digitally discoverable beachfront stay. With MyTravaly Marketplace, the hotel gained access to a wider traveler base, resulting in steady bookings and a stronger, more predictable revenue foundation.",
        items: [
          { title: "Property Profile", desc: "Location: Fisheries Rd, Near Hosabettu Beach, Mangalore, Karnataka, India | Segment: Beachfront / Leisure Stay | Size: Boutique Independent Property | Listed: 24 March 2022" },
          { title: "Challenge", desc: "Limited online visibility beyond local demand, dependence on fragmented booking channels, manual operations, unpredictable occupancy and revenue flow." },
          { title: "Infrastructure Integrated", desc: "MyTravaly Marketplace (OTA Distribution) – Enabled global visibility and booking access." },
          { title: "Measured Results", desc: "Total Bookings Generated: 101 | Total Booking Value: ₹6,53,480 | Impact: Established a consistent stream of online bookings, expanded reach beyond local walk-in customers, improved revenue predictability through digital distribution." }
        ]
      },
      {
        title: "Section 3 — Case Study: The Heritage Grand",
        content: "The Heritage Grand, a luxury heritage property in Jaipur, faced challenges in reaching international travelers and managing high OTA commissions. By integrating MyTravaly's Direct Booking Engine and Revenue Intelligence, they achieved significant growth in high-margin direct bookings.",
        items: [
          { title: "Property Profile", desc: "Location: Jaipur, Rajasthan, India | Segment: Luxury Heritage | Size: 45 Rooms | Listed: 12 June 2022" },
          { title: "Challenge", desc: "High dependence on expensive OTA channels (20%+ commission), low direct booking conversion, difficulty in managing dynamic pricing for international markets." },
          { title: "Infrastructure Integrated", desc: "MyTravaly Direct Booking Engine, PMS Integration, and Revenue Intelligence Dashboard." },
          { title: "Measured Results", desc: "Direct Booking Growth: +45% | Commission Savings: ₹4.2 Lakhs/Quarter | ADR Improvement: +18% | Impact: Shifted booking mix towards direct channels, significantly improving net margins." }
        ]
      },
      {
        title: "Section 4 — Case Study: Mountain View Retreat",
        content: "Mountain View Retreat in Manali struggled with manual booking management and inconsistent guest verification. Implementing the MyTravaly PMS and StayConfirm protocol automated their operations and built trust with travelers.",
        items: [
          { title: "Property Profile", desc: "Location: Manali, Himachal Pradesh, India | Segment: Nature / Adventure Stay | Size: 12 Cottages | Listed: 05 September 2022" },
          { title: "Challenge", desc: "Manual reservation tracking leading to overbookings, lack of secure payment options for remote guests, and difficulty in verifying guest identities before arrival." },
          { title: "Infrastructure Integrated", desc: "MyTravaly PMS (Property Management System) and StayConfirm (Verification Protocol)." },
          { title: "Measured Results", desc: "Booking Accuracy: 100% (Zero Overbookings) | Direct Booking Growth: 3.2x | Operational Efficiency: 40% time saved on admin tasks | Impact: Streamlined operations allowed the owners to focus on guest experience rather than paperwork." }
        ]
      }
    ],
    cta: "View Case Studies",
    secondaryCta: "Become a Strategic Partner",
    ctaUrl: "#section-1",
    secondaryCtaUrl: "https://hbc.mytravaly.com"
  }
};

const ShowcaseModal = ({ showcase, onClose }: { showcase: ShowcaseDetail; onClose: () => void }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (targetId: string) => {
    if (!scrollContainerRef.current) return;
    const element = scrollContainerRef.current.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-blue/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Left Side: Case Study Header */}
        <div className="md:w-1/2 bg-slate-50 p-12 md:p-16 border-r border-slate-100 flex flex-col">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-brand-gold shadow-lg">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">Hospitality Showcase</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight tracking-tight">
            {showcase.title}
          </h3>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
            {showcase.heroDescription}
          </p>

          <div className="mt-auto pt-12 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Active Partners", value: "10,000+" },
                { label: "Global Reach", value: "190+ Countries" }
              ].map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-bold text-brand-gold tracking-tighter">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Content */}
        <div 
          ref={scrollContainerRef}
          className="md:w-1/2 bg-white flex flex-col overflow-y-auto scrollbar-hide"
        >
          <div className="p-12 md:p-16 space-y-16">
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-3 hover:bg-slate-100 rounded-full transition-colors z-20 bg-white shadow-sm"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            {showcase.sections.map((section, idx) => (
              <div 
                key={idx} 
                id={`section-${idx}`}
                className="space-y-6 relative pl-8 border-l border-slate-100"
              >
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {section.title}
                </h4>
                {section.isList && Array.isArray(section.content) ? (
                  <ul className="space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-light text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : section.items ? (
                  <div className="space-y-6">
                    <p className="text-slate-600 font-light text-sm leading-relaxed">{section.content}</p>
                    <div className="grid gap-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-brand-gold transition-colors">
                          <div className="font-bold text-brand-blue text-sm mb-1">{item.title}</div>
                          <div className="text-xs text-slate-500 font-light">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-600 font-light leading-relaxed text-sm">
                    {section.content}
                  </p>
                )}
              </div>
            ))}

            {/* CTAs */}
            <div className="pt-12 border-t border-slate-100 space-y-4">
              {showcase.ctaUrl?.startsWith('#') ? (
                <button 
                  onClick={() => handleScrollTo(showcase.ctaUrl!)}
                  className="block w-full py-5 bg-brand-blue text-white rounded-sm font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/10 text-center"
                >
                  {showcase.cta}
                </button>
              ) : (
                <a 
                  href={showcase.ctaUrl || "#"} 
                  target={showcase.ctaUrl?.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-brand-blue text-white rounded-sm font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/10 text-center"
                >
                  {showcase.cta}
                </a>
              )}
              
              {showcase.secondaryCtaUrl?.startsWith('#') ? (
                <button 
                  onClick={() => handleScrollTo(showcase.secondaryCtaUrl!)}
                  className="block w-full py-5 border border-slate-200 text-brand-blue rounded-sm font-bold hover:bg-slate-50 transition-all text-center"
                >
                  {showcase.secondaryCta}
                </button>
              ) : (
                <a 
                  href={showcase.secondaryCtaUrl || "#"} 
                  target={showcase.secondaryCtaUrl?.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block w-full py-5 border border-slate-200 text-brand-blue rounded-sm font-bold hover:bg-slate-50 transition-all text-center"
                >
                  {showcase.secondaryCta}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TrustedSection = () => {
  const [selectedShowcase, setSelectedShowcase] = useState<ShowcaseDetail | null>(null);

  const subsections = [
    { title: "Premium Partners", desc: "Global hotel groups and boutique collections." },
    { title: "Verified Properties", desc: "Independently audited for quality and reliability." },
    { title: "Partner Success Stories", desc: "Real-world impact across diverse markets." }
  ];

  const performance = [
    { label: "Average Occupancy Lift", value: "+24%" },
    { label: "Direct Booking Growth", value: "3.2x" },
    { label: "Settlement Speed", value: "Same-Day" }
  ];
  
  return (
    <section id="partners" className="bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Hospitality Showcase</span>
          <h2 className="text-4xl font-bold mb-6">Trusted by Distinguished Hospitality Brands</h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            From independent boutique hotels to emerging regional groups, our partners rely on MyTravaly to increase visibility, optimize revenue, and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {subsections.map((sub, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedShowcase(showcaseDetails[sub.title])}
              className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-brand-gold transition-colors group cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4 text-brand-blue group-hover:text-brand-gold transition-colors">{sub.title}</h3>
              <p className="text-slate-500 text-sm mb-6 font-light">{sub.desc}</p>
              <div className="flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest">
                Explore <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedShowcase && (
            <ShowcaseModal 
              showcase={selectedShowcase} 
              onClose={() => setSelectedShowcase(null)} 
            />
          )}
        </AnimatePresence>

        <div className="bg-brand-blue p-12 rounded-3xl text-white">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {performance.map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-brand-gold mb-2">{item.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
