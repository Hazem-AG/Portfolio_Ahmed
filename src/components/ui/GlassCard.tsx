import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({
  children,
  className = "",
  hover = true,
}: GlassCardProps) => (
  <div
    className={`
      bg-[#121212]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8
      ${
        hover
          ? "hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-1"
          : ""
      }
      ${className}
    `}
  >
    {children}
  </div>
);

export default GlassCard;
