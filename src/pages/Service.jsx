import React from "react";
import Collaboration from "../components/Collaboration";

function Service() {
  return (
    <div className="mt-32 mx-7">
      <h1 className="text-2xl text-center">
        Our <span className="text-blue-600 font-semibold">Services</span>
      </h1>
      <p className="my-3 text-justify font-light">
        Guaranteed results in conversion rate of online platforms throughout the
        entire customer interaction journey.We provide free consultation in
        various spectrums of designs in web and mobile application development.
      </p>
      <div>
        <img src="mobdev.png" alt="mobile development" />
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 bg-blue-200  p-3">
            <img src="Mobile.png" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold ">
            Mobile Development
          </h3>
        </div>
        <p>
          We are driven by values We strive to be a company that has strong and
          long lasting bond with their clients and work along side them for the
          same goal.Through teamwork we make continous endeavors to establish a
          well-organized and professional online image for your company.
        </p>
      </div>

      <div>
        <img src="webdev.png" alt="Web Application" />
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 bg-green-500  p-3">
            <img src="desktop.png" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold ">Web Application</h3>
        </div>
        <p>
          We are driven by values We strive to be a company that has strong and
          long lasting bond with their clients and work along side them for the
          same goal.Through teamwork we make continous endeavors to establish a
          well-organized and professional online image for your company.
        </p>
      </div>

      <div>
        <img src="uxdev.png" alt="ui/ux design" />
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 bg-red-500  p-3">
            <img src="Pen.png" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold ">UI/UX Design</h3>
        </div>
        <p>
          We are driven by values We strive to be a company that has strong and
          long lasting bond with their clients and work along side them for the
          same goal.Through teamwork we make continous endeavors to establish a
          well-organized and professional online image for your company.
        </p>
      </div>
      <div>
        <img src="anadev.png" alt="web analytics" />
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 bg-yellow-400  p-3">
            <img src="webAnalytic.png" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold ">Web Analytics</h3>
        </div>
        <p>
          We are driven by values We strive to be a company that has strong and
          long lasting bond with their clients and work along side them for the
          same goal.Through teamwork we make continous endeavors to establish a
          well-organized and professional online image for your company.
        </p>
      </div>

      <div>
        <img src="seodev.png" alt="seo" />
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 bg-blue-500  p-3">
            <img src="seo.png" />
          </div>
          <h3 className="text-xl text-blue-700 font-bold ">SEO</h3>
        </div>
        <p>
          We are driven by values We strive to be a company that has strong and
          long lasting bond with their clients and work along side them for the
          same goal.Through teamwork we make continous endeavors to establish a
          well-organized and professional online image for your company.
        </p>
      </div>
      <Collaboration />
    </div>
  );
}

export default Service;
