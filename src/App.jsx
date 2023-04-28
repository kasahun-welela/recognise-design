import { useState } from "react";
import AboutUS from "./components/AboutUS";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUS />
      <Card />
      {/* <Carousel /> */}
      <OurWork />
    </>
  );
}

export default App;
