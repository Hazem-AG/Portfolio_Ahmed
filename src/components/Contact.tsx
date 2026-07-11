import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Phone, MapPin, Loader2 } from "lucide-react";

import Section from "../components/ui/Section";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_qnvr79e",
        "template_1tzqs54",
        form.current,
        "YqkBaDgOUq8v8Pinn"
      );

      setStatus("success");

      form.current.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />

            <div className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
              Get In Touch
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Let's scale your brand together.
          </h2>

          <p className="text-gray-400 mb-12 max-w-md text-lg">
            Ready to take your digital marketing to the next level?
            Drop a message and let's discuss your next campaign.
          </p>

          <div className="space-y-4">

            <a
              href="mailto:ahmedhusseinomara@gmail.com"
              className="flex items-center gap-6 p-5 rounded-2xl bg-[#121212]/50 hover:bg-[#1a1a1a] transition-all border border-transparent hover:border-[#D4AF37]/30 group"
            >
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0">
                <Mail size={24} />
              </div>

              <div className="overflow-hidden">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Email
                </div>

                <div className="text-white font-medium text-sm md:text-base truncate">
                  ahmedhusseinomara@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+201556555808"
              className="flex items-center gap-6 p-5 rounded-2xl bg-[#121212]/50 hover:bg-[#1a1a1a] transition-all border border-transparent hover:border-[#D4AF37]/30 group"
            >
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0">
                <Phone size={24} />
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Phone / WhatsApp
                </div>

                <div className="text-white font-medium text-sm md:text-base">
                  +20 1556555808
                </div>
              </div>
            </a>

            <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#121212]/50 border border-transparent">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin size={24} />
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Location
                </div>

                <div className="text-white font-medium text-sm md:text-base">
                  Egypt (Available Worldwide)
                </div>
              </div>
            </div>

          </div>
        </motion.div>
                {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="!p-8 md:!p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[50px] pointer-events-none" />

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your name"
                    className="w-full bg-[#090909] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@company.com"
                    className="w-full bg-[#090909] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  className="w-full bg-[#090909] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#090909] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                />
              </div>

              {status === "success" && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 text-center py-3">
                  ✅ Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-center py-3">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full !py-5 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;