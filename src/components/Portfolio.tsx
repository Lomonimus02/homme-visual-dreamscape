
import React, { useState } from "react";
import PortfolioGalleryDialog from "./PortfolioGalleryDialog";

const images = [
  {
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=700&q=80",
    alt: "Современная гостиная",
    desc: "Современная гостиная с акцентом на уют",
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80",
    alt: "Рабочая зона у окна",
    desc: "Минималистичная спальня с видом",
  },
  {
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    alt: "Детали интерьера",
    desc: "Детали интерьера: акценты и текстуры",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    alt: "Зона кухни",
    desc: "Зона кухни с элементами лофта",
  },
];

const Portfolio = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageClick = (idx: number) => {
    setActiveIndex(idx);
    setDialogOpen(true);
  };

  return (
    <section className="section-fade w-full max-w-7xl mx-auto py-14 md:py-24 px-3 sm:px-6" id="portfolio">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-12 text-center">
        Портфолио
      </h2>
      <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div
            className="card-elevated flex flex-col overflow-hidden transition-all group cursor-pointer min-h-[330px]"
            key={img.src}
            onClick={() => handleImageClick(idx)}
            tabIndex={0}
            aria-label={`Открыть "${img.desc}" в крупном виде`}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleImageClick(idx);
            }}
            role="button"
          >
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex items-center">
              <p className="text-xl md:text-2xl font-playfair text-[#231f20] text-center w-full">
                {img.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <PortfolioGalleryDialog
        images={images}
        open={dialogOpen}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
        onClose={() => setDialogOpen(false)}
      />
    </section>
  );
};

export default Portfolio;
