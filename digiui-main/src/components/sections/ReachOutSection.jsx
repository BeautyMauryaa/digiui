import React from "react";
import { Briefcase, MessageCircle, Users, ArrowRight } from "lucide-react";
import { CONTACT_CARDS } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import mapBg from "../../assets/sec3background.png";
import BusinessCard from "../ContactCards/BusinessCard";
import GeneralCard from "../ContactCards/GeneralCard";
import CareerCard from "../ContactCards/CareerCard";

const ICON_MAP = {
  briefcase: Briefcase,
  "message-circle": MessageCircle,
  users: Users,
};

const ReachOutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 bg-[#030812] transition-all duration-1000 ease-out overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
     <div className="absolute inset-0 pointer-events-none">
  <img
    src={mapBg}
    alt="World Map"
    className="w-full h-full object-cover opacity-[0.3] brightness-50"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-[#030812]/60 via-transparent to-[#030812]/80" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#030812]/80 via-transparent to-[#030812]/80" />
</div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-[25px] lg:text-[35px] font-bold leading-[1.1] max-w-4xl mx-auto">
            Reach the DigiMantra Team for{" "}
            <span className="text-[#00AEEF] text-[20px] lg:text-[30px]">
              Business Discussions, Collaboration, and Career Opportunities.
            </span>
          </h2>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               <BusinessCard />
        <GeneralCard />
        <CareerCard />
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;