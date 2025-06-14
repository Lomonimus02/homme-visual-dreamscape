
import ConsultFormDialog from "./ConsultFormDialog";

const CTA = () => (
  <section className="section-fade w-full max-w-5xl mx-auto py-14 md:py-20 px-3 sm:px-6 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-5xl font-playfair mb-7">
      Готовы преобразить свой дом?
    </h2>
    <p className="max-w-2xl text-xl md:text-2xl mb-9 text-[#5B5B5B]">
      Свяжитесь с нами и получите первую консультацию бесплатно. Давайте вместе создадим пространство вашей мечты!
    </p>
    <div className="w-full flex justify-center">
      {/* Добавляем явное выравнивание текста внутри кнопки */}
      <ConsultFormDialog />
    </div>
    <div className="flex flex-col md:flex-row gap-1 md:gap-8 items-center mt-7 text-base md:text-lg text-[#5b5b5b]">
      <span>
        Телефон:&nbsp;
        <a
          href="tel:+79262225544"
          className="text-[#d3b473] underline underline-offset-2 hover:text-[#ad8e47] transition-colors"
        >
          +7&nbsp;926&nbsp;222-55-44
        </a>
      </span>
      <span className="hidden md:inline-block text-[#b0a485] select-none">|</span>
      <span>
        Email:&nbsp;
        <a
          href="mailto:hello@hommedesign.ru"
          className="text-[#d3b473] underline underline-offset-2 hover:text-[#ad8e47] transition-colors"
        >
          hello@hommedesign.ru
        </a>
      </span>
    </div>
  </section>
);

export default CTA;
