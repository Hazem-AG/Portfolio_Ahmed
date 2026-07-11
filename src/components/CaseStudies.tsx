import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import GlassCard from "../components/ui/GlassCard";

import { CASE_STUDIES } from "../data/caseStudies";

const CaseStudies = () => {
  return (
    <Section
      id="casestudies"
      className="bg-[#121212]/30 border-y border-white/5"
    >
      <SectionHeader title="Featured Case Studies" />

      <div className="grid lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-0 overflow-hidden flex flex-col h-full group">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={study.img}
                  alt={study.client}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>

                <div className="absolute top-4 left-4 bg-[#090909]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 shadow-lg">
                  {study.industry}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 -mt-6 bg-[#121212]/90 backdrop-blur-xl border-t border-white/5 rounded-t-3xl">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {study.client}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-2">
                  Objective: {study.objective}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/10">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center"
                    >
                      <div className="text-[12px] font-extrabold text-[#D4AF37]">
                        {value as string}
                      </div>

                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudies;