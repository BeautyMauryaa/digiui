import CardWrapper from "./CardWrapper";
import icon from '../../assets/Pasted image.png';

const BusinessCard = () => {
  return (
    <CardWrapper variant="primary">
      {/* Icon Box */}
   <div 
  className="w-[64px] h-[64px] rounded-[18px] flex items-center justify-center mb-6 flex-shrink-0"
  style={{
    background: 'linear-gradient(180deg, #1A2536 0%, #111928 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)'
  }}
>
  {/* The Inner "Inset" Box */}
  <div 
    className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center"
    style={{
      background: 'linear-gradient(145deg, #0D1424, #151E2E)',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(255, 255, 255, 0.05)'
    }}
  >
    {/* The Blue Circular Icon Layer */}
    <div 
      className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #3b7ef8, #1a4fd6 60%, #0d2d8a)',
        boxShadow: '0 4px 12px rgba(26, 79, 214, 0.5)'
      }}
    >
      <img 
        src={icon} 
        alt="icon" 
        className="w-[14px] h-[14px] object-contain" 
      />
    </div>
  </div>
</div>
      <h3 className="text-white text-[32px] font-bold mb-4 tracking-tight">
        Business Inquiry
      </h3>

      <p className="text-white/70 text-[18px] mb-8 leading-normal max-w-[300px]">
        Explore solutions to scale and accelerate your business.
      </p>

      <a
        href="mailto:accelerate@digimantra.com"
        className="block text-white text-[19px] font-medium hover:text-[#00C2FF] transition-colors"
      >
        accelerate@digimantra.com
      </a>
    </CardWrapper>
  );
};

export default BusinessCard;