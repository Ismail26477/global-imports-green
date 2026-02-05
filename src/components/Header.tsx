'use client';

import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 items-center h-[70px] sm:h-[80px] lg:h-[90px] px-3 sm:px-4">

            {/* LEFT — MENU (mobile) / LOGO (desktop) */}
            <div className="flex items-center justify-start">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7 text-navy-dark" />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-navy-dark" />
                )}
              </button>

              {/* Desktop Logo */}
              <Link to="/" className="hidden lg:block">
                <img
                  src="/logo13.png"
                  alt="Global Imports Logo"
                  className="h-16 lg:h-20 object-contain"
                />
              </Link>
            </div>

            {/* CENTER — LOGO (mobile) / NAV (desktop) */}
            <div className="flex items-center justify-center">
              {/* Mobile Logo */}
              <Link to="/" className="lg:hidden">
                <img
                  src="/logo13.png"
                  alt="Global Imports Logo"
                  className="h-14 sm:h-16 object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center justify-center gap-12 font-semibold text-navy-dark">
                <Link to="/" className="hover:text-gold transition">Home</Link>
                <Link to="/about" className="hover:text-gold transition">About</Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gold transition">
                    <Link to="/services">Services</Link>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isServicesOpen && "rotate-180"
                      )}
                    />
                  </div>

                  {isServicesOpen && (
                    <div className="absolute top-full left-0 pt-3">
                      <div className="glass-dark rounded-xl py-3 min-w-[240px] shadow-2xl">
                        <Link to="/services/global-sourcing" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Global Sourcing
                        </Link>
                        <Link to="/services/export-management" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Export Management
                        </Link>
                        <Link to="/services/import-compliance" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Import Compliance
                        </Link>
                        <Link to="/services/logistics-freight" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Logistics & Freight
                        </Link>
                        <Link to="/services/customs-documentation" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Customs Documentation
                        </Link>
                        <Link to="/services/quality-inspection" className="block px-5 py-3 text-[#69ff93] hover:text-[#4x5Ca]">
                          Quality Inspection
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/products" className="hover:text-gold transition">Products</Link>
                <Link to="/contact" className="hover:text-gold transition">Contact</Link>
              </nav>
            </div>

            {/* RIGHT — CALL BUTTON */}
            <div className="flex items-center justify-end">
              <a
                href="tel:+919270109911"
                className="flex items-center gap-1 sm:gap-2 bg-gold px-2 sm:px-3 lg:px-4 py-2 rounded-full font-bold text-navy-dark shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden lg:inline">+91 9270109911</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[70px] sm:pt-[80px] px-4 sm:px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-3 sm:gap-4 text-base sm:text-lg font-semibold text-navy-dark pb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-muted transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-muted transition-colors">About</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-muted transition-colors">Products</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-muted transition-colors">Contact</Link>

            <div className="border-t border-border pt-4 mt-2">
              <p className="font-semibold mb-3 px-4 text-gold">Services</p>
              <div className="flex flex-col gap-2">
                <Link to="/services/global-sourcing" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 rounded-lg hover:bg-muted transition-colors ml-2">Global Sourcing</Link>
                <Link to="/services/export-management" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 rounded-lg hover:bg-muted transition-colors ml-2">Export Management</Link>
                <Link to="/services/import-compliance" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 rounded-lg hover:bg-muted transition-colors ml-2">Import Compliance</Link>
                <Link to="/services/logistics-freight" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 rounded-lg hover:bg-muted transition-colors ml-2">Logistics & Freight</Link>
                <Link to="/services/quality-inspection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 rounded-lg hover:bg-muted transition-colors ml-2">Quality Inspection</Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
