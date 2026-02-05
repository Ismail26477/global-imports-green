import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

const servicesLinks = [
  { name: "Global Sourcing", to: "/services/global-sourcing" },
  { name: "Export Management", to: "/services/export-management" },
  { name: "Import Compliance", to: "/services/import-compliance" },
  { name: "Logistics & Freight", to: "/services/logistics-freight" },
  { name: "Quality Inspection", to: "/services/quality-inspection" },
];

const teamContacts = [
  { name: "Vimal", phone: "+91 9823050721" },
  { name: "Aakash", phone: "+91 9011675477" },
  { name: "Prithvi", phone: "+91 8168619911" },
  { name: "Sagar", phone: "+91 8830783396" },
];

export function Footer() {
  return (
    <footer className="bg-[#1f3f22] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">

          {/* Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1 mb-6 sm:mb-0">
            <img
              src="/logo15.png"
              alt="Global Imports Logo"
              className="h-16 sm:h-20 w-auto object-contain mb-4 sm:mb-6"
            />

            <p className="text-[#69ff93] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Connecting Indian businesses with trusted manufacturers worldwide since 2008.
              Your reliable partner for global trade solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-[#69ff93] hover:text-[#4x5Ca] transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="text-[#69ff93] hover:text-[#4x5Ca] transition-colors text-xs sm:text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:globalimportsworldwide@gmail.com"
                className="flex items-start gap-2 sm:gap-3 text-[#69ff93] hover:text-[#4x5Ca] transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                <span>globalimportsworldwide@gmail.com</span>
              </a>

              <a
                href="tel:+919270109911"
                className="flex items-center gap-2 sm:gap-3 text-[#69ff93] hover:text-[#4x5Ca] transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>+91 9270109911</span>
              </a>

              <div className="flex items-start gap-2 sm:gap-3 text-[#69ff93] text-xs sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <h4 className="font-medium mb-2 text-xs sm:text-sm">Team Contacts:</h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                  {teamContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-[#69ff93] hover:text-[#4x5Ca] transition-colors truncate"
                    >
                      {contact.name}: {contact.phone.slice(-10)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#69ff93]/20 mt-6 sm:mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-[#69ff93]/80 text-xs sm:text-sm">
            © 2024 Global Imports Nagpur. All rights reserved.
          </p>
          <p className="text-[#69ff93]/80 text-xs sm:text-sm">
            IEC License: XXXXXXXX | 16+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
