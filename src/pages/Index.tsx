
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CTA />
      <Footer />
      <Toaster />
    </>
  );
}
