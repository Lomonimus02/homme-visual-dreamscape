
const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-2 md:px-0 section-fade">
    <div className="absolute inset-0 -z-10">
      <img
        // Свежее интерьерное изображение комнаты
        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80"
        alt="Современный интерьер комнаты"
        className="object-cover w-full h-full rounded-b-3xl shadow-lg filter brightness-95 saturate-150"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#d3b473bb] via-[#f8f8f600] to-[#73bfd3bb] pointer-events-none rounded-b-3xl"/>
    </div>
    <div className="flex flex-col items-center z-10 w-full">
      <h1 className="text-6xl md:text-8xl font-playfair font-bold uppercase tracking-tight text-[#231f20] drop-shadow-md mb-3 md:mb-6 relative w-fit mx-auto">
        homme
        {/* Светящаяся золотая полоса шириной во все слово */}
        <span
          className="absolute left-0 right-0 mx-auto -bottom-1 md:-bottom-2 h-3 md:h-4 w-full pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="block w-full max-w-full h-full rounded-full animate-homme-glow bg-[rgba(211,180,115,0.86)] blur-sm opacity-90"></span>
        </span>
      </h1>
      {/* убираем прежнюю узкую gold line */}
      {/* <div className="bg-accentGold w-24 h-2 rounded-full mb-6 md:mb-8 animate-gold-glow"/> */}
      <a
        href="#portfolio"
        className="gold-btn text-xl md:text-2xl font-playfair shadow-xl animate-scale-in px-10 py-4"
        style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
      >
        Смотреть портфолио
      </a>
    </div>
  </section>
);

export default Hero;

