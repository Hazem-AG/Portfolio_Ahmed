import { useState, useRef, useEffect } from "react";
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
  Briefcase,
  Building2,
  Sparkles,
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
    title: "AI & Automation",
    items: SKILLS.ai,
    icon: <Sparkles size={24} />,
  },
  {
    title: "Creative Strategy",
    items: SKILLS.creative,
    icon: <PenTool size={24} />,
  },
  {
    title: "Industries Experience",
    items: SKILLS.industries,
    icon: <Building2 size={24} />,
  },
  {
    title: "Freelance Platforms",
    items: SKILLS.freelance,
    icon: <Briefcase size={24} />,
  },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false); // حالة جديدة لمعرفة هل نحتاج سكرول أم لا

  // دالة لفحص هل المحتوى يحتاج إلى تمرير أم يظهر بالكامل
  const checkForScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      // إذا كان عرض المحتوى الفعلي أكبر من العرض المرئي، إذن نحتاج سكرول
      setIsScrollable(scrollWidth > clientWidth + 10);
    }
  };

  // تفعيل الفحص عند تحميل الصفحة وعند تغيير حجم الشاشة (Resize)
  useEffect(() => {
    checkForScroll();
    window.addEventListener("resize", checkForScroll);
    
    // تأخير بسيط لضمان أن عناصر الواجهة أخذت حجمها الطبيعي بعد التحميل
    const timeoutId = setTimeout(checkForScroll, 100);
    
    return () => {
      window.removeEventListener("resize", checkForScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft as number;
    const firstChild = scrollRef.current.children[0] as HTMLElement | undefined;
    const itemWidth = firstChild ? firstChild.offsetWidth : 0;
    const newIndex = itemWidth ? Math.round(scrollPosition / (itemWidth + 24)) : 0;
    setActiveIndex(newIndex);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement | undefined;
    const itemWidth = (firstChild ? firstChild.offsetWidth : 0) + 24;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement | undefined;
    const itemWidth = (firstChild ? firstChild.offsetWidth : 0) + 24;
    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <Section
      id="skills"
      className="bg-gradient-to-b from-[#090909] to-[#121212]/50 border-y border-white/5"
    >
      <SectionHeader title="Expertise & Toolkit" />

      <div className="relative w-full">
        {/* إظهار السهم الأيسر فقط إذا كان هناك سكرول */}
        {isScrollable && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 z-10 p-2 md:p-3 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-[#D4AF37]"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}

        {/* إظهار السهم الأيمن فقط إذا كان هناك سكرول */}
        {isScrollable && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 z-10 p-2 md:p-3 bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-[#D4AF37]"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
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
      </div>

      {/* إظهار النقاط السفلية فقط إذا كان هناك سكرول */}
      {isScrollable && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {skillGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-8 h-2.5 bg-[#D4AF37]"
                  : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Skills;