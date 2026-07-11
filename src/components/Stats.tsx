import { motion } from "framer-motion";

import Section from "./ui/Section";
import AnimatedCounter from "./ui/AnimatedCounter";

import { STATS } from "../data/stats";

const Stats = () => {
  return (
    <Section id="stats" className="py-12 md:py-16 bg-[#D4AF37]/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className="p-4"
          >
            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8a7223] mb-3 drop-shadow-md">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />
            </div>

            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;