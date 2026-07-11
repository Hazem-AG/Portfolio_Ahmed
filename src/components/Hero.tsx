import { motion } from "framer-motion";

import Section from "./ui/Section";
import Button from "./ui/Button";
import UserPlaceholder from "./ui/UserPlaceholder";

import { Facebook, Instagram, Linkedin } from "../icons/SocialIcons";
import { Phone, Download, TrendingUp, Award } from "../icons/SocialIcons";

const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center overflow-hidden pt-24 md:pt-32"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        
        {/* LEFT */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="order-2 lg:order-1 text-center lg:text-left z-10"
>
  {/* Name */}
  <div className="mb-4">
    <span className="text-[#D4AF37] text-lg md:text-xl font-semibold uppercase tracking-[0.35em]">
      Ahmed Hussein
    </span>
  </div>

  {/* Job Title */}
  <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-6">
    Performance Media Buyer & Social Media Specialist
  </div>

  {/* Main Heading */}
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Helping Brands Scale
    <br />
    <span className="text-[#D4AF37]">
      Through Performance Marketing
    </span>
  </h1>

  {/* Description */}
  <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
    Helping brands scale through{" "}
    <span className="text-white font-medium">
      performance marketing
    </span>
    ,{" "}
    <span className="text-white font-medium">
      creative strategy
    </span>
    , and{" "}
    <span className="text-white font-medium">
      data-driven campaigns
    </span>
    . With over{" "}
    <span className="text-[#D4AF37] font-semibold">
      7 years of experience
    </span>
    , I specialize in maximizing ROI, generating high-quality leads,
    reducing acquisition costs, and driving sustainable business growth
    across the Egyptian, GCC, and U.S. markets.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
    <Button
      variant="primary"
      onClick={() =>
        document
          .getElementById("casestudies")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      View Results
    </Button>

    <div className="flex items-center gap-3">
      {/* View CV */}
      <a
        href="public/cv/Ahmed-Hussein-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-7 h-14 rounded-full border border-white/10 bg-white/5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center font-medium"
      >
        View CV
      </a>

      {/* Download CV */}
      <a
        href="public/cv/Ahmed-Hussein-CV.pdf"
        download
        className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,.6)] transition-all duration-300"
      >
        <Download size={20} />
      </a>
    </div>
  </div>

  {/* Contact & Social */}
  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-white/10 pt-8">
    <a
      href="tel:+201556555808"
      className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition"
    >
      <Phone size={18} />
      +20 1556555808
    </a>

    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/share/1EPZ9fH7oA/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
      >
        <Facebook size={18} />
      </a>

      <a
        href="https://www.instagram.com/ahmedhusseinmb?igsh=MTlnOHJ5aDZuenJwMQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
      >
        <Instagram size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/ahmedhussein77?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
      >
        <Linkedin size={18} />
      </a>
    </div>
  </div>
</motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-2 max-w-md mx-auto"
        >

          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-[90px]" />

          <div className="relative aspect-square rounded-full border border-[#D4AF37]/20 overflow-hidden bg-[#121212] shadow-[0_0_40px_rgba(212,175,55,.15)] flex items-center justify-center">

            {/* لو عندك صورة شخصية */}
            { <img
              src="src/assets/images/1.png"
              className="w-full h-full object-cover"
              alt="Ahmed Hussein"
            /> }

            
          </div>

          {/* Card 1 */}

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-5 -left-8 bg-[#121212]/90 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-4"
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                <TrendingUp size={18} />
              </div>

              <div>
                <div className="text-xl font-bold text-white">
                  9M+
                </div>

                <div className="text-xs text-gray-400">
                  Ad Spend
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-5 -right-8 bg-[#121212]/90 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-4"
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                <Award size={18} />
              </div>

              <div>
                <div className="text-xl font-bold text-white">
                  100+
                </div>

                <div className="text-xs text-gray-400">
                  Campaigns
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;