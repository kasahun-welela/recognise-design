import React from "react";

function Hero() {
  return (
    <>
      <div className="pt-9  mx-7 md:mx-40  text-center">
        <h1 class="mt-20 md:mt-0 text-3xl text-primary font-bold md:text-4xl lg:text-5xl">
          Website Development, Mobile App Development and Website Optimisation
          Services in the UK
        </h1>

        <p class="text-slate-500 my-5 md:text-lg">
          We help your business thrive in the digital space by a variety of
          services such as website development, app development, website
          intelligence, SEO and many more.
        </p>
        <a
          className="text-center text-white bg-primary px-8 py-3 rounded-3xl "
          href="#"
        >
          Get Quote
        </a>

        <div className=" mt-20 md:mx-24 ">
          <img className="w-9/12 mx-auto " src="./hero.webp" />
        </div>
      </div>
    </>
  );
}

export default Hero;
