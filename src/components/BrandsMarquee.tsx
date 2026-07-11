import { motion } from "framer-motion";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { BRAND_LOGOS } from "../data/brands";

const BrandsMarquee = () => {
  return (
    <Section
      id="brands"
      className="overflow-hidden py-16 md:py-24"
    >
      <SectionHeader
        title="Trusted By"
        subtitle="Partnered with diverse brands across multiple industries globally."
      />

      <div className="relative w-full flex overflow-hidden mt-10 border-y border-white/5 py-10 bg-[#121212]/20">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none"></div>

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center pr-12 md:pr-24 min-w-max"
        >
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
            <div
              key={index}
              className="
                w-20
                h-20
                md:w-24
                md:h-24
                rounded-full
                overflow-hidden
                border
                border-white/10
                hover:scale-110
                hover:border-[#D4AF37]
                transition-all
                duration-300
                flex-shrink-0
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default BrandsMarquee;