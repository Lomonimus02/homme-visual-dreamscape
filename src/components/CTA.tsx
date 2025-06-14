
const CTA = () => (
  <section className="section-fade w-full max-w-5xl mx-auto py-14 md:py-20 px-3 sm:px-6 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-5xl font-playfair mb-7">
      Готовы преобразить свой дом?
    </h2>
    <p className="max-w-2xl text-xl md:text-2xl mb-9 text-[#5B5B5B]">
      Свяжитесь с нами и получите первую консультацию бесплатно. Давайте вместе создадим пространство вашей мечты!
    </p>
    <a
      href="mailto:hello@hommedesign.ru"
      className="gold-btn text-xl md:text-2xl font-playfair inline-block shadow-xl px-10 py-4"
      style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
    >
      Записаться на консультацию
    </a>
  </section>
);

export default CTA;
