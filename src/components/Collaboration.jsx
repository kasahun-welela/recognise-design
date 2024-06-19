import React from "react";

function Collaboration() {
  return (
    <>
      <div className="mt-10 mx-7 md:mx-40  md:flex md:flex-row-reverse">
        <div className="md:basis-1/2 ">
          <img src="collaborate.webp" alt="collaboration image" />
        </div>
        <div className="flex flex-col items-center gap-6 md:basis-1/2 mt-5 md:mt-0">
          <h1 className="text-2xl text-center font-extrabold">
            {" "}
            Interesting Collaboration With us
          </h1>
          <p className=""> Help you to reach your business goal</p>
          <a
            className=" text-white bg-primary px-8 py-3 rounded-3xl shadow-lg hover:shadow-blue-500/50"
            href="#"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
