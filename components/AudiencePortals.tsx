"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  X, 
  MessageSquare, 
  ArrowUpRight, 
  FileText, 
  QrCode, 
  Lock, 
  Smartphone, 
  ShieldCheck, 
  Activity, 
  Globe, 
  Database, 
  Workflow,
  TrendingUp,
  Users,
  Briefcase,
  Zap,
  BarChart3,
  PieChart as PieChartIcon,
  Layers,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar, 
  PieChart, 
  Cell,
  Pie
} from "recharts";

export interface PortalDetail {
  id: string;
  title: string;
  corePositioning: string;
  sections: {
    title: string;
    content: string;
    icon: React.ReactNode;
  }[];
  cta: string;
  secondaryCta: string;
  ctaUrl?: string;
  qrCodeUrl?: string;
  communitySection?: {
    title: string;
    label: string;
    link: string;
    icon: React.ReactNode;
  };
  quote?: string;
}

export const portalDetails: Record<string, PortalDetail> = {
  "Travelers": {
    id: "travelers",
    title: "Travelers Portal",
    corePositioning: "Frictionless discovery. Confident booking. Global access.",
    sections: [
      { title: "Smart Comparison", content: "Compare 1M+ stays across global markets with real-time pricing intelligence.", icon: <Zap className="w-6 h-6" /> },
      { title: "Verified Stays", content: "Every property is audited for quality and reliability through our StayConfirm protocol.", icon: <ShieldCheck className="w-6 h-6" /> },
      { title: "Unified Checkout", content: "Secure, multi-currency payments with instant confirmation and structured support.", icon: <Lock className="w-6 h-6" /> }
    ],
    cta: "Start Your Journey",
    secondaryCta: "Download Mobile App",
    ctaUrl: "https://mytravaly.com",
    qrCodeUrl: "https://mytravaly.com/app",
    quote: "The easiest way to find and book verified stays globally. Confident travel starts here."
  },
  "Hospitality Leaders": {
    id: "hoteliers",
    title: "Hospitality Leaders Portal",
    corePositioning: "The Operating System for Modern Hospitality.",
    sections: [
      { title: "Global Distribution", content: "Connect to 100+ demand channels through a single, intelligent gateway.", icon: <Globe className="w-6 h-6" /> },
      { title: "Revenue Intelligence", content: "AI-driven pricing suggestions and market demand forecasting to maximize ADR.", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Operational OS", content: "A unified PMS to manage reservations, guests, and staff from any device.", icon: <Workflow className="w-6 h-6" /> }
    ],
    cta: "List Your Property",
    secondaryCta: "Request Platform Demo",
    ctaUrl: "https://mytravaly.com/partner",
    communitySection: {
      title: "Join the Community",
      label: "Hospitality Business Community (HBC)",
      link: "https://hbc.mytravaly.com",
      icon: <Users className="w-6 h-6" />
    }
  },
  "Travel Creators & Agents": {
    id: "creators",
    title: "Creators & Agents Portal",
    corePositioning: "Turn Influence into Infrastructure.",
    sections: [
      { title: "Inventory Access", content: "Access 10,000+ verified properties with margin-controlled pricing.", icon: <Database className="w-6 h-6" /> },
      { title: "Booking Engine", content: "Deploy your own branded booking engine to your audience in minutes.", icon: <Zap className="w-6 h-6" /> },
      { title: "Automated Payouts", content: "Transparent commission tracking and automated global payouts.", icon: <TrendingUp className="w-6 h-6" /> }
    ],
    cta: "Join Creator Network",
    secondaryCta: "Learn More",
    ctaUrl: "https://mytravaly.com/creator",
    quote: "Finally, a platform that gives creators the tools to build a real travel business."
  },
  "Enterprise & OTAs": {
    id: "enterprise",
    title: "Enterprise & OTA Portal",
    corePositioning: "Supply-Side Infrastructure for Global Platforms.",
    sections: [
      { title: "Inventory API", content: "Integrate our verified global supply into your existing platform via robust APIs.", icon: <Layers className="w-6 h-6" /> },
      { title: "Pricing Intelligence", content: "Access real-time market data and pricing signals across 190+ markets.", icon: <BarChart3 className="w-6 h-6" /> },
      { title: "Scalable Settlement", content: "Enterprise-grade financial settlement and multi-currency reconciliation.", icon: <Workflow className="w-6 h-6" /> }
    ],
    cta: "Contact Enterprise Sales",
    secondaryCta: "API Documentation",
    ctaUrl: "mailto:enterprise@mytravaly.com"
  },
  "Investors": {
    id: "investors",
    title: "Investor Strategic Portal",
    corePositioning: "Scaling the Foundation of Global Travel Technology.",
    sections: [
      { title: "Market Opportunity", content: "Positioned at the intersection of $2T hospitality market and emerging tech.", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Growth Traction", content: "140% YoY revenue growth with positive unit economics and global scale.", icon: <Activity className="w-6 h-6" /> },
      { title: "Tech Moat", content: "Proprietary unified stack spanning supply, distribution, and consumer layers.", icon: <ShieldCheck className="w-6 h-6" /> }
    ],
    cta: "Investor Access",
    secondaryCta: "Download Pitch Deck"
  }
};

const tractions = [
  { 
    label: "Partner Growth", 
    value: "10k+", 
    trend: "+140%", 
    icon: <Users className="w-6 h-6" />,
    color: "#F27D26",
    data: [{val: 20}, {val: 45}, {val: 30}, {val: 80}, {val: 60}, {val: 95}]
  },
  { 
    label: "Booking Volume", 
    value: "1M+", 
    trend: "+85%", 
    icon: <Globe className="w-6 h-6" />,
    color: "#0A0B0E",
    data: [{val: 30}, {val: 20}, {val: 50}, {val: 40}, {val: 90}, {val: 75}]
  },
  { 
    label: "Market Reach", 
    value: "190+", 
    trend: "Global", 
    icon: <Activity className="w-6 h-6" />,
    color: "#F27D26",
    data: [{val: 40}, {val: 60}, {val: 45}, {val: 70}, {val: 55}, {val: 85}]
  },
  { 
    label: "Tech Uptime", 
    value: "99.9%", 
    trend: "Stable", 
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "#0A0B0E",
    data: [{val: 99}, {val: 99.5}, {val: 99.2}, {val: 99.9}, {val: 99.8}, {val: 99.9}]
  }
];

const PortalModal = ({ portal, onClose }: { portal: PortalDetail; onClose: () => void }) => {
  const [view, setView] = useState<'overview' | 'auth-choice' | 'login' | 'register' | 'dashboard'>('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'dashboard' && portal.id === 'investors') {
      setView('dashboard');
      setIsLoggedIn(true);
    }
  }, [portal.id]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setView('dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-brand-blue/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Sidebar: Portal Identity */}
        <div className="md:w-1/3 bg-slate-50 p-10 md:p-16 border-r border-slate-100 flex flex-col relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-brand-blue rounded-2xl flex items-center justify-center text-brand-gold shadow-lg rotate-3">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">Secure Access</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight tracking-tight">
              {portal.title}
            </h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
              Access the specialized infrastructure and tools designed for your segment of the travel ecosystem.
            </p>

            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Security Status</div>
                  <div className="text-xs font-bold text-brand-blue">End-to-End Encrypted</div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                By accessing this portal, you agree to our professional terms of service and data governance protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:w-2/3 bg-white flex flex-col overflow-y-auto relative">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 hover:bg-slate-100 rounded-full transition-colors z-50 bg-white/80 backdrop-blur-sm"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>

          {view === 'overview' && (
            <div className="p-10 md:p-20 space-y-16">
              {portal.id === 'travelers' ? (
                <div className="space-y-12">
                  <div className="aspect-video bg-slate-100 rounded-[32px] overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/travel/1200/800" 
                      alt="Traveler Experience" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                          <Activity className="w-6 h-6" />
                        </div>
                        <p className="text-white font-medium text-lg">Experience the future of verified travel.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-8">
                    {portal.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue">
                          {section.icon}
                        </div>
                        <h5 className="font-bold text-brand-blue tracking-tight">{section.title}</h5>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <MessageSquare className="w-16 h-16" />
                    </div>
                    <p className="text-xl md:text-2xl text-brand-blue font-light italic leading-relaxed relative z-10">
                      "{portal.quote}"
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Core Positioning */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Strategic Vision</h4>
                    <p className="text-3xl md:text-4xl text-brand-blue font-bold leading-tight tracking-tight">
                      {portal.corePositioning}
                    </p>
                  </div>

                  {/* Sections Grid */}
                  <div className="grid sm:grid-cols-2 gap-12">
                    {portal.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4 group">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                          {section.icon}
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-bold text-brand-blue text-xl tracking-tight">{section.title}</h5>
                          <p className="text-slate-500 font-light leading-relaxed text-sm">{section.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Community Section */}
                  {portal.communitySection && (
                    <div className="pt-12 border-t border-slate-100 space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">{portal.communitySection.title}</h4>
                      <a 
                        href={portal.communitySection.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                      >
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0077B5] shadow-sm group-hover:scale-110 transition-transform">
                          {portal.communitySection.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-brand-blue font-bold group-hover:text-brand-gold transition-colors">
                            {portal.communitySection.label}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-brand-gold transition-colors" />
                      </a>
                    </div>
                  )}

                  {/* Quote Section for non-travelers */}
                  {portal.quote && (
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <MessageSquare className="w-16 h-16" />
                      </div>
                      <p className="text-xl md:text-2xl text-brand-blue font-light italic leading-relaxed relative z-10">
                        "{portal.quote}"
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Action Center */}
              <div className="pt-12 border-t border-slate-100 space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  {portal.id === 'investors' ? (
                    <>
                      <button 
                        onClick={() => setView('auth-choice')}
                        className="flex-1 py-6 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 text-lg"
                      >
                        Investor Access
                      </button>
                      <button 
                        className="flex-1 py-6 border border-slate-200 text-brand-blue rounded-full font-bold hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2"
                      >
                        <FileText className="w-5 h-5" /> Download Pitch Deck
                      </button>
                    </>
                  ) : (
                    <>
                      {portal.ctaUrl ? (
                        <a 
                          href={portal.ctaUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-6 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 text-lg text-center"
                        >
                          {portal.cta}
                        </a>
                      ) : (
                        <button className="flex-1 py-6 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 text-lg">
                          {portal.cta}
                        </button>
                      )}
                      <button className="flex-1 py-6 border border-slate-200 text-brand-blue rounded-full font-bold hover:bg-slate-50 transition-all text-lg">
                        {portal.secondaryCta}
                      </button>
                    </>
                  )}
                </div>

                {/* QR Code Section */}
                {portal.qrCodeUrl && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/20 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-gold/20 transition-colors" />
                    
                    <div className="w-32 h-32 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center relative z-10">
                      <QrCode className="w-full h-full text-brand-blue" />
                      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    </div>
                    
                    <div className="space-y-3 relative z-10 text-center sm:text-left">
                      <h6 className="text-xl font-bold text-brand-blue">Get the Mobile App</h6>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Scan to download for iOS & Android. Experience frictionless travel at your fingertips.
                      </p>
                      <a 
                        href={portal.qrCodeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-3 transition-all"
                      >
                        Or click here to open <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {view === 'auth-choice' && (
            <div className="p-12 md:p-20 flex flex-col justify-center min-h-full">
              <div className="max-w-md mx-auto w-full space-y-10">
                <div className="space-y-4">
                  <button 
                    onClick={() => setView('overview')}
                    className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Overview
                  </button>
                  <h4 className="text-4xl font-bold text-brand-blue tracking-tight">
                    Investor Access
                  </h4>
                  <p className="text-slate-500 font-light">
                    Select your access method to proceed to the strategic data room.
                  </p>
                </div>

                <div className="grid gap-4">
                  <button 
                    onClick={() => setView('login')}
                    className="w-full py-6 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 text-lg"
                  >
                    Sign In to Portal
                  </button>
                  <button 
                    onClick={() => setView('register')}
                    className="w-full py-6 border border-slate-200 text-brand-blue rounded-full font-bold hover:bg-slate-50 transition-all text-lg"
                  >
                    Request New Access
                  </button>
                </div>
              </div>
            </div>
          )}

          {(view === 'login' || view === 'register') && (
            <div className="p-12 md:p-20 flex flex-col justify-center min-h-full">
              <div className="max-w-md mx-auto w-full space-y-10">
                <div className="space-y-4">
                  <button 
                    onClick={() => setView('auth-choice')}
                    className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back
                  </button>
                  <h4 className="text-4xl font-bold text-brand-blue tracking-tight">
                    {view === 'login' ? 'Investor Access' : 'Register for Access'}
                  </h4>
                  <p className="text-slate-500 font-light">
                    {view === 'login' 
                      ? 'Secure portal for global institutional and strategic partners.' 
                      : 'Apply for access to the MyTravaly strategic data room and growth metrics.'}
                  </p>
                </div>

                <form onSubmit={handleAuth} className="space-y-6">
                  {view === 'register' && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                      <input type="text" name="name" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-slate-900" placeholder="John Doe" />
                    </div>
                  )}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Corporate Email</label>
                    <input type="email" name="email" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-slate-900" placeholder="name@firm.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Password</label>
                      {view === 'login' && (
                        <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-blue transition-colors">
                          Forgot Password?
                        </button>
                      )}
                    </div>
                    <input type="password" name="password" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-slate-900" placeholder="••••••••" />
                  </div>

                  {view === 'login' && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Two-Factor Authentication</label>
                        <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Recommended
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="p-4 border border-brand-gold/30 bg-brand-gold/5 rounded-xl flex flex-col items-center gap-2 hover:border-brand-gold transition-all group">
                          <Smartphone className="w-5 h-5 text-brand-blue group-hover:scale-110 transition-transform" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">SMS Code</span>
                        </button>
                        <button type="button" className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex flex-col items-center gap-2 hover:border-brand-gold/30 transition-all group">
                          <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-blue">Auth App</span>
                        </button>
                      </div>
                    </div>
                  )}
                  <button type="submit" className="w-full py-6 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 text-lg">
                    {view === 'login' ? 'Sign In' : 'Request Access'}
                  </button>
                </form>

                <div className="text-center">
                  <button 
                    onClick={() => setView(view === 'login' ? 'register' : 'login')}
                    className="text-sm text-slate-400 hover:text-brand-blue transition-colors"
                  >
                    {view === 'login' ? "Don't have an account? Request access" : "Already have an account? Sign in"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === 'dashboard' && (
            <div className="p-12 md:p-16 space-y-12 relative overflow-hidden">
              {/* Subtle Background Graphics */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0A0B0E_1px,transparent_1px)] [background-size:40px_40px]" />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-gold/20 blur-[120px] rounded-full"
                />
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Global Performance</h4>
                  <p className="text-3xl font-bold text-brand-blue tracking-tight">Traction & Growth</p>
                </div>
                <button className="flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-gold transition-colors">
                  <FileText className="w-4 h-4" /> Download Full Report
                </button>
              </div>

              {/* Traction Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6">
                {tractions.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-6 group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                          {stat.icon}
                        </div>
                        <div className="text-emerald-500 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                          {stat.trend}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-4xl font-bold text-brand-blue tracking-tighter">{stat.value}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                      </div>
                    </div>
                    
                    {/* Sparkline */}
                    <div className="h-12 w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={stat.data}>
                          <defs>
                            <linearGradient id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={stat.color} stopOpacity={0.3}/>
                              <stop offset="95%" stopColor={stat.color} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area 
                            type="monotone" 
                            dataKey="val" 
                            stroke={stat.color} 
                            strokeWidth={2}
                            fillOpacity={1} 
                            fill={`url(#gradient-${idx})`} 
                            isAnimationActive={true}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Detailed Growth Chart */}
              <div className="relative z-10 p-10 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h5 className="text-lg font-bold text-brand-blue">Ecosystem Expansion</h5>
                    <p className="text-xs text-slate-400 font-medium">Monthly growth across primary infrastructure segments.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct Supply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Network Volume</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[
                      { name: 'Jan', supply: 4000, volume: 2400 },
                      { name: 'Feb', supply: 3000, volume: 1398 },
                      { name: 'Mar', supply: 2000, volume: 9800 },
                      { name: 'Apr', supply: 2780, volume: 3908 },
                      { name: 'May', supply: 1890, volume: 4800 },
                      { name: 'Jun', supply: 2390, volume: 3800 },
                      { name: 'Jul', supply: 3490, volume: 4300 },
                    ]}>
                      <defs>
                        <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F27D26" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0A0B0E" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#0A0B0E" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="supply" stroke="#F27D26" strokeWidth={3} fillOpacity={1} fill="url(#colorSupply)" />
                      <Area type="monotone" dataKey="volume" stroke="#0A0B0E" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Revenue Infrastructure Loop */}
              <div className="relative z-10 p-8 bg-brand-blue rounded-3xl text-white space-y-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                  <Activity className="w-full h-full scale-150" />
                </div>
                <div className="relative z-10">
                  <h5 className="text-xl font-bold mb-2">Revenue Infrastructure Loop</h5>
                  <p className="text-white/60 text-sm font-light">Vertical integration driving margin expansion across all segments.</p>
                </div>
                <div className="h-40 flex items-end gap-2 relative z-10">
                  {[40, 60, 45, 70, 55, 90, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-brand-gold/40 hover:bg-brand-gold transition-colors rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Key Partnerships */}
              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Strategic Alliances</h5>
                  <p className="text-lg font-bold text-brand-blue">Key Partnerships</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Global Distribution", icon: <Globe className="w-5 h-5" /> },
                    { name: "Enterprise Cloud", icon: <Database className="w-5 h-5" /> },
                    { name: "Fintech Infra", icon: <ShieldCheck className="w-5 h-5" /> },
                    { name: "Smart Logistics", icon: <Workflow className="w-5 h-5" /> }
                  ].map((partner, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 group cursor-default"
                    >
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-colors">
                        {partner.icon}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-brand-blue transition-colors leading-tight">
                        {partner.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-slate-100 flex justify-between items-center">
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    setView('overview');
                  }}
                  className="text-slate-400 hover:text-brand-blue text-sm font-bold transition-colors"
                >
                  Logout Session
                </button>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Infrastructure Data</span>
                </div>
              </div>
            </div>
          )}

          {/* Editorial Footer */}
          <div className="mt-auto p-12 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
            <div className="flex gap-6">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Global Infrastructure</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Operational Excellence</span>
            </div>
            <div className="w-8 h-px bg-slate-200" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AudiencePortals = () => {
  const [selectedPortal, setSelectedPortal] = useState<PortalDetail | null>(null);

  const portals = [
    { title: "Travelers", desc: "Seamless discovery, intelligent comparison, and confident booking across global stays." },
    { title: "Hospitality Leaders", desc: "AI-driven management, smart distribution, and accelerated revenue growth." },
    { title: "Travel Creators & Agents", desc: "Turn influence into income through margin-controlled global booking access." },
    { title: "Enterprise & OTAs", desc: "Expand supply, optimize pricing intelligence, and scale without friction." },
    { title: "Investors", desc: "A scalable travel infrastructure platform positioned at the intersection of technology and global hospitality." }
  ];

  return (
    <section className="bg-slate-900 text-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Segmented Entry Points
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Built for Every Travel Participant
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portals.map((portal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              onClick={() => setSelectedPortal(portalDetails[portal.title])}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl transition-all group cursor-pointer relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-all" />
              
              <h3 className="text-2xl font-bold mb-4 text-brand-gold group-hover:translate-x-2 transition-transform duration-500">{portal.title}</h3>
              <p className="text-white/60 font-light leading-relaxed mb-8 flex-1">{portal.desc}</p>
              
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-gold/80 group-hover:text-brand-gold transition-colors">
                <span className="relative">
                  Access Portal
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-0.5 bg-brand-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPortal && (
            <PortalModal 
              portal={selectedPortal} 
              onClose={() => setSelectedPortal(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AudiencePortals;
