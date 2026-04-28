import CardWrapper from "./CardWrapper";
import { Users, ArrowRight } from "lucide-react";

const CareerCard = () => {
  return (
    <CardWrapper>
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#081225] border border-white/10 flex items-center justify-center mb-8">
        <Users size={24} className="text-[#00C2FF]" />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-bold mb-4">
        Careers
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-[16px] mb-8 leading-relaxed">
        Explore opportunities to grow with DigiMantra.
      </p>

      {/* Email */}
      <a
        href="mailto:careers@digimantra.com"
        className="inline-flex items-center gap-2 text-[#00C2FF] font-bold hover:text-white transition-all"
      >
        careers@digimantra.com
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </CardWrapper>
  );
};

export default CareerCard;