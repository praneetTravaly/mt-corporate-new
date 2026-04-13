"use client";

import React from "react";
import { Globe } from "lucide-react";

const ScaleSection = () => {
  const stats = [
    { label: "Active Markets", value: "190+" },
    { label: "Partner Hotels", value: "10,000+" },
    { label: "Global Travelers", value: "1M+" },
    { label: "Creator & Agent Network", value: "5,000+" },
    { label: "Gross Booking Value", value: "$500M+" },
    { label: "Technology Uptime", value: "99.99%" }
  ];

  return (
    <section id="scale" className="bg-brand-blue text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 opacity-10">
        <Globe className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] animate-pulse" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(197,160,89,0.1) 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-20">
          <span className="micro-label mb-4 block">Scale & Market Position</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Built for Global Scale</h2>
          <p className="text-xl text-white/60 font-light max-w-xl">Technology that performs. Infrastructure that scales. Powering travel across every continent.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 border-t border-white/10 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-3 tracking-tighter data-value group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="micro-label !text-white/40 leading-tight">{stat.label}</div>
              <div className="absolute bottom-[-16px] left-0 w-8 h-0.5 bg-brand-gold/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
