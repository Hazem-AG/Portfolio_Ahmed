import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-[#D4AF37] text-black hover:bg-[#b5952f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    secondary:
      "bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;