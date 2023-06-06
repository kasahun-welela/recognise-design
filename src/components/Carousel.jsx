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
    <div>
      <Slider
        {...settings}
        className="m-7 flex gap-2  border-solid border-y-2 py-2 border-gray-200 justify-center items-center"
      >
        <div>
          <img src="b1.png" alt="business logo 1" />
        </div>
        <div>
          <img src="b2.png" alt="business logo 2" />
        </div>
        <div>
          <img src="b3.png" alt="business logo 3" />
        </div>
        <div>
          <img src="b4.png" alt="business logo 4" />
        </div>
        <div>
          <img src="b5.png" alt="business logo 5" />
        </div>
        <div>
          <img src="b6.png" alt="business logo 6" />
        </div>
        <div>
          <img src="b7.png" alt="business logo 7" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
