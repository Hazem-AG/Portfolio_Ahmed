import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { X, ChevronLeft, ChevronRight } from "../icons/Icons";
import { useLightbox } from "../context/LightboxContext";

const LightboxPortal = () => {
  const {
    lightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox();

  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;

        case "ArrowRight":
          nextImage();
          break;

        case "ArrowLeft":
          prevImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox.isOpen]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {lightbox.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .25 }}
className="fixed inset-0 z-[999999] cursor-auto"
          onClick={closeLightbox}
        >
          {/* Background Blur */}

          <div className="absolute inset-0 bg-black/45 backdrop-blur-2xl" />

          {/* Close Button */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="
              absolute
              top-5
              right-5
              z-50
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-[#D4AF37]
              hover:text-black
              transition-all
            "
          >
            <X size={24} />
          </button>

          {/* Previous */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              hidden
              md:flex
              absolute
              left-8
              top-1/2
              -translate-y-1/2
              z-50
              w-14
              h-14
              rounded-full
              bg-white/10
              backdrop-blur-xl
              items-center
              justify-center
              text-white
              hover:bg-[#D4AF37]
              hover:text-black
              transition-all
            "
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              hidden
              md:flex
              absolute
              right-8
              top-1/2
              -translate-y-1/2
              z-50
              w-14
              h-14
              rounded-full
              bg-white/10
              backdrop-blur-xl
              items-center
              justify-center
              text-white
              hover:bg-[#D4AF37]
              hover:text-black
              transition-all
            "
          >
            <ChevronRight size={32} />
          </button>

          {/* Content */}

<div
  className="
    relative
    z-40
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center
    p-6
  "
  onClick={(e) => e.stopPropagation()}
>
  <motion.img
    key={lightbox.currentIndex}
    src={lightbox.images[lightbox.currentIndex]?.img}
    alt={lightbox.images[lightbox.currentIndex]?.title}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.25 }}
    className="
      max-w-full
      max-h-[80vh]
      object-contain
      rounded-2xl
      border
      border-white/10
      shadow-2xl
      select-none
    "
  />

  <div className="mt-6 text-center">
    <div className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
      {lightbox.images[lightbox.currentIndex]?.category}
    </div>

    <h3 className="text-white text-xl md:text-2xl font-bold">
      {lightbox.images[lightbox.currentIndex]?.title}
    </h3>

    <p className="text-gray-400 text-sm mt-2">
      {lightbox.currentIndex + 1} / {lightbox.images.length}
    </p>
  </div>
</div>

{/* Mobile Previous */}

<button
  onClick={(e) => {
    e.stopPropagation();
    prevImage();
  }}
  className="
    md:hidden
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    z-50
    w-11
    h-11
    rounded-full
    bg-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-white
  "
>
  <ChevronLeft size={22} />
</button>

{/* Mobile Next */}

<button
  onClick={(e) => {
    e.stopPropagation();
    nextImage();
  }}
  className="
    md:hidden
    absolute
    right-4
    top-1/2
    -translate-y-1/2
    z-50
    w-11
    h-11
    rounded-full
    bg-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-white
  "
>
  <ChevronRight size={22} />
</button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default LightboxPortal;