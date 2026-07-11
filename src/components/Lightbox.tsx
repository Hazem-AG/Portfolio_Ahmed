import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { X, ChevronLeft, ChevronRight } from "../icons/Icons";
import type { ResultItem } from "../types";

interface LightboxProps {
  images: ResultItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
        onTouchStart={(e) => {
          setTouchStart(e.changedTouches[0].clientX);
        }}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0].clientX;

          if (touchStart - end > 70) {
            onNext();
          }

          if (end - touchStart > 70) {
            onPrev();
          }
        }}
      >
        {/* Close */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="
            absolute
            top-4
            right-4
            md:top-6
            md:right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-black/40
            backdrop-blur-xl
            border
            border-white/10
            flex
            items-center
            justify-center
            text-white
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all
            duration-300
          "
        >
          <X size={28} />
        </button>

        {/* Previous */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="
            absolute
            left-4
            lg:left-8
            z-50
            hidden
            md:flex
            w-14
            h-14
            rounded-full
            bg-black/30
            backdrop-blur-xl
            border
            border-white/10
            items-center
            justify-center
            text-white/70
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all
          "
        >
          <ChevronLeft size={30} />
        </button>

        {/* Image */}

        <motion.div
          layout
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="
            relative
            w-full
            h-full
            px-4
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
            loading="lazy"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="
              w-auto
              max-w-full
              max-h-[60vh]
              sm:max-h-[70vh]
              lg:max-h-[82vh]
              object-contain
              rounded-2xl
              border
              border-[#D4AF37]/20
              shadow-[0_20px_80px_rgba(0,0,0,.45)]
              select-none
            "
          />

          <div className="mt-8 text-center px-4 max-w-xl">
            <p className="text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-2">
              {images[currentIndex].category}
            </p>

            <h3 className="text-white text-xl md:text-3xl font-semibold">
              {images[currentIndex].title}
            </h3>

            <p className="text-gray-400 mt-4 text-sm">
              {currentIndex + 1} / {images.length}
            </p>

            <p className="text-gray-500 text-xs mt-3 md:hidden">
              Swipe left or right to navigate
            </p>
          </div>
        </motion.div>

        {/* Next */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="
            absolute
            right-4
            lg:right-8
            z-50
            hidden
            md:flex
            w-14
            h-14
            rounded-full
            bg-black/30
            backdrop-blur-xl
            border
            border-white/10
            items-center
            justify-center
            text-white/70
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all
          "
        >
          <ChevronRight size={30} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;