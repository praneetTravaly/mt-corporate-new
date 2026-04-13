"use client";

import React from "react";
import { Network } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Network className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          The Future of Travel Infrastructure Starts Here
        </h2>
        <p className="text-xl md:text-2xl text-white/60 font-light mb-12 leading-relaxed">
          MyTravaly connects markets, technology, and people into one intelligent ecosystem.
          Travel is no longer fragmented. <span className="text-brand-gold font-bold">It is unified.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#connect" className="bg-brand-gold text-brand-blue px-10 py-5 rounded-sm font-bold text-xl hover:bg-brand-gold-light transition-all flex items-center justify-center">
            Partner With Us
          </a>
          <a href="#platform" className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-sm font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
