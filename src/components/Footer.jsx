import React from "react";
import { Link } from "react-router-dom";
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

            <ul>
              <li>
                <Link
                  to="/"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/about"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/services"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/contact_us"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left  leading-9">
            <h1 className="text-xl text-white font-semibold">Services</h1>
            <ul>
              <li>
                <Link
                  to="/mobile_development"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/seb_development"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Web Development
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/ui_design"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  User interface Design
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/seo"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  SEO
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/web_analytics"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Web Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left leading-9">
            <h1 className="text-xl text-white font-semibold">Company</h1>
            <ul>
              <li>
                <Link
                  to="/terms_condition"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy_policy"
                  className="hover:text-white inline-block hover:font-semibold"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <Link target="_blank" to="https://g.page/r/CZ9-BZK43VGVEBA">
            <img
              className="bg-gray-700 p-2 rounded-full hover:bg-[#032e4d]"
              src="gmail.png"
              alt="vcv"
            />
          </Link>

          <Link target="_blank" to="https://www.instagram.com/recognisedesign/">
            <img
              className="bg-gray-700 p-2 rounded-full hover:bg-[#032e4d]"
              src="insta.png"
              alt="vcv"
            />
          </Link>

          <Link
            target="_blank"
            to="https://www.linkedin.com/company/recognise-design/"
          >
            <img
              className="bg-gray-700 p-2 rounded-full hover:bg-[#032e4d]"
              src="linkedin.png"
              alt="vcv"
            />
          </Link>
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
    </>
  );
}

export default Footer;
