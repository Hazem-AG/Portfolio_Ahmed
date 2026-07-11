import { motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";

import { SERVICES } from "../data/services";

const Services = () => {
  return (
    <Section id="services">
      <SectionHeader
        title="How I Can Help Your Business Grow"
        subtitle="Comprehensive digital marketing solutions focused on the entire customer journey, from awareness to conversion."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            <GlassCard className="h-full group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;