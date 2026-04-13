"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

// Import components from the components directory
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlatformOverview from "../components/PlatformOverview";
import ScaleSection from "../components/ScaleSection";
import QuoteSection from "../components/QuoteSection";
import TrustedSection from "../components/TrustedSection";
import GovernanceSection from "../components/GovernanceSection";
import AudiencePortals from "../components/AudiencePortals";
import TeamSection from "../components/TeamSection";
import TimelineSection from "../components/TimelineSection";
import InsightsSection, { AllInsightsPage, FullArticleModal } from "../components/InsightsSection";
import ConnectSection from "../components/ConnectSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import InvestorDashboard from "../components/InvestorDashboard";

export default function Page() {
  const [view, setView] = useState<'main' | 'dashboard' | 'insights'>('main');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'dashboard') {
      setView('dashboard');
    }
  }, []);

  if (view === 'dashboard') {
    return <InvestorDashboard />;
  }

  return (
    <div className="font-sans">
      <AnimatePresence>
        {selectedArticle && (
          <FullArticleModal 
            article={selectedArticle} 
            onClose={() => setSelectedArticle(null)} 
          />
        )}
      </AnimatePresence>

      {view === 'insights' ? (
        <>
          <Navbar />
          <AllInsightsPage 
            onBack={() => setView('main')} 
            onSelectArticle={setSelectedArticle}
          />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Hero />
          <PlatformOverview />
          <ScaleSection />
          <QuoteSection />
          <TrustedSection />
          <GovernanceSection />
          <AudiencePortals />
          <TeamSection />
          <TimelineSection />
          <InsightsSection 
            onViewAll={() => setView('insights')} 
            onSelectArticle={setSelectedArticle}
          />
          <ConnectSection />
          <FinalCTA />
          <Footer />
        </>
      )}
    </div>
  );
}
