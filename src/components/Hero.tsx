
const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[65vh] py-16 px-4 md:px-0 section-fade">
    <div className="absolute inset-0 -z-10">
      {/* Новое сочное фото (пример: яркий интерьер, Unsplash) */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
        alt="Яркий современный интерьер"
        className="object-cover w-full h-full rounded-b-3xl shadow-lg filter brightness-95 saturate-150"
        loading="lazy"
      />
      {/* Новый градиент-оверлей с оттенками для глубины */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d3b473bb] via-[#f8f8f600] to-[#73bfd3bb] pointer-events-none rounded-b-3xl"/>
    </div>
    <div className="flex flex-col items-center z-10">
      <h1 className="text-5xl md:text-7xl font-playfair font-bold uppercase tracking-tight text-[#231f20] drop-shadow-md mb-4">
        homme
      </h1>
      {/* Анимированная "золотая" линия */}
      <div className="bg-accentGold w-20 h-1 rounded-full mb-7 animate-gold-glow"/>
      <p className="max-w-2xl text-xl md:text-2xl text-[#3C96A5] font-light mb-8 text-center drop-shadow-lg">
        Эстетика, уют и роскошь в каждом интерьере.<br/>Мы создаем не просто дизайн — мы создаем атмосферу вашего дома.
      </p>
      <a
        href="#portfolio"
        className="gold-btn text-lg font-playfair shadow-xl animate-scale-in"
        style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
      >
        Смотреть портфолио
      </a>
    </div>
  </section>
);

export default Hero;
