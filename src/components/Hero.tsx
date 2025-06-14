
import React, { useEffect, useRef, useState } from "react";

// Новый фон: Можно выбрать, например, "photo-1470071459604-3b5ec3a7fe05" (туманная гора)
const HERO_BG =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [glowWidth, setGlowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (textRef.current) {
      setGlowWidth(textRef.current.offsetWidth);
    }
    // Обновлять ширину при ресайзе окна
    const handleResize = () => {
      if (textRef.current) {
        setGlowWidth(textRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-2 md:px-0 section-fade">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="Туманная гора"
          className="object-cover w-full h-full rounded-b-3xl shadow-lg filter brightness-95 saturate-150"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#d3b473bb] via-[#f8f8f600] to-[#73bfd3bb] pointer-events-none rounded-b-3xl" />
      </div>
      <div className="flex flex-col items-center z-10 w-full">
        <h1
          ref={textRef}
          className="text-6xl md:text-8xl font-playfair font-bold uppercase tracking-tight text-[#231f20] drop-shadow-md mb-3 md:mb-6 relative w-fit mx-auto"
        >
          homme
          <span
            className="absolute left-1/2 -bottom-1 md:-bottom-2 h-3 md:h-4 pointer-events-none flex items-center justify-center"
            style={{
              width: glowWidth ? `${glowWidth}px` : "100%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          >
            <span className="block w-full h-full rounded-full animate-homme-glow bg-[rgba(211,180,115,0.86)] blur-sm opacity-90"></span>
          </span>
        </h1>
        <button
          onClick={handleScrollToPortfolio}
          className="gold-btn text-xl md:text-2xl font-playfair shadow-xl animate-scale-in px-10 py-4"
          style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
          type="button"
        >
          Смотреть портфолио
        </button>
      </div>
    </section>
  );
};

export default Hero;
