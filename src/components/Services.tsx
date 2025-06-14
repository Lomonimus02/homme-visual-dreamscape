
import { Paintbrush, Home, Sofa, Ruler } from "lucide-react";

const services = [
  {
    title: "Дизайн-проект интерьера",
    icon: Paintbrush,
    description:
      "Создаем индивидуальные концепции, 3D-визуализации и чертежи для вашего пространства.",
  },
  {
    title: "Авторский надзор",
    icon: Ruler,
    description:
      "Полное сопровождение реализации проекта, контроль качества на всех этапах.",
  },
  {
    title: "Комплектация объектов",
    icon: Sofa,
    description:
      "Подбор мебели, отделочных материалов, аксессуаров и световых решений.",
  },
  {
    title: "Подбор недвижимости",
    icon: Home,
    description: "Помогаем подобрать идеальное пространство для вашего будущего интерьера.",
  },
];

const Services = () => (
  // Уменьшен нижний отступ (py-7 вместо py-14/md:py-24)
  <section className="section-fade w-full max-w-7xl mx-auto py-7 md:py-12 px-3 sm:px-6" id="services">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-12 text-center">
      Услуги
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {services.map((srv) => (
        <div
          key={srv.title}
          className="flex flex-col items-center card-elevated p-8 md:p-10 lg:p-12 h-full min-h-[310px] transition-transform duration-300 hover:scale-105"
        >
          <srv.icon size={54} className="text-accentGold mb-6" />
          <h3 className="text-2xl md:text-3xl font-playfair mb-3 text-center">
            {srv.title}
          </h3>
          <p className="text-lg md:text-xl text-[#5B5B5B] text-center leading-normal">
            {srv.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
