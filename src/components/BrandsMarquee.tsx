import { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { BRAND_LOGOS } from "../data/brands";

// مكون صغير يمثل "مجموعة" واحدة من اللوجوهات لسهولة التكرار
const LogoSet = ({ setRef }: { setRef?: React.RefObject<HTMLDivElement | null> }) => (
  <div
    ref={setRef}
    className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24 shrink-0"
  >
    {BRAND_LOGOS.map((brand, index) => (
      <div
        key={index}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 hover:scale-110 hover:border-[#D4AF37] transition-all duration-300 shrink-0"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable={false} // إيقاف السحب الافتراضي للمتصفح للصور
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const BrandsMarquee = () => {
  const [contentWidth, setContentWidth] = useState(0);
  const [isReady, setIsReady] = useState(false); // لإخفاء الشريط حتى يتم حساب المقاسات لمنع الوميض
  const measureRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  // حالات الشريط: PLAYING (شغال) | PAUSED (واقف) | DRAGGING (يُسحب) | GLIDING (يتزحلق بعد سحبة قوية)
  const mode = useRef("PLAYING"); 
  const currentSpeed = useRef(0);
  const targetSpeed = -1.5; // السرعة الطبيعية
  // In browser environments setTimeout returns a number, so use number | null
  const pauseTimeout = useRef<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (measureRef.current) {
        const width = measureRef.current.offsetWidth;
        setContentWidth(width);
        // نضبط نقطة البداية في منتصف الثلاث نسخ حتى يتمكن من السحب يميناً ويساراً بحرية
        if (!isReady) {
          x.set(-width);
          setIsReady(true);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    const timeoutId = setTimeout(updateWidth, 500);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeoutId);
    };
  }, [isReady, x]);

  useAnimationFrame((_t, delta) => {
    if (!isReady || !contentWidth) return;

    let currentX = x.get();

    // السحر هنا: الدوران اللانهائي المخفي للعين في كلا الاتجاهين
    if (currentX <= -contentWidth * 2) {
      x.set(currentX + contentWidth);
      currentX = x.get();
    } else if (currentX >= 0) {
      x.set(currentX - contentWidth);
      currentX = x.get();
    }

    const timeScale = delta / 16.66; // معادلة السرعة لتعمل بنفس الكفاءة على شاشات 60hz و 144hz

    if (mode.current === "DRAGGING") {
      return; // أوقف حركة الأنيميشن ودع المستخدم يسحب بيده
    }

    if (mode.current === "GLIDING") {
      // تطبيق "الاحتكاك" لإبطاء السحبة تدريجياً
      currentSpeed.current *= Math.pow(0.96, timeScale);
      
      // إذا توقف الشريط تقريباً (سرعة أقل من 0.5)
      if (Math.abs(currentSpeed.current) < 0.5) {
        mode.current = "PAUSED";
        pauseTimeout.current = setTimeout(() => {
          mode.current = "PLAYING"; // بعد 3 ثواني من التوقف يبدأ يعود
        }, 3000);
      }
    } else if (mode.current === "PLAYING") {
      // تسارع تدريجي ناعم للعودة للسرعة الطبيعية
      currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.02 * timeScale;
    } else if (mode.current === "PAUSED") {
      currentSpeed.current = 0;
    }

    // تحديث مكان الشريط بناءً على السرعة المحسوبة
    if (currentSpeed.current !== 0) {
      x.set(currentX + currentSpeed.current * timeScale);
    }
  });

  // دوال التفاعل مع اللمس والماوس
  const handleInteractionStart = () => {
    if (mode.current !== "DRAGGING" && mode.current !== "GLIDING") {
      mode.current = "PAUSED";
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    }
  };

  const handleInteractionEnd = () => {
    if (mode.current === "PAUSED") {
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        mode.current = "PLAYING";
      }, 3000);
    }
  };

  const handleDragStart = () => {
    mode.current = "DRAGGING";
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
  };

  const handleDragEnd = (_e: any, info: any) => {
    // حساب سرعة سحبة يد المستخدم
    currentSpeed.current = info.velocity.x / 60; 
    
    // إذا سحب بقوة (أكبر من 1 بيكسل/فريم) ادخله في وضع الانزلاق
    if (Math.abs(currentSpeed.current) > 1) {
      mode.current = "GLIDING";
    } else {
      // إذا كان السحب بطيئاً جداً، أوقفه وابدأ عد الـ 3 ثواني فوراً
      mode.current = "PAUSED";
      pauseTimeout.current = setTimeout(() => {
        mode.current = "PLAYING";
      }, 3000);
    }
  };

  return (
    <Section id="brands" className="overflow-hidden py-16 md:py-24">
      <SectionHeader
        title="Trusted By"
        subtitle="Partnered with diverse brands across multiple industries globally."
      />

      <div className="relative w-full flex overflow-hidden mt-10 border-y border-white/5 py-10 bg-[#121212]/20 cursor-grab active:cursor-grabbing">
        {/* التدرجات الجانبية للإخفاء الناعم */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          style={{ x, opacity: isReady ? 1 : 0 }} // الشريط يظل مخفياً لثانية حتى يتم حساب مقاساته
          drag="x"
          dragMomentum={false} // أغلقنا الاحتكاك الافتراضي الخاص بـ Framer ليقوم الكود الخاص بنا بالمهمة
          dragElastic={0}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onPointerDown={handleInteractionStart}
          onPointerUp={handleInteractionEnd}
          onHoverStart={handleInteractionStart} // يوقف الشريط بمجرد مرور الماوس عليه (الكمبيوتر)
          onHoverEnd={handleInteractionEnd}     // يبدأ العد بمجرد إبعاد الماوس
          className="flex whitespace-nowrap min-w-max transition-opacity duration-500"
        >
          {/* 3 مجموعات מתطابقة. نبدأ في المجموعة الوسطى ليتيح للمستخدم السحب اللانهائي في كلا الاتجاهين! */}
          <LogoSet />
          <LogoSet setRef={measureRef} />
          <LogoSet />
        </motion.div>
      </div>
    </Section>
  );
};

export default BrandsMarquee;