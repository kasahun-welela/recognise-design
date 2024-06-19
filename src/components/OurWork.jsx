import React from "react";
import { Link } from "react-router-dom";

function OurWork() {
  return (
    <>
      <div className="mx-7 md:mx-24 md:grid grid-cols-2 gap-2 gap-x-3">
        <div className="col-span-2">
          <h1 className=" text-center text-2xl font-bold mb-3 text-primary">
            Our Works
          </h1>{" "}
          <p className="md:text-center">
            We are honoured to have had a chance to work with our clients and
            make their online experience much more efficient and worth their
            time.
          </p>
        </div>
        <div>
          <Link to="#">
            {" "}
            <img
              src="./work1.webp"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>Speedy Delivery</p>
          <p>App</p>
        </div>
        <div>
          {" "}
          <Link to="#">
            {" "}
            <img
              src="./work2.png"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>Debenhams</p>
          <p>Web</p>
        </div>

        <div>
          {" "}
          <Link to="#">
            {" "}
            <img
              src="./work3.png"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>Berkeley Square Medical</p>
          <p>Web</p>
        </div>

        <div>
          {" "}
          <Link to="#">
            <img
              src="./work4.png"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>HOBBS</p>
          <p>Web</p>
        </div>

        <div>
          <Link to="#">
            <img
              src="./work5.png"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>Electric Car Charger</p>
          <p>Web</p>
        </div>

        <div>
          <Link to="#">
            <img
              src="./work5.png"
              alt="our works"
              loading="lazy"
              className="rounded-2xl w-full h-[50vh] my-3 object-cover"
            />
          </Link>
          <p>Season Master</p>
          <p>Web</p>
        </div>
      </div>
    </>
  );
}

export default OurWork;
