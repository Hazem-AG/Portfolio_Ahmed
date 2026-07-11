import { motion } from "framer-motion";

import profileImage from "../assets/images/1.png";
import cvFile from "../assets/CV/Ahmed-Hussein-CV.pdf";

import Section from "./ui/Section";
import Button from "./ui/Button";

import {
  Facebook,
  Instagram,
  Linkedin,
} from "../icons/SocialIcons";

import {
  Phone,
  Download,
  TrendingUp,
  Award,
} from "../icons/SocialIcons";

const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center overflow-hidden pt-24 md:pt-32"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >

          {/* Name */}

          <div className="mb-3">
            <span
              className="
                text-[#D4AF37]
                uppercase
                tracking-[0.3em]
                font-semibold
                text-lg
                sm:text-base
                md:text-lg
              "
            >
              Ahmed Hussein
            </span>
          </div>

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-[#D4AF37]/10
              border
              border-[#D4AF37]/25
              text-[#D4AF37]
              text-xs
              sm:text-sm
              font-medium
              mb-5
            "
          >
            Performance Media Buyer & Social Media Specialist
          </div>

          {/* Heading */}

          <h1
            className="
              text-[29px]
              sm:text-[2.5rem]
              lg:text-[3.4rem]
              font-bold
              leading-[1.15]
              mb-5
              text-white
            "
          >
            Helping Brands Scale

            <br />

            
          </h1>
          <h1
            className="
              text-[22px]
              sm:text-[2.5rem]
              lg:text-[3.4rem]
              font-bold
              leading-[1.15]
              mb-5
              text-white
            "
          >
          <span className="text-[#D4AF37] ">
              Through Performance Marketing
            </span>
</h1>
          {/* Description */}

          
                    {/* ================= ACTION BUTTONS ================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              justify-center
              lg:justify-start
              mb-10
            "
          >
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("casestudies")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              View Results
            </Button>

            <div className="flex gap-3 w-full sm:w-auto">

              {/* View CV */}

              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  sm:flex-none
                  h-14
                  px-6
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  font-medium
                "
              >
                View CV
              </a>

              {/* Download CV */}

              <a
                href={cvFile}
                download="Ahmed-Hussein-CV.pdf"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  hover:shadow-[0_0_25px_rgba(212,175,55,.5)]
                  transition-all
                  duration-300
                  shrink-0
                "
              >
                <Download size={20} />
              </a>

            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div className="space-y-5">

            <a
              href="tel:+201556555808"
              className="
                inline-flex
                items-center
                gap-3
                text-gray-400
                hover:text-[#D4AF37]
                transition-colors
                text-sm
                sm:text-base
              "
            >
              <Phone size={18} />

              <span>
                +20 1556555808
              </span>
            </a>

            {/* Social */}

            <div
              className="
                flex
                justify-center
                lg:justify-start
                gap-3
              "
            >
              <a
                href="https://www.facebook.com/share/1EPZ9fH7oA/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:border-[#D4AF37]
                  transition-all
                "
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/ahmedhusseinmb?igsh=MTlnOHJ5aDZuenJwMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:border-[#D4AF37]
                  transition-all
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmedhussein77?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:border-[#D4AF37]
                  transition-all
                "
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

        </motion.div>
        {/* ================= RIGHT ================= */}

<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="
    relative
    order-1
    lg:order-2
    w-[230px]
    sm:w-[280px]
    md:w-[360px]
    lg:w-[420px]
    mx-auto
  "
>
  {/* Glow */}

  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-[90px]" />

  {/* Profile */}

  <div
    className="
      relative
      aspect-square
      rounded-[60px]
      overflow-hidden
      border
      border-[#D4AF37]/20
      bg-[#121212]
      shadow-[0_0_40px_rgba(212,175,55,.15)]
    "
  >
    <img
      src={profileImage}
      alt="Ahmed Hussein"
      loading="eager"
      draggable={false}
      className="
        w-full
        h-full
        object-cover
        select-none
      "
    />
  </div>

  {/* ================= Floating Card 1 ================= */}

  

  {/* ================= Floating Card 2 ================= */}

  

</motion.div>
      </div>
    </Section>
  );
};

export default Hero;