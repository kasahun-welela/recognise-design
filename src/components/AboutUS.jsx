import React from "react";

function AboutUS() {
  return (
    <>
      <h1 className="mt-6 text-center text-2xl font-bold mb-3 text-blue-800">
        About us
      </h1>
      <div className="mx-7 flex flex-col leading-relaxed  items-center">
        <div className="text-center">
          <h3 className="font-bold text-xl mb-3">
            Get a solution to your business
          </h3>
          <p className="font-normal text-justify text-gray-500">
            To ensure your users seamless experience, we mold your vision
            through designs tailored to fit your businesses needs using creative
            and intuitive tools. Through pliable solutions we ensure the proper
            interface of your website is evident in all platforms.
          </p>
          <span className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-cyan-500"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
            <h4>24/7 Support</h4>
          </span>
          <span className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-cyan-500"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>{" "}
            <h4>Free consultations</h4>
          </span>
          <span className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-cyan-500"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
            <h4>1 year hosting included</h4>
          </span>

          <a
            className=" mb-10 text-white bg-blue-800 px-12 py-3 rounded-3xl  inline-block mt-8  shadow-lg hover:shadow-blue-500/50"
            href="#"
          >
            About Us
          </a>
        </div>

        <img src="./aboutUs.png" />
      </div>
    </>
  );
}

export default AboutUS;
