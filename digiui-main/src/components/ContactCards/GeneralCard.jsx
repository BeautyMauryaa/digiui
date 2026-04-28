import CardWrapper from "./CardWrapper";
import { MessageCircle, ArrowRight } from "lucide-react";

const GeneralCard = () => {
  return (
    <CardWrapper>
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#081225] border border-white/10 flex items-center justify-center mb-8">
        <MessageCircle size={24} className="text-[#00C2FF]" />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-bold mb-4">
        General Inquiry
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-[16px] mb-8 leading-relaxed">
        Reach out for general questions or information.
      </p>

      {/* Email */}
      <a
        href="mailto:sales@digimantra.com"
        className="inline-flex items-center gap-2 text-[#00C2FF] text-[15px] font-bold hover:text-white transition-all"
      >
        sales@digimantra.com
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </CardWrapper>
  );
};

export default GeneralCard;