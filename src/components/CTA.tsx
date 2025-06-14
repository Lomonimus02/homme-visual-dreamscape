
const CTA = () => (
  <section className="section-fade w-full max-w-5xl mx-auto py-16 md:py-20 px-4 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-4xl font-playfair mb-6">Готовы преобразить свой дом?</h2>
    <p className="max-w-xl text-lg mb-8 text-[#5B5B5B]">
      Свяжитесь с нами и получите первую консультацию бесплатно. Давайте вместе создадим пространство вашей мечты!
    </p>
    <a
      href="mailto:hello@hommedesign.ru"
      className="gold-btn text-lg font-playfair inline-block shadow-xl"
      style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
    >
      Записаться на консультацию
    </a>
  </section>
);

export default CTA;
