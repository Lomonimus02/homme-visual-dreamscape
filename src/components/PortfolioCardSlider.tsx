
import React, { useEffect, useRef, useState } from "react";

type PortfolioCardSliderProps = {
  images: { src: string; alt: string }[];
  desc: string;
  interval?: number; // Интервал автопрокрутки в мс
};

// Время анимации в мс (должно быть < interval)
const FADE_DURATION = 500;

const PortfolioCardSlider: React.FC<PortfolioCardSliderProps> = ({
  images,
  desc,
  interval = 2500,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    sliderRef.current = setTimeout(() => {
      setPrevIndex(activeIndex);
      setIsFading(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
        setPrevIndex(null);
      }, FADE_DURATION);
    }, interval);
    return () => {
      if (sliderRef.current) clearTimeout(sliderRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, images.length, interval]);

  return (
    <div className="card-elevated flex flex-col overflow-hidden transition-all group min-h-[330px] max-w-full">
      <div className="relative w-full h-64 md:h-80 overflow-hidden select-none">
        {/* Предыдущее изображение (затухает) */}
        {prevIndex !== null && prevIndex !== activeIndex && (
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex].src}
            alt={images[prevIndex].alt}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-[${FADE_DURATION}ms] opacity-0 pointer-events-none`}
            style={{
              zIndex: 1,
              opacity: isFading ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms`,
            }}
            loading="lazy"
            draggable={false}
          />
        )}
        {/* Текущее изображение (появляется) */}
        <img
          key={activeIndex}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="object-cover w-full h-full absolute top-0 left-0 transition-opacity"
          style={{
            zIndex: 2,
            opacity: isFading ? 0 : 1,
            transition: `opacity ${FADE_DURATION}ms`,
          }}
          loading="lazy"
          draggable={false}
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "bg-[rgba(211,180,115,0.95)] scale-125"
                  : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-6 md:p-8 flex-1 flex items-center">
        <p className="text-xl md:text-2xl font-playfair text-[#231f20] text-center w-full">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCardSlider;
