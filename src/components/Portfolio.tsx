
import React from "react";
import PortfolioCardSlider from "./PortfolioCardSlider";

// Массивы с новыми интерьерными фото и их описаниями
const mainImages = [
  [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      alt: "Современная гостиная с большими окнами и светлой мебелью",
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=700&q=80",
      alt: "Интерьер уютной гостиной в стиле минимализм",
    },
    {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=80",
      alt: "Дизайнерские декоративные элементы в гостиной",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=80",
      alt: "Просторная кухня с деревянной мебелью и островом",
    },
    {
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80",
      alt: "Кухня с современным дизайном и акцентами цвета",
    },
    {
      src: "https://images.unsplash.com/photo-1505691723518-41cb85ee2b63?auto=format&fit=crop&w=700&q=80",
      alt: "Светлая столовая с круглыми светильниками",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80",
      alt: "Стильная спальня с текстильными акцентами",
    },
    {
      src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=700&q=80",
      alt: "Минималистичная спальня с белыми стенами",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80",
      alt: "Просторная спальня с деревянным полом и большими окнами",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=700&q=80",
      alt: "Ванная комната в скандинавском стиле с растениями",
    },
    {
      src: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=700&q=80",
      alt: "Современный санузел с мраморной отделкой",
    },
    {
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
      alt: "Светлая ванная комната с душевой кабиной",
    },
  ],
];

const descriptions = [
  "Современная гостиная с большими окнами и уютной атмосферой",
  "Функциональная кухня с дизайнерскими деталями",
  "Cпальня с гармонией цвета и уюта",
  "Ванная и санузел — место для расслабления",
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
