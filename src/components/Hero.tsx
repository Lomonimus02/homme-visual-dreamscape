const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-2 md:px-0 section-fade">
    <div className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
        alt="Яркий современный интерьер"
        className="object-cover w-full h-full rounded-b-3xl shadow-lg filter brightness-95 saturate-150"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#d3b473bb] via-[#f8f8f600] to-[#73bfd3bb] pointer-events-none rounded-b-3xl"/>
    </div>
    <div className="flex flex-col items-center z-10">
      <h1 className="text-6xl md:text-8xl font-playfair font-bold uppercase tracking-tight text-[#231f20] drop-shadow-md mb-6 md:mb-8">
        homme
      </h1>
      <div className="bg-accentGold w-24 h-2 rounded-full mb-6 md:mb-8 animate-gold-glow"/>
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
