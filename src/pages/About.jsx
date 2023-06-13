import React from "react";

function About() {
  return (
    <div className="mx-7">
      <h1 className="mt-32 mb-4 text-center text-2xl">
        About <span className="text-blue-600 font-semibold">Us</span>{" "}
      </h1>
      <div className=" mx-7 flex flex-col gap-3 ">
        <div>
          <p className="font-bold text-center text-xl">
            Where innovation fires inspiration and challenges the norm.
          </p>
        </div>
        <div>
          <img className="md:w-2/4" src="./aboutUs.png" />
        </div>
      </div>

      <h1>
        Who <span className="text-blue-600 font-semibold">we are...</span>{" "}
      </h1>
      <p>
        We are driven by values <br></br> We strive to be a company that has
        strong and long lasting bond with their clients and work along side them
        for the same goal.Through teamwork we make continous endeavors to
        establish a well-organized and professional online image for your
        company.
      </p>
      <h1 className="text-3xl font-bold text-center mt-5">Core Values</h1>
    </div>
  );
}

export default About;
