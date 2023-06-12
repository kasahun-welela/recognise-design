import React from "react";

function Hero() {
  return (
    <>
      {/* bg-[url('./pattern.png')] pt-9 */}
      <div className="pt-9  mx-7 md:mx-40  text-center">
        <h1 className="mt-20 md:mt-2 mr-3  font-bold md:text-4xl  text-2xl text-blue-800">
          Enhancing your online presence from development to optimisation
        </h1>
        <p className="my-5 font-light text-base">
          Guaranteed results in conversion rate of online platforms throughout
          the entire customer interaction journey.We provide free consultation
          in various spectrums of designs in web and mobile application
          development.
        </p>
        <a
          className="text-center text-white bg-blue-800 px-8 py-3 rounded-3xl "
          href="#"
        >
          Get Quote
        </a>
        {/* <div className=' relative mt-9 md:w-1/2 lg:w-1/2 mx-auto '> */}
        <div className=" relative mt-20 md:mx-40 ">
          <img className="w-9/12 mx-auto " src="./hero.png" />
          <div className="absolute -top-8 left-8 py-3 px-5 drop-shadow-2xl rounded-xl  bg-white md:top-20">
            <h3 className="font-light p-1 text-[7px] uppercase md:p-2">
              Great project
            </h3>
            <p className="text-xs">
              <span className="font-bold ">80+ </span>Done
            </p>
          </div>
          {/* bill adams card */}
          <div className=" absolute -bottom-10 right-2 -md:right-12 md:p-4 md:max-w-xs  md:w-1/3 bg-white p-1 w-1/5 drop-shadow-2xl rounded-xl border-2">
            <div className="flex items-center  ">
              <img
                className="rounded-full w-5 h-5 md:w-10 md:h-10"
                src="./hero.png"
                alt="profile"
              />
              <div className="ml-1 md:ml-2">
                <h3 className="font-bold text-[7px] md:text-xs">Bill Adams</h3>
                <p className="font-light text-[5px] md:text-[10px]">
                  CEO Uptech
                </p>
              </div>
            </div>
            <p className="text-[4px] md:text-[8px]">
              This team is really the best in its field,I don't regret working
              with them, and will come back again thanks
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-20 text-xl font-extralight">
        With 10+ business growing with us
      </p>
      {/* <div className="w-full flex justify-between items-center px-6 py-3 mt-10 border-y-2">
        <img className=" " src="./business1.png" />
        <img className=" " src="./business2.png" />
        <img className=" " src="./business3.png" />
        <img className=" " src="./business4.png" />
        <img className=" " src="./business5.png" />
        <img className=" " src="./business2.png" />
        <img className=" " src="./business4.png" />
        <img className=" " src="./business5.png" />
      </div> */}
    </>
  );
}

export default Hero;
