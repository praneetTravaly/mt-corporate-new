"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "Scale", href: "#scale" },
    { name: "Partners", href: "#partners" },
    { name: "Governance", href: "#governance" },
    { name: "Team", href: "#team" },
    { name: "Insights", href: "#insights" },
    { name: "Connect", href: "#connect" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brand-blue/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
            <span className="text-brand-blue font-bold text-xl">M</span>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled || true ? "text-white" : "text-brand-blue"}`}>
            MyTravaly
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-blue border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-white/80" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
