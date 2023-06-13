import React from "react";
import AboutUS from "../components/AboutUS";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import OurWork from "../components/OurWork";
import Testimonal from "../components/Testimonal";
import Collaboration from "../components/Collaboration";
import { data } from "../cardData";

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <AboutUS />
      <div className="m-7 lg:mx-40 md:mx-24 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((values) => (
          <Card
            key={values.id}
            bgColor={values.bgColor}
            topImgPath={values.topImgPath}
            title={values.title}
            description={values.description}
            bottomImgPath={values.bottomImgPath}
            img={values.img}
            arrow={values.arrow}
          />
        ))}
      </div>

      <OurWork />
      <Testimonal />
      <Collaboration />
    </>
  );
}

export default Home;
