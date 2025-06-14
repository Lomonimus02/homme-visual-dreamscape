
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Index() {
  return (
    <div className="bg-main-gradient min-h-screen w-full flex flex-col">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
}
