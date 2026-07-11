import { useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#090909] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white flex items-center"
      >
        A
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="text-[#D4AF37]"
        >
          H.
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeInOut",
        }}
        className="h-1 bg-[#D4AF37] mt-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
      />
    </motion.div>
  );
};

export default Preloader;