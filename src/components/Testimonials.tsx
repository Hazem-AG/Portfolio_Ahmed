import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import UserPlaceholder from "./ui/UserPlaceholder";

import { ChevronLeft, ChevronRight } from "../icons/Icons";

import { TESTIMONIALS } from "../data/testimonials";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <Section id="testimonials" className="bg-[#121212]/50 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeader title="Client Feedback" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center px-4 md:px-12 w-full"
            >
              {/* Stars */}
              <div className="text-[#D4AF37] mb-8 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 fill-current drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl md:text-3xl text-white font-medium leading-relaxed mb-10 italic">
                "{TESTIMONIALS[active].text}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-[#D4AF37]/30 flex items-center justify-center mb-4 text-white/30 overflow-hidden">
                  <UserPlaceholder size={32} />
                </div>

                <div className="font-bold text-white text-lg tracking-wide">
                  {TESTIMONIALS[active].name}
                </div>

                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mt-1 font-semibold">
                  {TESTIMONIALS[active].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() =>
              setActive((prev) =>
                prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
              )
            }
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() =>
              setActive((prev) =>
                prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
              )
            }
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;