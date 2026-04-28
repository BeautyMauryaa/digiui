import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer/Footer.jsx";
import HeroSection from "../components/sections/HeroSection";
import TrustedSection from "../components/sections/TrustedSection";
import ReachOutSection from "../components/sections/ReachOutSection";
import GlobalPartnerSection from "../components/sections/GlobalPartnerSection";



const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#060D1F]">
      <Navbar />

      <main>
        <HeroSection />
        <TrustedSection />
        <ReachOutSection />
        <GlobalPartnerSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
