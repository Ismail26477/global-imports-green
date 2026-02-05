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
          <div className="grid grid-cols-3 items-center h-[90px] px-4">

            {/* LEFT — MENU (mobile) / LOGO (desktop) */}
            <div className="flex items-center justify-start">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8 text-navy-dark" />
                ) : (
                  <Menu className="w-8 h-8 text-navy-dark" />
                )}
              </button>

              {/* Desktop Logo */}
              <Link to="/" className="hidden lg:block">
                <img
                  src="/logo13.png"
                  alt="Global Imports Logo"
                  className="h-20 lg:h-24 object-contain"
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
                  className="h-24 object-contain"
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
                className="flex items-center gap-2 bg-gold px-4 py-2 rounded-full font-bold text-navy-dark shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span className="hidden lg:inline">+91 9270109911</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[100px] px-8 lg:hidden">
          <nav className="flex flex-col gap-6 text-lg font-semibold text-navy-dark">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            <div className="border-t pt-4">
              <p className="font-semibold mb-2">Services</p>
              <Link to="/services/global-sourcing" onClick={() => setIsMobileMenuOpen(false)}>Global Sourcing</Link>
              <Link to="/services/export-management" onClick={() => setIsMobileMenuOpen(false)}>Export Management</Link>
              <Link to="/services/import-compliance" onClick={() => setIsMobileMenuOpen(false)}>Import Compliance</Link>
              <Link to="/services/logistics-freight" onClick={() => setIsMobileMenuOpen(false)}>Logistics & Freight</Link>
              <Link to="/services/quality-inspection" onClick={() => setIsMobileMenuOpen(false)}>Quality Inspection</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
