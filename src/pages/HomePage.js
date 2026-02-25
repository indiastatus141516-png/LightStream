import React from "react";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import Products from "../components/Products";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Stats />
      <Products />
      <Services />
    </div>
  );
}
