import React from "react";

const LOGOS = [
  { id: 1, name: "ISO 27001", src: "src/assets/logocompany/ISO27001.png" },
  { id: 2, name: "AppFutura", src: "src/assets/logocompany/CII.png" },
  { id: 3, name: "Clutch", src: "src/assets/logocompany/TopDevelopers.jpeg" },
];

const TrustedSection = () => {
  return (
  <section className="w-full bg-[#030812] border-y border-white/20">
      <div className="w-[calc(100%-48px)] sm:w-[calc(100%-80px)] lg:max-w-[1150px] mx-auto border-x border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-12 lg:py-16 px-8 lg:px-12">

        {/* LEFT TEXT */}
        <div className="shrink-0 text-center lg:text-left">
          <h3 className="text-white text-[28px] md:text-[38px] font-bold leading-[1.1] tracking-tight">
            Trusted & <br className="hidden lg:block" />
            Recognized By
          </h3>
        </div>

        {/* RIGHT LOGO STRIP */}
        <div className="relative flex-1 w-full overflow-hidden h-24 flex items-center">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#030812] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#030812] to-transparent z-10" />

        <div className="relative flex-1 w-full overflow-hidden h-24 flex items-center">
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#030812] to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#030812] to-transparent z-10" />

  <div className="flex w-max items-center animate-marquee">
    {[...LOGOS, ...LOGOS].map((logo, i) => (
      <div key={i} className="flex items-center justify-center px-4 shrink-0">
        <img
          src={logo.src}
          alt={logo.name}
          className="h-14 md:h-16 w-auto object-contain brightness-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-300"
        />
      </div>
    ))}
  </div>
</div>
        </div>

      </div>
    </section>
  );
};

export default TrustedSection;