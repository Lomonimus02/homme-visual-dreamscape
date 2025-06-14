
// Главная страница — homme интерьерное агентство
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f6] flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
