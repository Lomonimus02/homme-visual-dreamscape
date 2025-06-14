
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Красочный фон-градиент
    <div className="w-full min-h-screen bg-main-gradient flex flex-col">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

