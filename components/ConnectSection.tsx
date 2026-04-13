"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ConnectSection = () => {
  return (
    <section id="connect" className="bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="micro-label mb-4 block">Connect With Us</span>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-brand-blue">
              Let’s Build the Future Together
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-xl">
              Whether you are a hospitality leader, a travel creator, or an institutional investor, we are ready to discuss how MyTravaly can power your growth.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">Email Inquiry</div>
                  <a href="mailto:connect@mytravaly.com" className="text-xl font-medium text-slate-600 hover:text-brand-gold transition-colors">connect@mytravaly.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">Global Support</div>
                  <a href="tel:+1234567890" className="text-xl font-medium text-slate-600 hover:text-brand-gold transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">Global Headquarters</div>
                  <address className="text-xl font-medium text-slate-600 not-italic">
                    123 Innovation Way, Tech District <br />
                    Singapore, 018960
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl -rotate-1 scale-105" />
            <div className="relative bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Inquiry Type</label>
                  <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm appearance-none">
                    <option>Partnership Inquiry</option>
                    <option>Investor Relations</option>
                    <option>Technical Support</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm resize-none"
                  />
                </div>

                <button className="w-full bg-brand-blue text-white py-5 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/10 group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
