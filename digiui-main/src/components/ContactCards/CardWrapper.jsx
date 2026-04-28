const CardWrapper = ({ children, variant = "default" }) => {
  const base =
  "group relative rounded-[24px] px-10 py-6 min-h-[200px] transition-all duration-500 overflow-hidden border border-white/10";
  
  const variants = {
    primary:
      "bg-[#020617] bg-[radial-gradient(circle_at_0%_100%,rgba(0,194,255,0.08),transparent_60%)]",

    default:
      "bg-[#0A1221] hover:border-[#00C2FF]/40 hover:shadow-[0_15px_40px_rgba(0,194,255,0.15)] hover:-translate-y-1",
  };

  return (
    <div className={`${base} ${variants[variant]}`}>
      
      {/* 🔥 HOVER GRADIENT (hidden by default) */}
      <div
  className="
    absolute inset-0 rounded-[24px] pointer-events-none
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  "
  style={{
    background: `radial-gradient(
      180% 180% at 0% 100%,
      rgba(0, 194, 255, 0.65) 0%,
      rgba(0, 140, 255, 0.35) 20%,
      rgba(0, 59, 109, 0.45) 40%,
      rgba(2, 6, 23, 0.6) 60%,
      transparent 75%
    )`
  }}
/>

      {/* Optional: subtle top light for depth */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none 
      bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;