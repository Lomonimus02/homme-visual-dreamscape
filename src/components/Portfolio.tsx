
import React, { useState } from "react";
import PortfolioGalleryDialog from "./PortfolioGalleryDialog";

// Основные фото, которые видны в портфолио
const mainImages = [
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

// Дополнительные фото, которые будут только в модалке
const extraImages = [
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
    alt: "Уютная спальня с деревянной мебелью",
    desc: "Уютная спальня с деревянной мебелью и зелёными акцентами",
  },
  {
    src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=700&q=80",
    alt: "Современная кухня",
    desc: "Современная кухня с просторной рабочей зоной",
  },
  {
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=700&q=80",
    alt: "Мягкий уголок для отдыха",
    desc: "Лаунж-зона для отдыха с панорамным окном",
  },
  {
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=700&q=80",
    alt: "Минималистичный санузел",
    desc: "Минималистичный санузел с атмосферным светом",
  },
];

const Portfolio = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Открываем модалку всегда с первой дополнительной фотографии
  const handleImageClick = () => {
    setDialogOpen(true);
  };

  // Индекс активного изображения в дополнительной галерее
  const [activeExtraIndex, setActiveExtraIndex] = useState<number>(0);

  // При каждом открытии всегда начинаем с первой картинки
  const handleOpen = () => {
    setActiveExtraIndex(0);
    setDialogOpen(true);
  };

  return (
    <section className="section-fade w-full max-w-7xl mx-auto py-14 md:py-24 px-3 sm:px-6" id="portfolio">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-12 text-center">
        Портфолио
      </h2>
      <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mainImages.map((img, idx) => (
          <div
            className="card-elevated flex flex-col overflow-hidden transition-all group cursor-pointer min-h-[330px]"
            key={img.src}
            onClick={handleOpen}
            tabIndex={0}
            aria-label={`Открыть дополнительную галерею`}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleOpen();
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
        images={extraImages}
        open={dialogOpen}
        activeIndex={activeExtraIndex}
        onChange={setActiveExtraIndex}
        onClose={() => setDialogOpen(false)}
      />
    </section>
  );
};

export default Portfolio;
