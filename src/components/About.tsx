import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import aboutImage from "../assets/images/2.png";
import UserPlaceholder from "../components/ui/UserPlaceholder";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-[#121212]/30 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-[#D4AF37]/20 relative shadow-[0_0_30px_rgba(212,175,55,0.05)]">
  <img
    src={aboutImage}
    loading="lazy"
    alt="About Ahmed"
    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
  />

  {/* Fallback Placeholder */}
  <div className="absolute inset-0 flex items-center justify-center text-white/10 mix-blend-overlay">
    <UserPlaceholder size={150} />
  </div>
</div>

          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-[#D4AF37] rounded-full flex flex-col items-center justify-center text-black shadow-[0_0_40px_rgba(212,175,55,0.5)] border-4 border-[#090909]">
            <span className="text-4xl md:text-5xl font-bold mb-1">
              7+
            </span>

            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center opacity-80">
              Years
              <br />
              Experience
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>

            <div className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
              About Me
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
            Data-Driven.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
              Performance Focused.
            </span>
            <br />
            Results Oriented.
          </h2>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
  <p>
    I am a <strong className="text-white">Senior Performance Media Buyer</strong> and
    <strong className="text-white"> Digital Marketing Specialist</strong> with over
    <strong className="text-[#D4AF37] font-medium"> 7 years of experience</strong> in
    digital marketing. I began my career as a Social Media Specialist, building
    a strong foundation in content strategy, audience behavior, and brand
    communication before transitioning into performance marketing.
  </p>

  <p>
    Throughout my career, I have collaborated with businesses across the
    Egyptian, GCC, and U.S. markets, working with both established companies
    and growing brands through freelance and full-time roles. I have managed
    high-performing campaigns across a wide range of industries, including
    fashion, tourism, restaurants, automotive, furniture, healthcare,
    publishing, construction, and education. My approach is centered on
    creating data-driven marketing strategies that increase revenue, maximize
    ROI, and deliver sustainable business growth.
  </p>

  <p>
    Beyond media buying, I specialize in creative strategy, ad creative
    development, and building high-converting e-commerce stores using
    <strong className="text-[#D4AF37] font-medium"> Shopify</strong> and
    <strong className="text-[#D4AF37] font-medium"> Easy Order</strong>. I also
    leverage AI-powered tools to optimize workflows, improve campaign
    performance, and support smarter marketing decisions. My core expertise
    includes <strong className="text-white">Performance Marketing</strong>,
    <strong className="text-white"> Media Buying</strong>,
    <strong className="text-white"> Social Media Strategy</strong>,
    <strong className="text-white"> E-commerce Growth</strong>,
    <strong className="text-white"> Lead Generation</strong>,
    <strong className="text-white"> Conversion Optimization</strong>,
    <strong className="text-white"> Marketing Analytics</strong>, and
    <strong className="text-white"> AI-Driven Marketing Solutions</strong>.
  </p>
</div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;