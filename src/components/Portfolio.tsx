
import React from "react";
import PortfolioCardSlider from "./PortfolioCardSlider";

// Массивы для карточек портфолио.
// Для примера добавим extraImages к карточкам, если хотите — замените на свои!
const mainImages = [
  [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=700&q=80",
      alt: "Современная гостиная",
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80",
      alt: "Рабочая зона у окна",
    },
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
      alt: "Детали интерьера",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      alt: "Зона кухни",
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
      alt: "Уютная спальня с деревянной мебелью",
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=700&q=80",
      alt: "Современная кухня",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=700&q=80",
      alt: "Мягкий уголок для отдыха",
    },
    {
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=700&q=80",
      alt: "Минималистичный санузел",
    },
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
      alt: "Детали интерьера",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
      alt: "Детали интерьера",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      alt: "Зона кухни",
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=700&q=80",
      alt: "Современная гостиная",
    },
  ],
];

const descriptions = [
  "Современная гостиная с акцентом на уют",
  "Минималистичная спальня с видом",
  "Лаунж-зона для отдыха с панорамным окном",
  "Минималистичный санузел с атмосферным светом",
];

const Portfolio = () => {
  return (
    <section className="section-fade w-full max-w-7xl mx-auto py-14 md:py-24 px-3 sm:px-6" id="portfolio">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-12 text-center">
        Портфолио
      </h2>
      <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mainImages.map((imgs, idx) => (
          <PortfolioCardSlider key={idx} images={imgs} desc={descriptions[idx] || ""} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
