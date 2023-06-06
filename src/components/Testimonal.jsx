import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h3 className="text-center font-semibold  text-blue-800">Testimonal</h3>
      <h1 className="text-center font-bold text-xl mb-4">
        People Who work with us
      </h1>
      <Slider {...settings} className="mx-7">
        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col rounded-xl max-w-sm mb-8 ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel Rose</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 1 end */}

        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col  max-w-sm rounded-xl ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel XXXX</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 2 end */}
        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col  max-w-sm rounded-xl ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel YYYY</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 3 end */}
        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col  max-w-sm rounded-xl ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel ZZZZ</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 4 end */}
        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col  max-w-sm rounded-xl ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel BBBB</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 5 end */}
        {/* testimonal card */}
        <div className=" p-4 shadow-xl flex flex-col  max-w-sm rounded-xl ">
          <div className="flex p-3">
            <img src="angel.png" alt="testimonal image" />
            <div className="ml-4">
              <h2 className=" text-blue-800 font-semibold">Angel CCCC</h2>
              <h4 className="font-light text-xs ">Creative Manager</h4>
            </div>
          </div>
          <p className="p-3 font-light text-sm ">
            "There are many variations passages of Lorem Ipsum majority some by
            words which don't look ."{" "}
          </p>
        </div>
        {/* testimonal card 6 end */}
      </Slider>
    </>
  );
}

export default Testimonal;
