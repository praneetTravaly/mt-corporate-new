"use client";

import React from "react";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

const GovernanceSection = () => {
  const sections = [
    { 
      title: "Awards & Recognition", 
      icon: <Award className="w-6 h-6" />,
      items: ["World Travel Tech Award 2025", "Hospitality Innovation Excellence", "Global Fintech Leader Certification"]
    },
    { 
      title: "Security & Compliance", 
      icon: <ShieldCheck className="w-6 h-6" />,
      items: ["PCI DSS Level 1 Compliant", "GDPR & Data Privacy Standards", "ISO 27001 Certified Infrastructure"]
    },
    { 
      title: "Financial Performance Snapshot", 
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["140% YoY Revenue Growth", "Positive EBITDA Margin", "Series B Institutional Funding"]
    }
  ];

  return (
    <section id="governance" className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="micro-label mb-4 block">Technology & Financial Strength</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-brand-blue">Performance & Governance</h2>
          <p className="text-xl text-slate-600 font-light">Trust is engineered into the system. Verified by global standards.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="p-10 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-8">{section.title}</h3>
              <ul className="space-y-6">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
