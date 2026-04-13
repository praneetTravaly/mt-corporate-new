"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  X, 
  Calendar, 
  CheckCircle2 
} from "lucide-react";

export const insightsData = [
  { 
    title: "The Future of AI in Hospitality Distribution", 
    date: "March 2026", 
    category: "Thought Leadership",
    image: "https://picsum.photos/seed/ai-hospitality/800/600",
    content: "The hospitality industry is on the brink of a major transformation driven by Artificial Intelligence. From personalized guest experiences to automated inventory management, AI is reshaping every aspect of the travel ecosystem. At MyTravaly, we are building the infrastructure that allows hotels to leverage these technologies seamlessly, ensuring they stay competitive in an increasingly digital world."
  },
  { 
    title: "Scaling Travel Infrastructure Across Emerging Markets", 
    date: "February 2026", 
    category: "Industry Commentary",
    image: "https://picsum.photos/seed/scaling-travel/800/600",
    content: "Emerging markets represent the next frontier for global travel. However, the lack of robust digital infrastructure remains a significant barrier to growth. Our mission is to bridge this gap by providing a unified platform that connects local hospitality providers with global distribution networks, unlocking massive economic potential in regions like South Asia and Southeast Asia."
  },
  { 
    title: "Annual Growth Report: 2025 Milestones", 
    date: "January 2026", 
    category: "Product Innovation",
    image: "https://picsum.photos/seed/growth-report/800/600",
    content: "2025 was a landmark year for MyTravaly. We successfully onboarded over 5,000 new properties, launched our next-gen PMS 2.0, and expanded our footprint into three new international markets. This report highlights our key achievements, financial performance, and the strategic roadmap that will guide our innovation in the coming year."
  },
  { 
    title: "The Rise of Boutique Hotels in Post-Pandemic Travel", 
    date: "December 2025", 
    category: "Market Trends",
    image: "https://picsum.photos/seed/boutique-hotel/800/600",
    content: "Travelers are increasingly seeking unique, localized experiences over standardized hotel chains. This shift has led to a surge in demand for boutique hotels. We explore how technology is enabling these smaller players to compete on a global scale while maintaining their authentic charm."
  },
  { 
    title: "Unified Data: The Secret to Hospitality Efficiency", 
    date: "November 2025", 
    category: "Technical Deep Dive",
    image: "https://picsum.photos/seed/data-efficiency/800/600",
    content: "Data fragmentation is one of the biggest challenges facing modern hospitality groups. By unifying data across booking engines, property management systems, and guest feedback loops, hotels can gain unprecedented insights into their operations and guest preferences."
  },
  { 
    title: "MyTravaly's Vision for a Borderless Travel Ecosystem", 
    date: "October 2025", 
    category: "Company Vision",
    image: "https://picsum.photos/seed/borderless-travel/800/600",
    content: "We believe that travel should be borderless, not just geographically, but technologically. Our vision is to create a world where any traveler can find and book any property, anywhere, with total confidence and ease, powered by a single, invisible layer of intelligent infrastructure."
  }
];

export const FullArticleModal = ({ article, onClose }: { article: any, onClose: () => void }) => {
  if (!article) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-6 h-6 text-brand-blue" />
        </button>
        
        <div className="aspect-video w-full">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="p-8 md:p-16">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4 block">{article.category}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-blue leading-tight">{article.title}</h2>
          <div className="flex items-center gap-4 mb-12 text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {article.date}
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div>By MyTravaly Editorial</div>
          </div>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
              {article.content}
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              In this deep dive, we explore the underlying factors that make this topic so critical for the future of the travel industry. Our research indicates that organizations that adapt early to these changes will see a significant competitive advantage in the coming decade.
            </p>
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Key Takeaways</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-slate-600">Strategic alignment with emerging technologies is no longer optional.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-slate-600">Infrastructure scalability remains the primary bottleneck for global expansion.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-slate-600">Unified data layers are essential for operational excellence in hospitality.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AllInsightsPage = ({ onBack, onSelectArticle }: { onBack: () => void, onSelectArticle: (article: any) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="section-container">
        <button onClick={onBack} className="flex items-center gap-2 text-brand-blue font-bold mb-12 hover:text-brand-gold transition-all group">
          <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        
        <div className="mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Archive</span>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-blue tracking-tighter">All Insights & Perspectives</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectArticle(item)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">{item.category}</span>
                <h3 className="text-xl font-bold mb-6 text-brand-blue leading-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <div className="text-slate-400 text-sm font-medium">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InsightsSection = ({ onViewAll, onSelectArticle }: { onViewAll: () => void, onSelectArticle: (article: any) => void }) => {
  const featuredInsights = insightsData.slice(0, 3);

  return (
    <section id="insights" className="bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Insights & Media</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Insights & Market Perspectives</h2>
            <p className="text-xl text-slate-600 font-light">
              Stay informed with company updates, industry commentary, innovation milestones, and media coverage.
            </p>
          </div>
          <button 
            onClick={onViewAll}
            className="text-brand-blue font-bold flex items-center gap-2 group hover:text-brand-gold transition-colors"
          >
            View All Insights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredInsights.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onSelectArticle(item)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">{item.category}</span>
                <h3 className="text-xl font-bold mb-6 text-brand-blue leading-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <div className="text-slate-400 text-sm font-medium">{item.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-brand-blue italic">We don’t just participate in travel’s evolution — we shape it.</p>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
