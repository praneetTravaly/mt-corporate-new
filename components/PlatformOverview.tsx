"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Database, 
  BarChart3, 
  Cpu, 
  TrendingUp, 
  Layout, 
  Monitor, 
  Workflow, 
  Users, 
  Smartphone, 
  Link, 
  CreditCard, 
  Settings,
  X,
  Network,
  ArrowRight
} from "lucide-react";

export interface ProductDetail {
  id: string;
  name: string;
  shortDesc: string;
  title: string;
  heroDescription: string;
  corePositioning: string;
  features: {
    title: string;
    content: string;
    icon: ReactNode;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  cta: string;
  secondaryCta: string;
  color: string;
  logo?: ReactNode;
}

export const productDetails: Record<string, ProductDetail> = {
  "MT OTA": {
    id: "mt-ota",
    name: "MT OTA",
    shortDesc: "A global travel marketplace engineered for seamless discovery, secure payments, and intelligent booking experiences.",
    title: "The Intelligence Layer Behind Modern Travel",
    heroDescription: "Built for the globally mobile traveler, our marketplace integrates real-time availability, transparent pricing, secure multi-currency transactions, and instant confirmations into a frictionless digital journey.",
    corePositioning: "MyTravaly OTA is not just a booking site. It is a demand-side operating system designed for trust, speed, and global scale.",
    features: [
      { title: "Global Inventory", content: "Access verified properties across 190+ countries.", icon: <Globe className="w-5 h-5" /> },
      { title: "Secure Payments", content: "Multi-currency checkout with instant confirmation.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Smart Comparison", content: "AI-driven price and value intelligence for travelers.", icon: <Zap className="w-5 h-5" /> },
      { title: "Instant Confirmation", content: "Real-time sync with global property inventory.", icon: <Activity className="w-5 h-5" /> }
    ],
    stats: [
      { label: "Active Travelers", value: "1M+" },
      { label: "Verified Stays", value: "10,000+" },
      { label: "Markets", value: "Global" }
    ],
    cta: "Explore Global Stays",
    secondaryCta: "Create Your Account",
    color: "blue",
    logo: <Globe className="w-6 h-6 text-brand-gold" />
  },
  "Swoovo": {
    id: "swoovo",
    name: "Swoovo",
    shortDesc: "An intelligent supply aggregation engine powering OTAs and travel enterprises with scalable, margin-optimized inventory.",
    title: "Intelligent Supply. Optimized Margins.",
    heroDescription: "Swoovo is a high-performance supply intelligence engine that aggregates, normalizes, and optimizes hotel inventory across global sources for travel enterprises.",
    corePositioning: "Built for OTAs and travel platforms, Swoovo enhances rate competitiveness and enables scalable expansion into new markets.",
    features: [
      { title: "Supply Aggregation", content: "Unified access to global hotel inventory sources.", icon: <Database className="w-5 h-5" /> },
      { title: "Margin Optimization", content: "Real-time pricing intelligence to maximize profitability.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "API Connectivity", content: "High-speed, low-latency infrastructure for enterprises.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Market Expansion", content: "Instant access to new regions without operational overhead.", icon: <Globe className="w-5 h-5" /> }
    ],
    stats: [
      { label: "API Uptime", value: "99.99%" },
      { label: "Latency", value: "< 200ms" },
      { label: "Inventory", value: "Global" }
    ],
    cta: "Integrate Supply Intelligence",
    secondaryCta: "Request API Access",
    color: "blue",
    logo: <Cpu className="w-6 h-6 text-brand-gold" />
  },
  "HBC": {
    id: "hbc",
    name: "HBC",
    shortDesc: "AI-driven revenue intelligence and business optimization platform for modern hospitality operators.",
    title: "Predict. Optimize. Lead.",
    heroDescription: "HBC leverages AI-driven forecasting, automated pricing intelligence, and performance analytics to empower hospitality leaders with real-time decision clarity.",
    corePositioning: "From demand prediction to operational efficiency, every insight is designed to increase profitability and strategic control.",
    features: [
      { title: "Revenue Intelligence", content: "AI-driven forecasting and dynamic pricing tools.", icon: <TrendingUp className="w-5 h-5" /> },
      { title: "Business Analytics", content: "Deep insights into property performance and market trends.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Operational Efficiency", content: "Automated workflows to reduce overhead and errors.", icon: <Zap className="w-5 h-5" /> },
      { title: "Strategic Control", content: "Unified dashboard for multi-property management.", icon: <Layout className="w-5 h-5" /> }
    ],
    stats: [
      { label: "Revenue Lift", value: "+24%" },
      { label: "Efficiency Gain", value: "40%" },
      { label: "Decision Speed", value: "Real-time" }
    ],
    cta: "Activate Revenue Intelligence",
    secondaryCta: "Schedule a Demo",
    color: "purple",
    logo: <BarChart3 className="w-6 h-6 text-brand-gold" />
  },
  "Unified PMS": {
    id: "unified-pms",
    name: "Unified PMS",
    shortDesc: "A cloud-native property management system built for operational precision and scalability.",
    title: "Operational Control, Without Complexity",
    heroDescription: "A unified cloud-based PMS designed to streamline reservations, inventory management, staff coordination, and guest lifecycle management.",
    corePositioning: "Designed for single properties and multi-unit portfolios. Automation reduces friction. Intelligence improves performance.",
    features: [
      { title: "Cloud-Native PMS", content: "Access your property operations from anywhere, anytime.", icon: <Monitor className="w-5 h-5" /> },
      { title: "Reservation Engine", content: "Seamless booking management across all channels.", icon: <Workflow className="w-5 h-5" /> },
      { title: "Staff Coordination", content: "Integrated tools for housekeeping and front-desk efficiency.", icon: <Users className="w-5 h-5" /> },
      { title: "Guest Lifecycle", content: "From check-in to check-out, a unified guest experience.", icon: <Smartphone className="w-5 h-5" /> }
    ],
    stats: [
      { label: "Time Saved", value: "40%" },
      { label: "Error Reduction", value: "95%" },
      { label: "Scalability", value: "Unlimited" }
    ],
    cta: "Experience Operational Mastery",
    secondaryCta: "Request a Trial",
    color: "purple",
    logo: <Settings className="w-6 h-6 text-brand-gold" />
  },
  "StayConfirm": {
    id: "stayconfirm",
    name: "StayConfirm",
    shortDesc: "Direct booking technology that transforms hotel websites into high-performance revenue channels.",
    title: "Own the Relationship. Protect the Margin.",
    heroDescription: "StayConfirm empowers hotels to capture direct bookings through secure, real-time availability and multi-currency checkout.",
    corePositioning: "With automated settlements and conversion-focused flows, hotels regain control of distribution and profitability.",
    features: [
      { title: "Direct Booking Engine", content: "Convert website visitors into confirmed guests.", icon: <Link className="w-5 h-5" /> },
      { title: "Automated Settlement", content: "Instant payment processing and secure payouts.", icon: <CreditCard className="w-5 h-5" /> },
      { title: "Refund Management", content: "Structured, automated refund protocols for trust.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Conversion Focus", content: "Optimized checkout flow to reduce abandonment.", icon: <Zap className="w-5 h-5" /> }
    ],
    stats: [
      { label: "Direct Growth", value: "3.2x" },
      { label: "Margin Gain", value: "+12%" },
      { label: "Settlement", value: "Same-Day" }
    ],
    cta: "Strengthen Direct Revenue",
    secondaryCta: "View Case Studies",
    color: "green",
    logo: <ShieldCheck className="w-6 h-6 text-brand-gold" />
  },
  "MT Gateway": {
    id: "mt-gateway",
    name: "MT Gateway",
    shortDesc: "A monetization infrastructure empowering travel creators and agents to build independent revenue businesses.",
    title: "Build a Scalable Travel Revenue Engine",
    heroDescription: "MT Gateway provides creators and independent agents with access to global inventory, customizable markups, and instant confirmations.",
    corePositioning: "Built for the decentralized travel economy — eliminating contract dependency and payment delays.",
    features: [
      { title: "Inventory Access", content: "Promote 10,000+ verified properties worldwide.", icon: <Globe className="w-5 h-5" /> },
      { title: "E-Cash System", content: "Instant confirmations and seamless payment handling.", icon: <Zap className="w-5 h-5" /> },
      { title: "Markup Control", content: "Define your own margins and business model.", icon: <TrendingUp className="w-5 h-5" /> },
      { title: "Transparent Earnings", content: "Real-time tracking and automated payouts.", icon: <ShieldCheck className="w-5 h-5" /> }
    ],
    stats: [
      { label: "Network Size", value: "5,000+" },
      { label: "Payout Speed", value: "Automated" },
      { label: "Global Reach", value: "190+ Countries" }
    ],
    cta: "Launch Your Travel Business",
    secondaryCta: "Explore the Program",
    color: "green",
    logo: <CreditCard className="w-6 h-6 text-brand-gold" />
  }
};

const ProductModal = ({ product, onClose }: { product: ProductDetail; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-blue/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.98, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] relative flex flex-col border border-slate-200"
        onClick={e => e.stopPropagation()}
      >
        {/* System Header */}
        <div className="h-14 border-b border-slate-100 flex items-center justify-between px-8 bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Operational</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Node: {product.id.toUpperCase()}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors group"
          >
            <X className="w-5 h-5 text-slate-400 group-hover:text-brand-blue" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 scrollbar-hide">
          <div className="grid lg:grid-cols-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-8 p-12 md:p-16 space-y-16">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl shrink-0 ${
                    product.color === 'blue' ? 'bg-blue-600 text-white' : 
                    product.color === 'purple' ? 'bg-purple-600 text-white' : 
                    'bg-green-600 text-white'
                  }`}>
                    {product.logo || <span className="font-bold text-2xl">M</span>}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-6xl font-bold text-brand-blue tracking-tighter leading-none">
                      {product.name}
                    </h3>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
                      {product.title}
                    </p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                  {product.heroDescription}
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Strategic Intent</h4>
                <p className="text-2xl font-bold text-brand-blue leading-tight">
                  {product.corePositioning}
                </p>
              </div>

              {/* Technical Capabilities Grid */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Technical Capabilities</span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="space-y-3 group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          product.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                          product.color === 'purple' ? 'bg-purple-50 text-purple-600' : 
                          'bg-green-50 text-green-600'
                        }`}>
                          {feature.icon}
                        </div>
                        <h5 className="font-bold text-brand-blue text-lg tracking-tight">{feature.title}</h5>
                      </div>
                      <p className="text-slate-500 font-light leading-relaxed text-sm">{feature.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Metrics & Actions */}
            <div className="lg:col-span-4 bg-slate-50/50 p-12 md:p-16 flex flex-col gap-12 border-l border-slate-100">
              
              {/* Operational Status */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operational Status</h4>
                <div className="space-y-4">
                  {[
                    { label: "Deployment", value: "Global Nodes" },
                    { label: "Architecture", value: "Cloud-Native" },
                    { label: "Security", value: "PCI DSS / GDPR" },
                    { label: "Uptime", value: "99.99% SLA" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                      <span className="text-xs text-brand-blue font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-8">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Performance Metrics</h4>
                <div className="space-y-10">
                  {product.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-4xl font-bold text-brand-blue tracking-tighter">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Center Center */}
              <div className="mt-auto space-y-4">
                <button className={`w-full py-5 text-white rounded-xl font-bold transition-all shadow-xl text-lg tracking-tight ${
                  product.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20' : 
                  product.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20' : 
                  'bg-green-600 hover:bg-green-700 shadow-green-600/20'
                }`}>
                  {product.cta}
                </button>
                <button className="w-full py-5 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-white hover:text-brand-blue transition-all text-lg tracking-tight">
                  {product.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="h-12 border-t border-slate-100 bg-slate-50/50 flex items-center justify-center px-8 shrink-0">
          <div className="flex gap-8">
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">Infrastructure Layer: v4.2.0</span>
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">Encryption: AES-256</span>
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">Region: Global Edge</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PlatformOverview = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const pillars = [
    {
      title: "Demand",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      products: ["MT OTA", "Swoovo"]
    },
    {
      title: "Operations",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      products: ["Unified PMS", "HBC"]
    },
    {
      title: "Distribution & Revenue",
      icon: <Network className="w-8 h-8 text-green-500" />,
      products: ["StayConfirm", "MT Gateway"]
    }
  ];

  return (
    <section id="platform" className="bg-slate-50">
      <div className="section-container">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-brand-blue">
            One Platform. Multiple Growth Engines.
          </h2>
          <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
            <p className="font-bold text-brand-blue">MyTravaly is not a single solution.</p>
            <p>
              It is a connected travel operating system powering distribution, operations, payments, and revenue intelligence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold leading-tight text-brand-blue">{pillar.title}</h3>
              </div>
              
              <div className="space-y-6">
                {pillar.products.map((productName, pIdx) => {
                  const product = productDetails[productName];
                  return (
                    <motion.div 
                      key={pIdx}
                      whileHover={{ y: -5 }}
                      className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      <h4 className="text-lg font-bold mb-3 text-brand-blue group-hover:text-brand-gold transition-colors">{product.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">{product.shortDesc}</p>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-blue transition-colors group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlatformOverview;
