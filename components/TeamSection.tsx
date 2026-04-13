"use client";

import React from "react";
import { Network } from "lucide-react";

const TeamSection = () => {
  const leaders = [
    { name: "Hamlet Roy", role: "Founder & Group CEO", bio: "Visionary technologist with 20+ years in travel infrastructure.", image: "https://picsum.photos/seed/hamlet/400/400" },
    { name: "Ankit Kumar", role: "Chief Technology Officer", bio: "Architecting the future of travel technology with scalable infrastructure.", image: "https://picsum.photos/seed/ankit/400/400" },
    { name: "Sneha Deb", role: "Customer Success Manager", bio: "Ensuring seamless platform adoption and partner satisfaction globally.", image: "https://picsum.photos/seed/sneha/400/400" },
    { name: "Mayank Kumar", role: "Sr. Full Stack Engineer", bio: "Building robust, high-performance systems for the global travel ecosystem.", image: "https://picsum.photos/seed/mayank/400/400" },
    { name: "Mafroza Nissha", role: "People & Operation Manager, Bangladesh", bio: "Driving regional growth and operational excellence in South Asia.", image: "https://picsum.photos/seed/mafroza/400/400" }
  ];

  return (
    <section id="team" className="bg-white overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mb-24">
          <span className="micro-label mb-4 block">Leadership & Global Team</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-brand-blue">Building Infrastructure for a Borderless Economy</h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
            A diverse team of technologists, strategists, and hospitality innovators globally aligned and performance-focused.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden mb-8 relative">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue shadow-2xl">
                    <Network className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-brand-blue tracking-tight">{leader.name}</h3>
                <div className="micro-label !text-brand-gold">{leader.role}</div>
                <div className="h-px w-8 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />
                <p className="text-slate-500 text-sm font-light leading-relaxed pt-4">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-16 bg-brand-blue rounded-sm text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Network className="w-full h-full scale-150" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Vision-driven. Performance-focused. <br /> Globally aligned.</h3>
            <p className="text-white/60 font-light mb-10 text-lg">
              Our global team spans 12 hubs, working 24/7 to maintain the foundation of modern travel technology.
            </p>
            <button className="bg-brand-gold text-brand-blue px-10 py-5 rounded-sm font-bold hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/10">
              Join the Global Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
