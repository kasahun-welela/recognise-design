import React from "react";
import AboutUS from "../components/AboutUS";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import OurWork from "../components/OurWork";
import Testimonal from "../components/Testimonal";
import Collaboration from "../components/Collaboration";

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <AboutUS />
      <Card />
      <OurWork />
      <Testimonal />
      <Collaboration />
    </>
  );
}

export default Home;
