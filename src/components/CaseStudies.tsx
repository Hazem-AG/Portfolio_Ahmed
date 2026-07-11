import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import GlassCard from "../components/ui/GlassCard";

import { CASE_STUDIES } from "../data/caseStudies";

const CaseStudies = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // 6 مشاريع = صفين كبداية في الديسكتوب

  // دالة فحص الشاشة والسكرول
  const checkLayout = () => {
    const desktopMode = window.innerWidth >= 1024;
    setIsDesktop(desktopMode);

    if (scrollRef.current) {
      if (desktopMode) {
        setIsScrollable(false);
      } else {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setIsScrollable(scrollWidth > clientWidth + 10);
      }
    }
  };

  useEffect(() => {
    checkLayout();
    window.addEventListener("resize", checkLayout);
    
    const timeoutId = setTimeout(checkLayout, 100);
    
    return () => {
      window.removeEventListener("resize", checkLayout);
      clearTimeout(timeoutId);
    };
  }, []);

  const getItemWidth = () => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return 0;
    return (scrollRef.current.children[0] as HTMLElement).offsetWidth;
  };

  const handleScroll = () => {
    if (!scrollRef.current || isDesktop) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const itemWidth = getItemWidth();
    // الفراغ هنا هو gap-8 والذي يعادل 32px
    const newIndex = Math.round(scrollPosition / (itemWidth + 32)); 
    setActiveIndex(newIndex);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth() + 32;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth() + 32;
    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  // في الديسكتوب نظهر العدد المحدد، وفي الموبايل نظهر كل المشاريع داخل السلايدر
  const displayedItems = isDesktop
    ? CASE_STUDIES.slice(0, visibleCount)
    : CASE_STUDIES;

  return (
    <Section
      id="casestudies"
      className="bg-[#121212]/30 border-y border-white/5"
    >
      <SectionHeader title="Featured Case Studies" />

      <div className="relative w-full">
        {/* سهم اليسار (يظهر في الموبايل والتابلت فقط إذا كان هناك سكرول) */}
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

        {/* سهم اليمين (يظهر في الموبايل والتابلت فقط إذا كان هناك سكرول) */}
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

        {/* الحاوية الهجينة */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          // استخدام gap-8 كما طلبت
          className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayedItems.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: isDesktop ? (index % 6) * 0.1 : index * 0.05 }}
              // بما أن الفراغ gap-8 (32px)، ففي شاشات md يكون عرض الكارت 50% ناقص نصف الفراغ (16px)
              className="flex-none w-full md:w-[calc(50%-16px)] lg:w-auto lg:flex-auto snap-start lg:snap-none"
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
      </div>

      {/* زر Show More في الديسكتوب فقط عندما يكون هناك بيانات متبقية */}
      {isDesktop && visibleCount < CASE_STUDIES.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)]"
          >
            Show More
          </button>
        </div>
      )}

      {/* النقاط السفلية (في الموبايل والتابلت فقط) */}
      {isScrollable && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {displayedItems.map((_, index) => (
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

export default CaseStudies;