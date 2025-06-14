
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
  <section className="section-fade w-full max-w-6xl mx-auto py-16 md:py-20 px-4" id="services">
    <h2 className="text-4xl md:text-5xl font-playfair mb-10 text-center">Услуги</h2>
    <div className="grid md:grid-cols-4 gap-8">
      {services.map((srv) => (
        <div key={srv.title} className="flex flex-col items-center card-elevated p-8">
          <srv.icon size={42} className="text-accentGold mb-4" />
          <h3 className="text-2xl font-playfair mb-2 text-center">{srv.title}</h3>
          <p className="text-base text-[#5B5B5B] text-center">{srv.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
