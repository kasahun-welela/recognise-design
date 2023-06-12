import React from "react";

function Collaboration() {
  return (
    <>
      <div className="mt-10 mx-7 md:mx-40  md:flex md:flex-row-reverse">
        <div className="relative  flex h-60">
          <img
            src="col2.png"
            className="w-1/2 absolute top-0 right-0"
            alt="collaboration image2"
          />
          <img
            src="col1.png"
            alt="collaboration image"
            className="absolute top-16 left-4 w-1/2"
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl text-center font-extrabold">
            {" "}
            Interesting Collaboration With us
          </h1>
          <p className=""> Help you to reach your business goal</p>
          <a
            className=" text-white bg-blue-800 px-8 py-3 rounded-3xl shadow-lg hover:shadow-blue-500/50"
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
