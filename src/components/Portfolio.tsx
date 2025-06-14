
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

const Portfolio = () => (
  <section className="section-fade w-full max-w-6xl mx-auto py-16 md:py-20 px-4" id="portfolio">
    <h2 className="text-4xl md:text-5xl font-playfair mb-10 text-center">Портфолио</h2>
    <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {images.map((img) => (
        <div
          className="card-elevated flex flex-col overflow-hidden transition-all group cursor-pointer"
          key={img.src}
        >
          <div className="relative w-full h-56 md:h-64 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <p className="text-lg font-playfair text-[#231f20]">{img.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
