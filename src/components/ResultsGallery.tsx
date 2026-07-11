import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

import { RESULTS_GALLERY } from "../data/results";
import { useLightbox } from "../context/LightboxContext";

const ResultsGallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // 6 صور = صفين في الديسكتوب (3 في كل صف)

  const { openLightbox } = useLightbox();

  // دالة فحص الشاشة والسكرول
  const checkLayout = () => {
    // تحديد ما إذا كانت الشاشة ديسكتوب (مقاس lg وما فوق في Tailwind يعادل 1024px)
    const desktopMode = window.innerWidth >= 1024;
    setIsDesktop(desktopMode);

    if (scrollRef.current) {
      if (desktopMode) {
        // في الديسكتوب لا يوجد سكرول أفقي
        setIsScrollable(false);
      } else {
        // في الموبايل والتابلت نفحص إذا كان المحتوى يحتاج سكرول
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
    if (!scrollRef.current || isDesktop) return; // لا نحدث العداد في وضع الديسكتوب
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

  // تحديد العناصر المرئية بناءً على نوع الشاشة
  // في الديسكتوب: نعرض العدد المحدد (visibleCount)
  // في الموبايل/التابلت: نعرض كل الصور في السلايدر
  const displayedItems = isDesktop
    ? RESULTS_GALLERY.slice(0, visibleCount)
    : RESULTS_GALLERY;

  return (
    <Section id="results">
      <SectionHeader
        title="Campaign Results"
        subtitle="Real performance screenshots showcasing actual advertising results achieved across multiple platforms."
      />

      <div className="relative w-full">
        {/* سهم اليسار (موبايل/تابلت فقط) */}
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

        {/* سهم اليمين (موبايل/تابلت فقط) */}
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
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: isDesktop ? (index % 6) * 0.1 : index * 0.05, // حركة متتالية سلسة
              }}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-auto lg:flex-auto snap-start lg:snap-none group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] shadow-lg"
              onClick={() => {
                // نستخدم findIndex لضمان فتح الصورة الصحيحة من المصفوفة الأصلية الكاملة
                const originalIndex = RESULTS_GALLERY.findIndex((r) => r.id === item.id);
                openLightbox(RESULTS_GALLERY, originalIndex);
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2">
                  {item.category}
                </div>

                <div className="text-white text-lg font-bold">
                  {item.title}
                </div>
              </div>

              <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* زر Show More يظهر فقط في الديسكتوب وعندما يكون هناك صور متبقية */}
      {isDesktop && visibleCount < RESULTS_GALLERY.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)} // يضيف صفين (6 صور)
            className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)]"
          >
            Show More
          </button>
        </div>
      )}

      {/* النقاط السفلية (تظهر فقط في الموبايل/التابلت) */}
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

export default ResultsGallery;