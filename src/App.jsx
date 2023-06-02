import { useState } from "react";
import AboutUS from "./components/AboutUS";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUS />
      <Card />
      {/* <Carousel /> */}
      <OurWork />
      <Footer />
    </>
  );
}

export default App;
