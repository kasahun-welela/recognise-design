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
    <>
      <p className="text-center mt-20 text-xl font-extralight">
        With 10+ business growing with us
      </p>

      <div className="m-7 py-3 border-solid border-y-2  border-gray-200">
        <Slider {...settings}>
          <img src="b1.png" alt="business logo 1" className="max-h-14" />
          <img src="b2.png" alt="business logo 2" className="max-h-14" />
          <img src="b3.png" alt="business logo 3" className="max-h-14" />
          <img src="b4.png" alt="business logo 4" className="max-h-14" />
          <img src="b5.png" alt="business logo 5" className="max-h-14" />
          <img src="b6.png" alt="business logo 6" className="max-h-14" />
          <img src="b7.png" alt="business logo 7" className="max-h-14" />
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
