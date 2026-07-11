import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({
  title,
  subtitle,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16 md:mb-24 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className={i % 2 !== 0 ? "text-[#D4AF37]" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;