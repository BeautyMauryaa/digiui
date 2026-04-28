import React from "react";
import { MoveUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import logo from "../../../assets/digilogo.svg";
import { FOOTER_LINKS } from "../../../constants";
import { useNewsletter } from "../../../hooks/useNewsletter";
import LocationsSection from "./LocationsSection";

const SOCIAL_LINKS = [
  { Icon: FaFacebookF, href: '#' },
  { Icon: FaLinkedinIn, href: '#' },
  { Icon: FaXTwitter, href: '#' },
  { Icon: FaYoutube, href: '#' },
  { Icon: FaInstagram, href: '#' },
];

const Footer = () => {
  const { email, setEmail, handleSubscribe, isSubmitting, isSubscribed } = useNewsletter();

  return (
    <footer className="section-container bg-[#040B18] pt-16 pb-8 border-t border-[#1A2A45]/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-3">
            <img src={logo} alt="DigiMantra" className="h-8 mb-6 object-contain" />

            <p className="text-[18px] font-medium leading-snug mb-8 max-w-[280px]">
              <span className="text-white">AI-first digital engin</span>
              <span style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #6b7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>eering</span>
              {" "}
              <span className="text-white">for today and tomor</span>
              <span style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #6b7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>row.</span>
            </p>

            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-full text-white text-[15px] font-medium transition-all duration-300 relative overflow-hidden"
              style={{
                background: 'rgba(5, 22, 34, 0.7)',
                borderTop: '1.5px solid rgba(12, 155, 198, 0.25)',
                borderBottom: '1.5px solid #1199c2',
                borderLeft: '1.5px solid rgba(21, 102, 127, 0.25)',
                borderRight: '1.5px solid rgba(15, 112, 141, 0.25)',
              }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-[15px] mb-5">{heading}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-[20px] font-medium leading-snug mb-8 max-w-[280px]">
              <span className="text-white">Subscribe For News</span>
              <span style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #6b7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>letter</span>
            </p>

            <form onSubmit={handleSubscribe} className="relative mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full py-4 pl-6 pr-20 text-[16px] text-white placeholder:text-gray-400 focus:outline-none transition-all"
                style={{
                  background: 'linear-gradient(#08121C, rgb(9, 26, 45)) padding-box, linear-gradient(94.64deg, #29bbbd -3.18%, #0f3d64 98.57%) border-box',
                  border: '1.5px solid transparent',
                }}
                disabled={isSubscribed}
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:brightness-125"
                style={{
                  background: 'linear-gradient(94.64deg, #01CBCF -3.18%, #0082EB 98.57%)',
                }}
              >
                {isSubmitting ? (
                  <span className="animate-pulse text-sm">...</span>
                ) : (
                  <MoveUpRight size={20} />
                )}
              </button>
            </form>
<div className="w-full h-[1px] bg-[rgba(44,52,60,1)] mb-6" />
            {/* Social */}
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00C2FF] transition-colors duration-300"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* LOCATIONS */}
        <LocationsSection />

        {/* BOTTOM BAR */}
        <div className="pt-8 mt-12 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} DigiMantra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Cookie Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;