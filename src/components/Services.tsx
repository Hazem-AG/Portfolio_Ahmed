import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";

import { SERVICES } from "../data/services";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  // دالة فحص السكرول
  const checkForScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      // إذا كان المحتوى أكبر من الشاشة، يظهر السكرول (الأسهم والنقاط)
      setIsScrollable(scrollWidth > clientWidth + 10);
    }
  };

  // تشغيل الفحص عند التحميل وعند تغيير حجم الشاشة
  useEffect(() => {
    checkForScroll();
    window.addEventListener("resize", checkForScroll);
    
    const timeoutId = setTimeout(checkForScroll, 100);
    
    return () => {
      window.removeEventListener("resize", checkForScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const getItemWidth = () => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return 0;
    return (scrollRef.current.children[0] as HTMLElement).offsetWidth;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const itemWidth = getItemWidth();
    const newIndex = Math.round(scrollPosition / (itemWidth + 24)); 
    setActiveIndex(newIndex);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth() + 24;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth() + 24;
    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <Section id="services">
      <SectionHeader
        title="How I Can Help Your Business Grow"
        subtitle="Comprehensive digital marketing solutions focused on the entire customer journey, from awareness to conversion."
      />

      <div className="relative w-full">
        {/* إظهار سهم اليسار فقط إذا كان هناك سكرول (موبايل/تابلت) */}
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

        {/* إظهار سهم اليمين فقط إذا كان هناك سكرول (موبايل/تابلت) */}
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

        {/* 
          حاوية الكروت:
          - في الموبايل والتابلت: flex مع تمرير أفقي (overflow-x-auto)
          - في الديسكتوب (lg وما فوق): grid عادية مع إلغاء التمرير الأفقي
        */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
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
              // التنسيق: عرض محدد في الموبايل والتابلت، وتلقائي في الديسكتوب بفضل الـ Grid
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-auto lg:flex-auto snap-start lg:snap-none"
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
      </div>

      {/* إظهار النقاط السفلية فقط إذا كان هناك سكرول (موبايل/تابلت) */}
      {isScrollable && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {SERVICES.map((_, index) => (
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

export default Services;