import React, { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import worldMapImg from "../../assets/maps.png";

import indiaFlag from "../../assets/flags/india.png";
import usaFlag from "../../assets/flags/usflag.png";
import uaeFlag from "../../assets/flags/uae.png";
import ukFlag from "../../assets/flags/uk.png";

const LOCATIONS = [
  {
    id: "india",
    name: "India",
    flagImg: indiaFlag,
    address: "Plot No. CP-11, Phase 8, Industrial Area, Sector 72, Mohali, Punjab 160071",
    email: "info@digimantra.com",
    phone: "+91 172 4661100",
    coords: { x: 72, y: 55 }
  },
  {
    id: "usa",
    name: "USA",
    flagImg: usaFlag,
    address: "STE A, Dover, Kent County, 19001, United States",
    email: "digimantra@usa.com",
    phone: "666666666",
    coords: { x: 22, y: 42 }
  },
  {
    id: "uae",
    name: "UAE",
    flagImg: uaeFlag,
    address: "Dubai Internet City, Building 16, Dubai, UAE",
    email: "uae@digimantra.com",
    phone: "+971 4 0000000",
    coords: { x: 62, y: 48 }
  },
  {
    id: "uk",
    name: "UK",
    flagImg: ukFlag,
    address: "71-75 Shelton Street, London, WC2H 9JQ, UK",
    email: "uk@digimantra.com",
    phone: "+44 20 0000 0000",
    coords: { x: 47, y: 30 }
  },
];

const GlobalPartnerSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[1]);
  const [hoveredLoc, setHoveredLoc] = useState(null);

  return (
    <section
      id="partners"
      ref={ref}
      className={`py-24 bg-[#030812] transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-white text-[32px] lg:text-[40px] font-semibold leading-tight">
            Our <span className="text-[#00C2FF]">Global Partner</span> Network
          </h2>
          <p className="text-gray-400 text-[15px] mt-4 max-w-2xl">
            Collaborating with leading organizations to deliver intelligent technology and digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <div className="lg:col-span-4 space-y-12">

            {/* Flag Selector */}
            <div className="flex items-center gap-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setActiveLoc(loc)}
                    className={`relative w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                      activeLoc.id === loc.id
                        ? "border-[#00C2FF] scale-110 shadow-[0_0_15px_rgba(0,194,255,0.4)]"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={loc.flagImg}
                        alt={loc.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>

                  {/* Double chevron under active flag */}
                  <div className={`flex flex-col items-center transition-all duration-300 ${
                    activeLoc.id === loc.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <ChevronDown
                      className="text-[#00C2FF] w-4 h-4 -mb-2"
                      style={{ animation: 'bounce1 1.2s ease-in-out infinite' }}
                    />
                    <ChevronDown
                      className="text-[#00C2FF] w-4 h-4 opacity-60"
                      style={{ animation: 'bounce1 1.2s ease-in-out infinite 0.2s' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Address Details */}
            <div className="space-y-4 pt-4">
  <h3 className="text-white text-3xl font-bold">{activeLoc.name}</h3>
  
  <div className="space-y-3">
    <div className="flex items-start gap-3 text-white">
      <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
      <p className="text-[15px] font-medium leading-relaxed">{activeLoc.address}</p>
    </div>
    <div className="flex items-center gap-3 text-white">
      <Mail className="w-5 h-5 text-white shrink-0" />
      <a href={`mailto:${activeLoc.email}`} className="text-[15px] font-medium hover:text-[#00C2FF] transition-colors">
        {activeLoc.email}
      </a>
    </div>
    <div className="flex items-center gap-3 text-white">
      <Phone className="w-5 h-5 text-white shrink-0" />
      <span className="text-[15px] font-medium">{activeLoc.phone}</span>
    </div>
  </div>
</div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-[2rem] bg-[#050C1A]/30 p-2 overflow-visible">
              <img
                src={worldMapImg}
                alt="World Map"
                className="w-full h-auto opacity-80 rounded-[2rem]"
              />

              {LOCATIONS.map((loc) => {
                const isActive = activeLoc.id === loc.id;
                const isHovered = hoveredLoc?.id === loc.id;
             const showTooltip = isHovered || (isActive && !hoveredLoc);

                // Flip tooltip left anchor if pin near right edge
                const tooltipRight = loc.coords.x > 70;
                const tooltipLeft = loc.coords.x < 30;

                return (
                  <div
                    key={loc.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${loc.coords.x}%`,
                      top: `${loc.coords.y}%`,
                      zIndex: showTooltip ? 30 : 10
                    }}
                    onClick={() => setActiveLoc(loc)}
                    onMouseEnter={() => { setHoveredLoc(loc); setActiveLoc(loc); }}
                    onMouseLeave={() => setHoveredLoc(null)}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center">

                      {/* Tooltip — hover only */}
                     {showTooltip && (
  <div
    className="absolute bg-[#0F172A]/95 backdrop-blur-md
      border border-[#00C2FF]/40 px-4 py-3 rounded-xl shadow-2xl
      pointer-events-none w-[200px] z-50"
    style={{
      bottom: 'calc(100% + 12px)', // ← pushes above the pin
      ...(tooltipRight
        ? { right: '0', left: 'auto' }
        : tooltipLeft
        ? { left: '0' }
        : { left: '50%', transform: 'translateX(-50%)' }
      )
    }}
  >
    <p className="text-[#00C2FF] text-[10px] font-bold uppercase tracking-wider mb-1">
      {loc.name}
    </p>
    <p className="text-white text-[12px] font-medium leading-relaxed">
      {loc.address}
    </p>
    <div
      className="absolute top-full w-0 h-0
        border-l-[5px] border-l-transparent
        border-r-[5px] border-r-transparent
        border-t-[5px] border-t-[#00C2FF]/40"
      style={{
        left: tooltipRight ? 'auto' : tooltipLeft ? '20px' : '50%',
        right: tooltipRight ? '20px' : 'auto',
        transform: (!tooltipRight && !tooltipLeft) ? 'translateX(-50%)' : 'none'
      }}
    />
  </div>
)}

                      {/* Pin */}
                      {isActive ? (
                        <svg width="42" height="60" viewBox="0 0 49 77" fill="none">
                          <path opacity="0.7" d="M34 74.9953C34 76.1017 29.5225 77 24 77C18.4728 77 14 76.1064 14 74.9953C14 73.8983 18.4728 73 24 73C29.5177 73.0047 34 73.8983 34 74.9953Z" fill="url(#g1)"/>
                          <path d="M48.8172 24.4086C48.8172 10.9235 37.8937 0 24.4086 0C10.9235 0 0 10.9235 0 24.4086C0 28.2951 1.08941 31.8283 2.70879 35.0965H2.59103L24.4086 74.7568L46.2261 35.0965H46.0937C47.6836 31.8283 48.8172 28.2804 48.8172 24.4086Z" fill="#1A76DB"/>
                          <path d="M43.2086 23.5262C43.2086 33.905 34.7878 42.3111 24.409 42.3111C14.0302 42.3111 5.60938 33.905 5.60938 23.5262C5.60938 13.1327 14.0302 4.72656 24.409 4.72656C34.7731 4.72656 43.2086 13.1327 43.2086 23.5262Z" fill="#FCFFF4"/>
                          <defs>
                            <radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.9972 75.0019) scale(9.99858 1.99972)">
                              <stop stopColor="#4D4D4D"/>
                              <stop offset="0.379" stopColor="#B0B0B0"/>
                              <stop offset="0.7218" stopColor="#EBEBEB" stopOpacity="0.6"/>
                              <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="34" viewBox="0 0 49 77" fill="none" className="opacity-80 hover:opacity-100 transition-opacity">
                          <path opacity="0.7" d="M34 74.9953C34 76.1017 29.5225 77 24 77C18.4728 77 14 76.1064 14 74.9953C14 73.8983 18.4728 73 24 73C29.5177 73.0047 34 73.8983 34 74.9953Z" fill="url(#g2)"/>
                          <path d="M48.8172 24.4086C48.8172 10.9235 37.8937 0 24.4086 0C10.9235 0 0 10.9235 0 24.4086C0 28.2951 1.08941 31.8283 2.70879 35.0965H2.59103L24.4086 74.7568L46.2261 35.0965H46.0937C47.6836 31.8283 48.8172 28.2804 48.8172 24.4086Z" fill="#1A76DB"/>
                          <path d="M43.2086 23.5262C43.2086 33.905 34.7878 42.3111 24.409 42.3111C14.0302 42.3111 5.60938 33.905 5.60938 23.5262C5.60938 13.1327 14.0302 4.72656 24.409 4.72656C34.7731 4.72656 43.2086 13.1327 43.2086 23.5262Z" fill="#FCFFF4"/>
                          <defs>
                            <radialGradient id="g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.9972 75.0019) scale(9.99858 1.99972)">
                              <stop stopColor="#4D4D4D"/>
                              <stop offset="0.379" stopColor="#B0B0B0"/>
                              <stop offset="0.7218" stopColor="#EBEBEB" stopOpacity="0.6"/>
                              <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                          </defs>
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bounce animation for double chevrons */}
      <style>{`
        @keyframes bounce1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnerSection;