import React from "react";
import Collaboration from "../components/Collaboration";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="mt-32 mx-7">
      <h1 className="text-3xl text-center">
        Our <span className="text-primary font-semibold">Services</span>
      </h1>
      <p className="my-3  text-center text-lg ">
        Guaranteed results in conversion rate of online platforms throughout the
        entire customer interaction journey.We provide free consultation in
        various spectrums of designs in web and mobile application development.
      </p>

      <div className="md:flex md:w-9/12 mx-auto gap-10">
        <img
          src="mobdev.png"
          className="md:basis-2/5 "
          alt="mobile development"
        />
        <div className="flex flex-col  md:basis-1/2 mt-9 ">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-16 bg-blue-200  p-3">
              <img src="Mobile.png" />
            </div>
            <h3 className="text-xl text-blue-700 font-bold ">
              Mobile Development
            </h3>
          </div>
          <p className="text-lg md:ml-20 text-justify ">
            We are driven by values We strive to be a company that has strong
            and long lasting bond with their clients and work along side them
            for the same goal.Through teamwork we make continuous endeavors to
            establish a well-organized and professional online image for your
            company.
          </p>
          <div className="flex md:ml-20 gap-3 mt-3 items-center">
            <p className="text-lg text-blue-700 font-semibold ">Explore</p>
            <Link to="#">
              <i className="ri-arrow-right-line rounded-full bg-gray-200 p-3 hover:bg-primary hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-9/12 mx-auto flex-row-reverse gap-10">
        <img src="webdev.png" className="md:basis-2/5" alt="Web Application" />
        <div className="flex flex-col  md:basis-1/2 mt-9 ">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-16 bg-green-500  p-3">
              <img src="desktop.png" />
            </div>
            <h3 className="text-xl text-blue-700 font-bold ">
              Web Application
            </h3>
          </div>

          <p className="text-lg md:ml-20 text-justify">
            We are driven by values We strive to be a company that has strong
            and long lasting bond with their clients and work along side them
            for the same goal.Through teamwork we make continuous endeavors to
            establish a well-organized and professional online image for your
            company.
          </p>
          <div className="flex md:ml-20 gap-3 mt-3 items-center">
            <p className="text-lg text-blue-700 font-semibold ">Explore</p>
            <Link to="#">
              <i className="ri-arrow-right-line rounded-full bg-gray-200 p-3 hover:bg-primary hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-9/12 mx-auto gap-10">
        <img src="uxdev.png" className="md:basis-2/5" alt="ui/ux design" />
        <div className="flex flex-col  md:basis-1/2 mt-9">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-16 bg-red-500  p-3">
              <img src="Pen.png" />
            </div>
            <h3 className="text-xl text-blue-700 font-bold ">UI/UX Design</h3>
          </div>
          <p className="text-lg md:ml-20 text-justify">
            We are driven by values We strive to be a company that has strong
            and long lasting bond with their clients and work along side them
            for the same goal.Through teamwork we make continuous endeavors to
            establish a well-organized and professional online image for your
            company.
          </p>
          <div className="flex md:ml-20 gap-3 mt-3 items-center">
            <p className="text-lg text-blue-700 font-semibold">Explore</p>
            <Link to="#">
              <i className="ri-arrow-right-line rounded-full bg-gray-200 p-3 hover:bg-primary hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-9/12 mx-auto flex-row-reverse gap-10">
        <img src="anadev.png" className="md:basis-2/5" alt="web analytics" />
        <div className="flex flex-col  md:basis-1/2 mt-9">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-16 bg-yellow-400  p-3">
              <img src="webAnalytic.png" />
            </div>
            <h3 className="text-xl text-blue-700 font-bold ">Web Analytics</h3>
          </div>
          <p className="text-lg md:ml-20 text-justify">
            We are driven by values We strive to be a company that has strong
            and long lasting bond with their clients and work along side them
            for the same goal.Through teamwork we make continuous endeavors to
            establish a well-organized and professional online image for your
            company.
          </p>
          <div className="flex md:ml-20 gap-3 mt-3 items-center">
            <p className="text-lg text-blue-700 font-semibold ">Explore</p>
            <Link to="#">
              <i className="ri-arrow-right-line rounded-full bg-gray-200 p-3 hover:bg-primary hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex md:w-9/12 mx-auto  gap-10">
        <img src="seodev.png" className="md:basis-2/5" alt="seo" />
        <div className="flex flex-col md:basis-1/2 mt-9">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-16 bg-blue-500  p-3">
              <img src="seo.png" />
            </div>
            <h3 className="text-xl text-blue-700 font-bold ">SEO</h3>
          </div>
          <p className="text-lg md:ml-20 text-justify">
            We are driven by values We strive to be a company that has strong
            and long lasting bond with their clients and work along side them
            for the same goal.Through teamwork we make continuous endeavors to
            establish a well-organized and professional online image for your
            company.
          </p>
          <div className="flex md:ml-20 gap-3 mt-3 items-center">
            <p className="text-lg text-blue-700 font-semibold ">Explore</p>
            <Link to="/">
              <i className="ri-arrow-right-line rounded-full bg-gray-200 p-3 hover:bg-primary hover:text-white"></i>
            </Link>
          </div>
        </div>
      </div>
      <Collaboration />
    </div>
  );
}

export default Service;
