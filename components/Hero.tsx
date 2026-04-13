"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, FileText, Globe, Cpu } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const starsY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -50]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -0.5 to 0.5
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stable star positions and constellations
  const { stars, constellations } = React.useMemo(() => {
    const starCount = 200;
    const generatedStars = [...Array(starCount)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      color: Math.random() > 0.8 ? (Math.random() > 0.5 ? '#C5A059' : '#93C5FD') : '#FFFFFF',
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }));

    // Create some "constellations" by connecting nearby stars
    const generatedConstellations: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < 15; i++) {
      const s1 = generatedStars[Math.floor(Math.random() * starCount)];
      const s2 = generatedStars[Math.floor(Math.random() * starCount)];
      const dist = Math.sqrt(Math.pow(s1.x - s2.x, 2) + Math.pow(s1.y - s2.y, 2));
      if (dist < 15) {
        generatedConstellations.push({ x1: s1.x, y1: s1.y, x2: s2.x, y2: s2.y });
      }
    }

    return { stars: generatedStars, constellations: generatedConstellations };
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]"
    >
      {/* Sky and Stars Background - Industry Standard Polished Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Sky Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0A192F] to-[#020617]" />
        
        {/* Animated Nebula / Atmosphere Glows */}
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-blue-900/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-900/20 rounded-full blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Mouse Reactive Spotlight */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) => `radial-gradient(circle at ${50 + (x as number) * 25}% ${50 + (y as number) * 25}%, rgba(197,160,89,0.15) 0%, transparent 50%)`
            )
          }}
        />

        {/* Orbital Paths (Technical/Professional Graphics) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: `${i * 35}vw`,
                height: `${i * 35}vw`,
                borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                borderWidth: '0.5px',
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 80 + i * 30, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {/* Twinkling Stars & Constellations */}
        {mounted && (
          <motion.div style={{ y: starsY }} className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full opacity-30">
              {constellations.map((c, i) => (
                <motion.line 
                  key={i} 
                  x1={`${c.x1}%`} y1={`${c.y1}%`} 
                  x2={`${c.x2}%`} y2={`${c.y2}%`} 
                  stroke="white" strokeWidth="0.3" 
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </svg>
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                  backgroundColor: star.color,
                  boxShadow: star.size > 1.5 ? `0 0 8px 2px ${star.color}66` : 'none',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Shooting Stars (Polished Animation) */}
        {mounted && [...Array(4)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '150px',
              top: `${10 + i * 25}%`,
              left: '-10%',
              rotate: '-25deg',
              opacity: 0,
            }}
            animate={{
              x: ['0vw', '120vw'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 10 + Math.random() * 7,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <motion.div 
        className="section-container relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full"
              >
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Global Infrastructure Layer
                </span>
              </motion.div>
              <div className="h-px w-12 bg-brand-gold/30" />
            </div>

            <h1 className="text-6xl md:text-9xl font-bold text-white leading-[0.88] tracking-tighter mb-10 text-balance">
              The Infrastructure <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-gold/50">
                Powering Modern Travel
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-14 max-w-3xl text-balance font-light">
              A unified global platform connecting travelers, hospitality leaders, and the creator economy — engineered for scale, security, and borderless growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#platform" className="relative group overflow-hidden bg-brand-gold text-brand-blue px-12 py-6 rounded-sm font-bold text-lg transition-all shadow-[0_20px_50px_rgba(242,125,38,0.2)] flex items-center justify-center gap-3">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore the Ecosystem
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a href="#insights" className="group relative bg-white/5 hover:bg-white/10 border border-white/20 text-white px-12 py-6 rounded-sm font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-3 overflow-hidden">
                <span className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">View Investor Overview</span>
                <FileText className="relative z-10 w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-24 pt-10 border-t border-white/10 flex flex-wrap gap-x-16 gap-y-8"
            >
              {[
                { label: "Global Hubs", value: "12+" },
                { label: "Hotel Partners", value: "10K+" },
                { label: "Uptime SLA", value: "99.99%" },
                { label: "Data Security", value: "PCI DSS" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
