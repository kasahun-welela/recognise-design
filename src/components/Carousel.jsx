import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="m-7 border-solid border-y-2  border-gray-200">
      <Slider {...settings}>
        <img src="b1.png" alt="business logo 1" />

        <img src="b2.png" alt="business logo 2" />

        <img src="b3.png" alt="business logo 3" />

        <img src="b4.png" alt="business logo 4" />

        <img src="b5.png" alt="business logo 5" />

        <img src="b6.png" alt="business logo 6" />

        <img src="b7.png" alt="business logo 7" />
      </Slider>
    </div>
  );
}

export default Carousel;
