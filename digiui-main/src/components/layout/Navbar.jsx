import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useScrollHeader } from "../../hooks/useScrollHeader";
import { scrollToSection } from "../../utils/helpers";
import logo from "../../assets/digilogo.svg";

const NAV_LINKS = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "Industries", href: "#industries" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isScrolled, isHidden } = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A1623]/95 backdrop-blur-md border-b border-white/10"
          : "bg-[#0A1623] border-b border-white/10"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex items-center justify-between h-[70px] px-10 max-w-[1440px] mx-auto">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="DigiMantra Logo"
            className="h-6 w-auto object-contain"
          />
        </a>

        {/* CENTER NAV - Tightened Gap */}
        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[14px] font-bold text-white hover:text-white/70 transition"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-5">
          {/* SEARCH */}
          <button className="text-white hover:text-white/70 transition flex items-center justify-center">
            <Search size={18} strokeWidth={2} />
          </button>

          {/* CTA - Bolder font and lower text gap (tracking) */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-[9px] rounded-full border border-white text-white text-[12px] font-bold tracking-tight uppercase hover:bg-white/10 transition-all"
            style={{ letterSpacing: "-0.01em" }}
          >
            TALK TO AN EXPERT
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1623] border-t border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                scrollToSection(link.href);
                setMobileOpen(false);
              }}
              className="block w-full text-left text-[15px] font-bold text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;