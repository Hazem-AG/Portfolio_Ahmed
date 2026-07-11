import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

import { RESULTS_GALLERY } from "../data/results";
import { useLightbox } from "../context/LightboxContext";

const FILTERS = [
  "All",
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Snapchat Ads",
  "Analytics",
];

const ResultsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const { openLightbox } = useLightbox();

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const filtered =
    activeFilter === "All"
      ? RESULTS_GALLERY
      : RESULTS_GALLERY.filter(
          (item) => item.category === activeFilter
        );

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <Section id="results">
      <SectionHeader
        title="Campaign Results"
        subtitle="Real performance screenshots showcasing actual advertising results achieved across multiple platforms."
      />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-5 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border backdrop-blur-sm
              ${
                activeFilter === cat
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,.3)]"
                  : "bg-[#121212]/50 text-gray-400 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] shadow-lg"
              onClick={() =>
                openLightbox(
                  RESULTS_GALLERY,
                  RESULTS_GALLERY.findIndex(
                    (r) => r.id === item.id
                  )
                )
              }
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
        </AnimatePresence>
      </motion.div>

      {/* Show More */}
      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)]"
          >
            Show More ({filtered.length - visibleCount} Remaining)
          </button>
        </div>
      )}
    </Section>
  );
};

export default ResultsGallery;