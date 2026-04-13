"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart as RechartsPieChart,
  Cell
} from "recharts";
import { 
  Rocket,
  BookOpen,
  ChevronDown,
  Download,
  LayoutDashboard,
  Globe, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Network, 
  ArrowRight, 
  ChevronRight,
  Building2,
  Cpu,
  Database,
  TrendingUp,
  Award,
  Lock,
  FileText,
  Layers,
  Workflow,
  Activity,
  DollarSign,
  Calendar,
  Target,
  Folder,
  ArrowUpRight,
  Hotel,
  Settings,
  PieChart,
  Map
} from "lucide-react";

const InvestorDashboard = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'overview' | 'fundraising' | 'dataroom'>('metrics');
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['Company & Vision']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  // Simulated Live Data for Metabase
  const gmvData = [
    { month: 'Jan', value: 2.1 }, { month: 'Feb', value: 2.4 }, { month: 'Mar', value: 2.8 },
    { month: 'Apr', value: 3.2 }, { month: 'May', value: 3.8 }, { month: 'Jun', value: 4.5 },
    { month: 'Jul', value: 5.2 }, { month: 'Aug', value: 6.1 }, { month: 'Sep', value: 7.2 },
    { month: 'Oct', value: 8.5 }, { month: 'Nov', value: 9.8 }, { month: 'Dec', value: 11.2 }
  ];

  const revenueByGeo = [
    { name: 'India', value: 65, color: '#003580' },
    { name: 'Bangladesh', value: 20, color: '#E4B613' },
    { name: 'Europe', value: 10, color: '#0056b3' },
    { name: 'Others', value: 5, color: '#f8f9fa' }
  ];

  const revenueByProduct = [
    { name: 'Marketplace', value: 55, color: '#003580' },
    { name: 'PMS SaaS', value: 30, color: '#E4B613' },
    { name: 'Payments', value: 15, color: '#0056b3' }
  ];

  const funnelMetrics = [
    { step: 'Website Visits', value: '2.4M', conversion: '100%' },
    { step: 'Search', value: '850K', conversion: '35.4%' },
    { step: 'Booking', value: '154K', conversion: '18.1%' },
    { step: 'Payment', value: '148K', conversion: '96.1%' }
  ];

  const operationalMetrics = [
    { label: "Hotel Acquisition", value: "420", sub: "Pipeline", trend: "+12%" },
    { label: "Conversion Rate", value: "8.4%", sub: "Sales Funnel", trend: "+1.2%" },
    { label: "Support Volume", value: "1.2K", sub: "Tickets/Mo", trend: "-15%" },
    { label: "Resolution Time", value: "4.2h", sub: "Avg. Time", trend: "-0.8h" }
  ];

  const targetInvestors = [
    { name: 'Lightspeed', range: '$5M – $50M' },
    { name: 'India Quotient', range: '$1M – $10M' },
    { name: 'Anicut Capital', range: '$2M – $15M' },
    { name: 'Hiro Mashita / Global Funds', range: '$5M+' }
  ];

  const exitStrategy = [
    { 
      title: "Strategic Acquisition", 
      desc: "Potential acquirers: Global OTAs (Booking, Expedia, Airbnb), Travel SaaS leaders, or Payment players.", 
      icon: <Target className="w-5 h-5" /> 
    },
    { 
      title: "Strategic Merger", 
      desc: "Merge with a global travel infra platform to create a dominant distribution network.", 
      icon: <Layers className="w-5 h-5" /> 
    },
    { 
      title: "IPO", 
      desc: "Target timeline: 5–8 years. Trigger: strong global presence + predictable revenue.", 
      icon: <TrendingUp className="w-5 h-5" /> 
    }
  ];

  const liveFeed = [
    { id: 1, type: "Booking", location: "Paris, France", value: "$840", time: "2 mins ago", hotel: "L'Hôtel de Ville" },
    { id: 2, type: "New Property", location: "Dhaka, Bangladesh", value: "Boutique Hotel", time: "15 mins ago", hotel: "The Westin" },
    { id: 3, type: "Booking", location: "London, UK", value: "$1,250", time: "24 mins ago", hotel: "The Savoy" },
    { id: 4, type: "Payment", location: "Mumbai, India", value: "$420", time: "45 mins ago", hotel: "Taj Palace" }
  ];

  const roadmap = [
    { quarter: 'Q2 2026', title: 'PMS 3.0 Launch', status: 'In Progress', desc: 'Next-gen automation & AI pricing engine.' },
    { quarter: 'Q3 2026', title: 'European Expansion', status: 'Planned', desc: 'Onboarding 500+ boutique hotels in EU.' },
    { quarter: 'Q4 2026', title: 'B2B API Marketplace', status: 'Planned', desc: 'Direct inventory access for global OTAs.' }
  ];

  const comparisonMetrics = [
    { label: 'GMV', current: '$3.8M', last: '$3.2M', growth: '+18.7%' },
    { label: 'Net Revenue', current: '$580K', last: '$490K', growth: '+18.3%' },
    { label: 'Active Hotels', current: '8,920', last: '8,450', growth: '+5.5%' },
    { label: 'Active Travelers', current: '450K', last: '410K', growth: '+9.7%' }
  ];

  const dataRoom = [
    {
      name: "Company & Vision",
      files: ["Executive Summary.pdf", "Vision & Roadmap 2026.pdf", "Market Opportunity Analysis.pdf"]
    },
    {
      name: "Financials",
      files: ["P&L Statements L24M.xlsx", "Balance Sheet 2025.pdf", "Cash Flow Projections.xlsx", "Audit Report 2024.pdf"]
    },
    {
      name: "Metrics",
      files: ["Unit Economics Deep Dive.pdf", "Cohort Analysis Q4.xlsx", "Retention Metrics.pdf"]
    },
    {
      name: "Product & Tech",
      files: ["Tech Stack Overview.pdf", "PMS Architecture.pdf", "API Documentation.pdf", "Security & Compliance.pdf"]
    },
    {
      name: "Legal",
      files: ["Certificate of Incorporation.pdf", "IP Portfolio.pdf", "Shareholder Agreement.pdf"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col md:flex-row font-sans text-slate-900">
      {/* Sidebar - Notion Style */}
      <aside className="md:w-72 bg-[#F7F7F5] border-r border-slate-200 p-6 flex flex-col sticky top-0 h-screen z-20">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
          <div>
            <h1 className="font-bold text-sm tracking-tight text-brand-blue">MyTravaly</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Investor Portal</p>
          </div>
        </div>

        <nav className="space-y-1 flex-1">
          {[
            { id: 'metrics', label: 'Live Metrics', icon: <Activity className="w-4 h-4" /> },
            { id: 'overview', label: 'Company Overview', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'fundraising', label: 'Fundraising', icon: <Rocket className="w-4 h-4" /> },
            { id: 'dataroom', label: 'Data Room', icon: <Folder className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all font-medium text-sm ${activeTab === tab.id ? 'bg-white shadow-sm border border-slate-200 text-brand-blue' : 'text-slate-600 hover:bg-slate-200/50'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-200">
          <div className="px-3 py-4 bg-white/50 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs">HR</div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate">Hamlet Roy</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full mt-4 py-2 text-slate-400 hover:text-brand-blue text-xs font-medium transition-colors flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-3 h-3 rotate-180" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 z-10 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <LayoutDashboard className="w-4 h-4" />
            <span>Investor Dashboard</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-medium capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
              <Download className="w-3 h-3" /> PDF
            </button>
            <button className="px-4 py-1.5 bg-brand-blue text-white rounded-lg text-xs font-bold hover:bg-brand-blue/90 transition-all shadow-sm">
              Schedule Call
            </button>
          </div>
        </header>

        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'metrics' && (
              <motion.div 
                key="metrics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                {/* Metabase Style Metrics */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">MyTravaly Investor Live Metrics</h2>
                      <p className="text-sm text-slate-500">Real-time GMV and Revenue tracking (Powered by Metabase)</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      { label: "Total GMV", value: "$42.5M", trend: "+124%", sub: "Monthly: $3.8M" },
                      { label: "Net Revenue", value: "$6.8M", trend: "+85%", sub: "Monthly: $580K" },
                      { label: "MoM Growth", value: "18.5%", trend: "Stable", sub: "Avg. Last 6M" },
                      { label: "Total Bookings", value: "154K", trend: "+92%", sub: "Daily Avg: 420" }
                    ].map((m, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                      >
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{m.label}</p>
                        <div className="text-3xl font-bold text-brand-blue mb-1">{m.value}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-500">{m.trend}</span>
                          <span className="text-[10px] text-slate-400">{m.sub}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Supply Metrics (Hotels) */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">
                        <Hotel className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Supply Metrics (Hotels)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { label: "Total Onboarded", value: "12,450", trend: "+15%", sub: "Hotels" },
                        { label: "Active Hotels", value: "8,820", trend: "71%", sub: "Utilization" },
                        { label: "Inventory (Rooms)", value: "184K", trend: "+22%", sub: "Total Keys" },
                        { label: "Hotel Retention", value: "94.2%", trend: "High", sub: "Annualized" }
                      ].map((m, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                          className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all border-l-4 border-l-brand-gold"
                        >
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{m.label}</p>
                          <div className="text-2xl font-bold text-brand-blue mb-1">{m.value}</div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-brand-gold">{m.trend}</span>
                            <span className="text-[10px] text-slate-400">{m.sub}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">GMV Growth (L12M)</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={gmvData}>
                            <defs>
                              <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#003580" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#003580" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                            <Tooltip 
                              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#003580" strokeWidth={3} fillOpacity={1} fill="url(#colorGmv)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Monthly Booking Volume</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={[
                            { month: 'Jan', count: 4200 }, { month: 'Feb', count: 4800 }, { month: 'Mar', count: 5600 },
                            { month: 'Apr', count: 6400 }, { month: 'May', count: 7600 }, { month: 'Jun', count: 9000 },
                            { month: 'Jul', count: 10400 }, { month: 'Aug', count: 12200 }, { month: 'Sep', count: 14400 },
                            { month: 'Oct', count: 17000 }, { month: 'Nov', count: 19600 }, { month: 'Dec', count: 22400 }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                            <Tooltip 
                              cursor={{fill: '#f8fafc'}}
                              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="count" fill="#E4B613" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Supply & Demand */}
                <section className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-blue mb-6 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-brand-gold" /> Supply Metrics (Hotels)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Onboarded", value: "12,450", sub: "Global" },
                        { label: "Active Properties", value: "8,920", sub: "72% Activity" },
                        { label: "Inventory (Rooms)", value: "245K", sub: "Total Capacity" },
                        { label: "Hotel Retention", value: "94%", sub: "Annual" }
                      ].map((m, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{m.label}</p>
                          <div className="text-xl font-bold text-brand-blue">{m.value}</div>
                          <p className="text-[10px] text-slate-500">{m.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-blue mb-6 flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-gold" /> Demand Metrics (Travelers)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Users", value: "1.2M", sub: "Registered" },
                        { label: "Monthly Active", value: "450K", sub: "38% MAU" },
                        { label: "Repeat Rate", value: "42%", sub: "High Loyalty" },
                        { label: "CAC (Traveler)", value: "$12.40", sub: "Blended" }
                      ].map((m, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{m.label}</p>
                          <div className="text-xl font-bold text-brand-blue">{m.value}</div>
                          <p className="text-[10px] text-slate-500">{m.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Unit Economics & Revenue */}
                <section className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-blue mb-6 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-brand-gold" /> Unit Economics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "CAC (Hotel)", value: "$450", sub: "Manual/CRM Sync" },
                        { label: "LTV (Hotel)", value: "$12,400", sub: "Auto-calculated" },
                        { label: "LTV/CAC Ratio", value: "27.5x", sub: "Industry Leading" },
                        { label: "Contribution Margin", value: "68%", sub: "Gross Margin" }
                      ].map((m, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{m.label}</p>
                          <div className="text-xl font-bold text-brand-blue">{m.value}</div>
                          <p className="text-[10px] text-slate-500">{m.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-blue mb-6 flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-brand-gold" /> Revenue Breakdown
                    </h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">By Geography</p>
                        {revenueByGeo.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold">
                              <span>{item.name}</span>
                              <span>{item.value}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">By Product</p>
                        {revenueByProduct.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold">
                              <span>{item.name}</span>
                              <span>{item.value}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Funnel Metrics */}
                <section className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-blue mb-8 flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-brand-gold" /> Funnel Metrics
                  </h3>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {funnelMetrics.map((m, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex-1 w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center relative">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{m.step}</p>
                          <div className="text-2xl font-bold text-brand-blue mb-1">{m.value}</div>
                          <p className="text-[10px] text-emerald-500 font-bold">{m.conversion}</p>
                        </div>
                        {idx < funnelMetrics.length - 1 && (
                          <div className="hidden md:block">
                            <ArrowRight className="w-4 h-4 text-slate-300" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </section>

                {/* Live Feed */}
                <section className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-brand-blue flex items-center gap-2">
                      <Zap className="w-5 h-5 text-brand-gold animate-pulse" /> Live Ecosystem Feed
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">System Online</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                          <th className="pb-4">Event Type</th>
                          <th className="pb-4">Location</th>
                          <th className="pb-4">Value / Detail</th>
                          <th className="pb-4">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {liveFeed.map((item, idx) => (
                          <tr key={idx} className="border-b border-slate-50 group hover:bg-slate-50 transition-colors">
                            <td className="py-4 font-bold text-brand-blue flex items-center gap-2">
                              {item.type === 'Booking' ? <Activity className="w-3 h-3 text-emerald-500" /> : <Hotel className="w-3 h-3 text-brand-gold" />}
                              {item.type}
                            </td>
                            <td className="py-4 text-slate-600">{item.location}</td>
                            <td className="py-4 font-bold text-slate-900">{item.value}</td>
                            <td className="py-4 text-slate-400 text-xs">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12 max-w-4xl"
              >
                <section className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue">
                      <LayoutDashboard className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Snapshot</h2>
                      <p className="text-slate-500">The core narrative and high-level performance.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current GMV</p>
                      <div className="text-2xl font-bold text-brand-blue">$42.5M</div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Net Revenue</p>
                      <div className="text-2xl font-bold text-brand-blue">$6.8M</div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Hotels</p>
                      <div className="text-2xl font-bold text-brand-blue">10K+</div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Runway</p>
                      <div className="text-2xl font-bold text-emerald-500">24M</div>
                    </div>
                  </div>

                  <div className="mt-10 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-brand-gold" /> Our Vision
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Building the global travel infrastructure for independent hotels. We are moving from a booking marketplace to a full-stack hospitality operating system, enabling borderless hospitality technology from India to the world.
                      </p>
                    </div>
                  </div>
                </section>

                {/* System Architecture */}
                <section className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-xl font-bold text-brand-blue flex items-center gap-2">
                      <Network className="w-6 h-6 text-brand-gold" /> System Architecture
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20">
                      <Database className="w-10 h-10 text-brand-blue mb-6" />
                      <h4 className="font-bold text-slate-900 mb-4">Data Sources</h4>
                      <p className="text-xs text-slate-500">Unified data layer connecting all hospitality modules.</p>
                    </div>
                    <div className="p-8 bg-brand-blue text-white rounded-2xl border border-brand-blue shadow-2xl shadow-brand-blue/30 flex flex-col items-center justify-center text-center">
                      <Cpu className="w-10 h-10 text-brand-gold mb-6" />
                      <h4 className="font-bold text-xl mb-2">Processing Engine</h4>
                      <p className="text-xs text-white/70">Real-time sync & AI-driven optimization.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20">
                      <LayoutDashboard className="w-10 h-10 text-brand-gold mb-6" />
                      <h4 className="font-bold text-slate-900 mb-4">Control Layer</h4>
                      <p className="text-xs text-slate-500">Intuitive dashboards for operational excellence.</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'fundraising' && (
              <motion.div 
                key="fundraising"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12 max-w-4xl"
              >
                <section className="p-10 bg-brand-blue text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Current Round: Series A</span>
                    <h2 className="text-4xl font-bold mb-10 leading-tight">Fueling Global Travel Infrastructure</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Round Size</p>
                        <div className="text-3xl font-bold text-brand-gold">$15M</div>
                      </div>
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Equity Offered</p>
                        <div className="text-3xl font-bold text-white">12-15%</div>
                      </div>
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Target Valuation</p>
                        <div className="text-3xl font-bold text-white">$100M+</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                    <ArrowUpRight className="w-6 h-6 text-brand-gold" /> Investor Exit Strategy
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {exitStrategy.map((strategy, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-4">
                          {strategy.icon}
                        </div>
                        <h4 className="font-bold text-brand-blue mb-2">{strategy.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{strategy.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'dataroom' && (
              <motion.div 
                key="dataroom"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl space-y-4"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Secure Data Room</h2>
                    <p className="text-sm text-slate-500">Confidential documents for due diligence.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
                    <Lock className="w-3 h-3" /> Encrypted Access
                  </div>
                </div>

                {dataRoom.map((folder, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-brand-gold/30 transition-all">
                    <button 
                      onClick={() => toggleFolder(folder.name)}
                      className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold/5 rounded-xl flex items-center justify-center text-brand-gold">
                          <Folder className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-brand-blue">{folder.name}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{folder.files.length} Documents</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform duration-500 ${expandedFolders.includes(folder.name) ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedFolders.includes(folder.name) && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-slate-50"
                        >
                          <div className="p-2 space-y-1">
                            {folder.files.map((file, fIdx) => (
                              <div key={fIdx} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-all group cursor-pointer">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-4 h-4 text-slate-400 group-hover:text-brand-gold transition-colors" />
                                  <span className="text-sm text-slate-600 font-medium">{file}</span>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-brand-blue transition-all">
                                    <Download className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default InvestorDashboard;
