"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote, UserCheck } from "lucide-react";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0.95, 1, 0.95]);

  return (
    <section className="relative bg-white py-40 overflow-hidden border-b border-slate-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="quote-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quote-grid)" />
          </svg>
        </div>
        <motion.div 
          style={{ opacity: 0.05 }}
          className="absolute -top-20 -left-20 text-brand-blue"
        >
          <Quote className="w-96 h-96 rotate-12" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Large Quote Mark & Visual Accent */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-64 w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent mx-auto" />
          </div>

          {/* Center: The Quote Content */}
          <div className="lg:col-span-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 mb-10">
                <div className="w-12 h-px bg-brand-gold/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
                  Leadership Perspective
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-bold mb-16 leading-[1.1] tracking-tight text-brand-blue italic relative">
                <span className="relative inline-block">
                  “We didn’t just build a company — we built a modern travel infrastructure from India that the world can rely on.”
                </span>
              </h2>

              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8">
                {/* Avatar with sophisticated border */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-brand-gold to-brand-blue opacity-20 rounded-full blur-md group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-4 border-white overflow-hidden">
                    <span className="relative z-10">HR</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <UserCheck className="w-4 h-4 text-brand-blue" />
                  </motion.div>
                </div>

                <div className="text-center lg:text-left space-y-2">
                  <div className="space-y-0">
                    <h3 className="text-3xl font-bold text-brand-blue tracking-tight">Hamlet Roy</h3>
                    <p className="text-slate-400 uppercase tracking-[0.2em] text-xs font-bold">Founder & Group CEO</p>
                  </div>
                  <div className="h-px w-full lg:w-48 bg-slate-100" />
                  <p className="text-brand-gold font-medium text-lg italic max-w-md">
                    “This is the foundation of borderless hospitality technology.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Decorative Element */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-64 w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent mx-auto" />
          </div>
        </div>
      </div>

      {/* Floating Particles for depth */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-gold/20 rounded-full hidden md:block"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + (i * 20) % 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default QuoteSection;
