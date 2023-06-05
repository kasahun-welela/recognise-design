import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 relative  text-gray-400 p-10  flex flex-col items-center mt-20">
        <img src="footerlogo.png" className="h-25 w-20" alt="footerlogo" />

        {/* <div className="relative"> */}
        <img
          src="Ellipse1.png"
          className="absolute -top-10 right-0 "
          alt="footerlogo"
        />
        {/* </div> */}

        <div className="grid grid-cols-2 text-sm md:grid-cols-3 gap-2 mt-20">
          <div className="text-left leading-9">
            <h1 className="text-xl font-semibold text-white">Quick Link</h1>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Services</h3>
            <h3>Contact Us</h3>
          </div>
          <div className="text-left  leading-9">
            <h1 className="text-xl text-white font-semibold">Services</h1>
            <h3>Mobile Development</h3>
            <h3>Web Development</h3>
            <h3>User interface Design</h3>
            <h3>SEO</h3>
            <h3>web Analytics</h3>
          </div>
          <div className="text-left leading-9">
            <h1 className="text-xl text-white font-semibold">Company</h1>
            <h3>Terms</h3>
            <h3>Privacy policy</h3>
          </div>
        </div>
        <div className="flex gap-2 mt-10">
          <img
            className="bg-gray-700 p-2 rounded-full "
            src="gmail.png"
            alt="vcv"
          />
          <img
            className="bg-gray-700 p-2 rounded-full "
            src="twt.png"
            alt="vcv"
          />
          <img
            className="bg-gray-700 p-2 rounded-full "
            src="insta.png"
            alt="vcv"
          />
          <img
            className="bg-gray-700 p-2 rounded-full "
            src="linkedin.png"
            alt="vcv"
          />
        </div>
        <h1 className="text-white font-bold text-base mt-5">
          Copyright 2022 Recognise Design
        </h1>
        <p className="text-center mx-5">
          Thank you for visiting our website. We value your interest in our
          services and look forward to helping you. If you have any questions or
          need assistance, please don't hesitate to contact us. Our friendly
          customer support team is available to answer your questions or advice
          and support. We look forward to hearing from you soon!
        </p>
        <img
          src="Ellipse2.png"
          className="absolute bottom-0 left-0 "
          alt="footerlogo"
        />
      </div>
      ;
    </>
  );
}

export default Footer;
