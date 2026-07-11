import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;