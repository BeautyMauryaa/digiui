import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ArrowUpRight } from 'lucide-react';
import { useLeadForm } from "../../hooks/useLeadForm";

const HeroSection = () => {
  const { form, onSubmit, isSubmitting, captcha } = useLeadForm();
  const { register, control, watch, formState: { errors } } = form;
  const accepted = watch("acceptPolicy");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030812]"
    >
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#1FB6FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 w-full pt-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8 pt-10">
            <h1
              className="text-[46px] lg:text-[60px] font-medium leading-[1] tracking-[0.02em] text-white"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-[#00E0FF] via-[#00AEEF] to-[#007EA7] bg-clip-text text-transparent">
                Build An AI-First,
              </span>
              <br />
              <span className="text-white">Future-Ready</span>
              <br />
              <span className="text-white">Business</span>
            </h1>

            <div className="space-y-6 max-w-lg">
              <p className="text-gray-400 text-[18px] leading-relaxed">
                Ready to scale your business with intelligent technology and
                advanced digital strategies?
              </p>
              <p className="text-gray-400 text-[18px] leading-relaxed">
                At DigiMantra, we help organisations adopt AI-first thinking,
                intelligent automation, and modern digital systems to stay ahead
                in an increasingly technology-driven world.
              </p>
              <p className="text-gray-400 text-[17.5px] leading-relaxed">
                Share your requirements and our team will connect with you to
                explore how we can accelerate your growth.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="relative p-8 md:p-10 rounded-[15px]"
            style={{
              background: `
                linear-gradient(#051622, #051622) padding-box,
                linear-gradient(0deg, rgba(1,127,190,0.3), rgba(1,127,190,0.9)) border-box
              `,
              border: "1.5px solid transparent",
              boxShadow: `
                0 0 0.5px rgba(1,127,190,0.8),
                0 0 15px rgba(1,127,190,0.25),
                0 0 40px rgba(1,127,190,0.15)
              `,
            }}
          >
            <h2 className="text-white text-[22px] font-medium mb-6 leading-snug">
              Tell us about your goals and our team will connect with you shortly.
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">

              {/* Full Name */}
              <div>
                <input 
    {...register("fullName")} 
    type="text" 
    placeholder="Full Name *" 
    className="
      w-full 
      bg-[#081B29]/60
      px-4 py-3 
      rounded-xl 
      bg-[linear-gradient(180deg,rgba(0,153,255,0.15),rgba(0,153,255,0.05))]
      border border-[#2EC5FF]/30
      backdrop-blur-md
      focus:outline-none
      focus:border-[#2EC5FF]/70
      transition-all duration-300
      placeholder:text-gray-400
    "
    style={{
      boxShadow: `
        inset 0 0 8px rgba(46,197,255,0.15),
        0 0 6px rgba(46,197,255,0.15)
      `
    }}
  />
                {errors.fullName && <p className="text-red-400 text-[11px] mt-1 pl-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email *"
                  className="w-full bg-[#081B29]/60 text-white text-[13px] px-4 py-3 rounded-xl border border-[#2EC5FF]/30 focus:outline-none focus:border-[#2EC5FF]/50 transition-all placeholder:text-gray-500"
                />
                {errors.email && <p className="text-red-400 text-[11px] mt-1 pl-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <div
                  className="phone-input-wrapper relative rounded-xl border border-[#2EC5FF]/30 focus-within:border-[#2EC5FF]/60 transition-all overflow-visible"
                  style={{
                    background: 'rgba(8, 27, 41, 0.6)',
                    boxShadow: 'inset 0 0 8px rgba(46,197,255,0.15), 0 0 6px rgba(46,197,255,0.15)'
                  }}
                >
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        country={"us"}
                        value={value}
                        onChange={onChange}
                        placeholder="Contact Number"
                        disableCountryCode={true}
                        containerClass="!w-full"
                        inputClass="!w-full !bg-transparent !text-white !text-[13px] !border-none !outline-none !shadow-none placeholder:!text-gray-500 !h-[42px] !pl-[58px]"
                        buttonClass="!bg-transparent !border-none !h-[42px] !w-[50px] shadow-none"
                        dropdownClass="custom-phone-dropdown"
                      />
                    )}
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-[11px] mt-1 pl-1">{errors.phone.message}</p>}
              </div>

              {/* Requirements */}
              <div>
                <textarea
                  {...register("requirements")}
                  placeholder="Share Your Requirements"
                  rows={3}
                  className="w-full bg-[#081B29]/60 text-white text-[13px] px-4 py-3 rounded-xl border border-[#2EC5FF]/20 focus:outline-none focus:border-[#2EC5FF]/50 transition-all placeholder:text-gray-500 resize-none"
                />
              </div>

              {/* Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register("acceptPolicy")}
                    type="checkbox"
                    className="hidden"
                  />
                  <div className={`mt-[3px] h-4 w-4 rounded flex-shrink-0 flex items-center justify-center transition-all border
                    ${accepted
                      ? 'bg-[#00C2FF] border-[#00C2FF]'
                      : 'bg-[#081B29]/60 border-[#2EC5FF]/40'
                    }`}
                  >
                    {accepted && (
                      <svg className="w-[10px] h-[10px]" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[12px] text-gray-400 leading-relaxed">
                    By checking this box, you agree that DigiMantra may store and process your
                    information to contact you regarding your request.
                  </span>
                </label>
                {errors.acceptPolicy && <p className="text-red-400 text-[11px] mt-1 pl-1">{errors.acceptPolicy.message}</p>}
              </div>

              {/* Captcha */}
              <div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-white text-[14px]">{captcha.num1} + {captcha.num2} = ?</span>
                  <input
                    {...register("captchaAnswer")}
                    type="text"
                    placeholder="Answer"
                    className="bg-[#081B29]/60 border border-[#2EC5FF]/20 rounded-md px-3 py-[6px] w-28 text-[13px] text-white focus:outline-none focus:border-[#2EC5FF]/50"
                  />
                </div>
                {errors.captchaAnswer && <p className="text-red-400 text-[11px] mt-1 pl-1">{errors.captchaAnswer.message}</p>}
              </div>

              {/* Submit */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white text-[15px] font-semibold transition-all hover:brightness-110 active:scale-[0.97] overflow-hidden"
                style={{
                  background: `
                    linear-gradient(328.68deg, rgba(22, 69, 121, 0.1) 19.02%, rgba(26, 118, 219, 0.1) 81.19%),
                    linear-gradient(94.64deg, #01CBCF -3.18%, #0082EB 98.57%)
                  `
                }}
              >
                <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                <ArrowUpRight strokeWidth={2.5} className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

            </form>
          </div>

        </div>
      </div>

      <style>{`
        .react-tel-input .country-list { background-color: #050C1A !important; border: 1px solid rgba(46, 197, 255, 0.2) !important; color: white !important; }
        .react-tel-input .selected-flag:hover { background-color: rgba(255,255,255,0.05) !important; }
      `}</style>
    </section>
  );
};

export default HeroSection;