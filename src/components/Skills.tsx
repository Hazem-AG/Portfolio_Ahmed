import { motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";

import { SKILLS } from "../data/skills";

import {
  MonitorPlay,
  Zap,
  PenTool,
  CheckCircle2,
} from "../icons/SocialIcons";

const skillGroups = [
  {
    title: "Advertising Platforms",
    items: SKILLS.platforms,
    icon: <MonitorPlay size={24} />,
  },
  {
    title: "Technical Skills",
    items: SKILLS.technical,
    icon: <Zap size={24} />,
  },
  {
    title: "Creative Strategy",
    items: SKILLS.creative,
    icon: <PenTool size={24} />,
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      className="bg-gradient-to-b from-[#090909] to-[#121212]/50 border-y border-white/5"
    >
      <SectionHeader title="Expertise & Toolkit" />

      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <GlassCard
              hover={false}
              className="h-full border-t-4 border-t-[#D4AF37] hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <div className="text-[#D4AF37]">
                  {group.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.08 }}
                    className="flex items-center gap-3 text-gray-300 text-sm md:text-base hover:text-white transition-colors"
                  >
                    <span className="text-[#D4AF37] shrink-0">
                      <CheckCircle2 size={16} />
                    </span>

                    {item}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;