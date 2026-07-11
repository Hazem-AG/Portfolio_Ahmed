import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import SEOManager from "./components/ui/SEOManager";
import CustomCursor from "./components/ui/CustomCursor";
import Preloader from "./components/ui/Preloader";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import ResultsGallery from "./components/ResultsGallery";
import CaseStudies from "./components/CaseStudies";
import BrandsMarquee from "./components/BrandsMarquee";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

import {
  ArrowUp,
  MessageCircle,
} from "./icons/SocialIcons";
import { LightboxProvider } from "./context/LightboxContext";
import LightboxPortal from "./context/LightboxPortal";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LightboxProvider>
    <>
    <>
      <SEOManager />

      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={`bg-[#090909] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden ${
          isLoading
            ? "fixed inset-0 pointer-events-none opacity-0"
            : "opacity-100 transition-opacity duration-1000"
        }`}
      >
        {/* Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[9999] drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
          style={{ scaleX }}
        />

        {/* Global CSS */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }

          @media (pointer: fine) {
            a,
            button,
            input,
            textarea,
            select {
              cursor: none !important;
            }
          }
        `}</style>

        {/* Background Glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full"></div>

          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full"></div>
        </div>

        <Navbar />

        <main className="relative z-10">
          <Hero />

          <About />

          <Services />

          <Skills />

          <Stats />

          <ResultsGallery />

          <CaseStudies />

          <BrandsMarquee />

          

          <Contact />
        </main>

        <Footer />
<LightboxPortal />
        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 md:w-14 md:h-14 bg-[#121212]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black shadow-xl hover:-translate-y-2 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </button>

          <a
            href="https://wa.me/201556555808"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Contact"
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

            <MessageCircle
              size={30}
            />
          </a>
        </div>
      </div>
    </>
      </>
  </LightboxProvider>
);
}