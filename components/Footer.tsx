"use client";

import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-blue font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">MyTravaly</span>
            </div>
            <p className="text-white/40 font-light leading-relaxed">
              The unified global infrastructure powering modern travel. Connecting travelers, hospitality leaders, and the creator economy.
            </p>
          </div>
          
          <div className="flex gap-4">
            {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
                <span className="sr-only">{social}</span>
                <Globe className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div>© 2026 MyTravaly Group. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
