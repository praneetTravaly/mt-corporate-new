"use client";

import React, { useState, useRef, UIEvent } from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Cpu, 
  Map, 
  Zap, 
  ArrowRight, 
  Plane 
} from "lucide-react";

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      month: "April",
      title: "Foundation & Vision",
      description: "Legal incorporation and commencement of business operations, setting the stage for global travel infrastructure.",
      icon: <Building2 className="w-5 h-5" />,
      color: "blue"
    },
    {
      year: "2020 - 2021",
      month: "Resilience",
      title: "R&D & Strategic Pivot",
      description: "Navigated the global pandemic by doubling down on technology. Significant R&D investments to prepare for the post-COVID travel resurgence.",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "indigo"
    },
    {
      year: "2022",
      month: "Growth",
      title: "Market Entry & Traction",
      description: "Achieved initial market traction with the first wave of successful bookings, validating the platform's core value proposition.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "cyan"
    },
    {
      year: "2023",
      month: "Scale",
      title: "Global Expansion",
      description: "Scaled to 10,000+ hotel partners globally. Launched the flagship Mobile App for Travelers, enhancing the consumer experience.",
      icon: <Globe className="w-5 h-5" />,
      color: "purple"
    },
    {
      year: "2024",
      month: "Ecosystem",
      title: "Supply-Side Maturity",
      description: "Launched the comprehensive Operating System (OS) and Mobile App for Hoteliers, unifying the supply-side infrastructure.",
      icon: <Cpu className="w-5 h-5" />,
      color: "blue"
    },
    {
      year: "2025",
      month: "Strategic",
      title: "Regional Dominance",
      description: "Registered Swoovo and expanded operations into Bangladesh, marking a major milestone in regional market expansion.",
      icon: <Map className="w-5 h-5" />,
      color: "emerald"
    },
    {
      year: "2026",
      month: "Innovation",
      title: "Unified Tech Stack",
      description: "Launched MT Gateway, a revolutionary tool for distribution and revenue management, completing the unified travel tech stack.",
      icon: <Zap className="w-5 h-5" />,
      color: "amber"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollableWidth = container.scrollWidth - container.clientWidth;
      const targetScroll = (index / (milestones.length - 1)) * scrollableWidth;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollableWidth = container.scrollWidth - container.clientWidth;
    if (scrollableWidth <= 0) return;
    
    const progress = Math.max(0, Math.min(1, container.scrollLeft / scrollableWidth));
    setScrollProgress(progress);
    
    const index = Math.round(progress * (milestones.length - 1));
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <section id="timeline" className="bg-[#050608] py-40 overflow-hidden relative">
      {/* Immersive Background with Parallax & Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1a1b23_0%,transparent_70%)]"
          style={{ 
            x: scrollProgress * -150,
            opacity: 0.6 
          }}
        />
        
        {/* Starfield Effect */}
        <div className="absolute inset-0 opacity-30">
          {mounted && [...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        
        {/* Animated Grid with Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(#F27D26 1px, transparent 1px), linear-gradient(90deg, #F27D26 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            x: scrollProgress * -80
          }} 
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Our Evolution</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Journey <span className="text-brand-gold">So Far</span>
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              A chronological roadmap of our strategic milestones, technological breakthroughs, and global infrastructure expansion.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all disabled:opacity-30"
              disabled={activeIndex === 0}
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button 
              onClick={() => scrollTo(Math.min(milestones.length - 1, activeIndex + 1))}
              className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center text-brand-blue hover:scale-110 transition-all disabled:opacity-30"
              disabled={activeIndex === milestones.length - 1}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Timeline Rail */}
          <div className="absolute top-[70px] left-0 right-0 h-[2px] bg-white/10 hidden md:block">
            <motion.div 
              className="h-full bg-brand-gold shadow-[0_0_25px_rgba(242,125,38,0.7)] relative"
              style={{ width: `${scrollProgress * 100}%` }}
            >
              {/* Flight Animation */}
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30"
                animate={{ 
                  y: [-4, 4, -4],
                  rotate: [0, 4, -4, 0],
                  scale: scrollProgress === 1 ? [1, 1.2, 1] : 1
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="relative">
                  <Plane className="w-12 h-12 text-brand-gold fill-brand-gold/20 drop-shadow-[0_0_15px_rgba(242,125,38,1)] rotate-90" />
                  
                  {/* Dynamic Engine Trail with Sonic Boom Effect at the end */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i}
                        className="h-[2px] bg-brand-gold/50 blur-[1px]"
                        animate={{ 
                          width: [15, 40, 15],
                          opacity: [0.3, 0.8, 0.3],
                          filter: scrollProgress === 1 ? ["blur(1px)", "blur(3px)", "blur(1px)"] : "blur(1px)"
                        }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity, 
                          delay: i * 0.15 
                        }}
                      />
                    ))}
                  </div>

                  {/* Arrival Glow at the end */}
                  {scrollProgress === 1 && (
                    <motion.div 
                      className="absolute inset-0 bg-brand-gold/40 rounded-full blur-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-16 overflow-x-auto pb-32 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
            onScroll={handleScroll}
          >
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[360px] md:min-w-[550px] snap-center pt-20"
                initial={{ opacity: 0, scale: 0.85, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 15,
                  delay: idx * 0.05 
                }}
              >
                <div className="relative group perspective-2000">
                  {/* Year Marker Circle */}
                  <div className={`absolute -top-[118px] left-0 w-10 h-10 rounded-full border-4 border-[#050608] transition-all duration-1000 z-20 ${idx <= activeIndex ? 'bg-brand-gold scale-125 shadow-[0_0_30px_rgba(242,125,38,1)]' : 'bg-white/5'}`} />
                  
                  {/* Year Label */}
                  <div className={`absolute -top-36 left-0 font-black text-4xl tracking-tighter transition-all duration-1000 ${idx <= activeIndex ? 'text-white scale-110' : 'text-white/5'}`}>
                    {item.year}
                  </div>

                  {/* Card Content with 3D Interaction */}
                  <motion.div 
                    className={`p-14 rounded-[3.5rem] border transition-all duration-1000 relative overflow-hidden backdrop-blur-xl ${idx === activeIndex ? 'bg-white/10 border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]' : 'bg-transparent border-white/5 opacity-20 grayscale blur-[2px]'}`}
                    whileHover={idx === activeIndex ? { 
                      y: -15,
                      rotateX: 3,
                      rotateY: -3,
                      boxShadow: "0 50px 100px -25px rgba(242,125,38,0.2)"
                    } : {}}
                  >
                    {/* Abstract Background Graphic */}
                    <motion.div 
                      className="absolute -right-24 -bottom-24 w-80 h-80 bg-brand-gold/15 rounded-full blur-[120px]"
                      animate={idx === activeIndex ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4]
                      } : {}}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                    
                    <div className="flex items-center gap-8 mb-12">
                      <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-1000 shadow-3xl ${idx <= activeIndex ? 'bg-brand-gold text-brand-blue rotate-6' : 'bg-white/5 text-white/10'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-brand-gold font-black text-[12px] uppercase tracking-[0.4em] mb-3">{item.month}</div>
                        <div className="text-white font-bold text-2xl leading-none">{item.year}</div>
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.05] group-hover:text-brand-gold transition-colors duration-700">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed text-xl">
                      {item.description}
                    </p>

                    {/* Interactive Indicator */}
                    <div className={`mt-12 flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-1000 ${idx === activeIndex ? 'text-brand-gold opacity-100 translate-x-0' : 'text-white/5 opacity-0 -translate-x-6'}`}>
                      <div className="w-16 h-[1px] bg-brand-gold" />
                      Current Milestone
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
