
import React, { useEffect, useRef, useState } from "react";

type PortfolioCardSliderProps = {
  images: { src: string; alt: string }[];
  desc: string;
  interval?: number; // Интервал автопрокрутки в мс
};

const PortfolioCardSlider: React.FC<PortfolioCardSliderProps> = ({
  images,
  desc,
  interval = 2500,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  // Автоматическая прокрутка
  useEffect(() => {
    if (images.length <= 1) return;
    sliderRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (sliderRef.current) clearTimeout(sliderRef.current);
    };
  }, [activeIndex, images.length, interval]);

  // Простой индикатор
  return (
    <div className="card-elevated flex flex-col overflow-hidden transition-all group min-h-[330px] max-w-full">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="object-cover w-full h-full transition-all duration-500"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
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
