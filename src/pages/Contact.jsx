import { data } from "autoprefixer";
import React from "react";
import Button from "../components/Button";
// import { bi-envelope-fill , bi-telephone-fill,bi-geo-alt } from "bootstrap-icons";

function Contact() {
  const btnData = [
    { id: 1, title: "SEO" },
    { id: 2, title: "Web design" },
    { id: 3, title: "UI/UX" },
    { id: 4, title: "Web Analytics" },
    { id: 5, title: "Application design" },
    { id: 6, title: "Others" },
    { id: 7, title: "Front-end development" },
    { id: 8, title: "Site from scratch" },
    { id: 9, title: " Back-end development" },
  ];
  return (
    <div className="mt-32 mx-7">
      <p className="text-center text-xl font-semibold">
        We are always happy to help 😇{" "}
      </p>
      <h1 className="text-center text-5xl my-4 font-semibold">Get in touch</h1>
      <p className="text-center text-lg font-normal">
        We'd love to hear from you, please feel free to reach out we are more
        than happy to answer any questions you my have
      </p>
      <div className="my-4 font-normal flex flex-col  gap-2 md:text-lg md:flex-row justify-center ">
        <p>
          <i className="ri-mail-fill text-blue-900 mr-1 "></i>
          info@recognisedesign.com
        </p>
        <p>
          <i class="ri-phone-fill  text-blue-900 mr-1 "></i>01920 460 168
        </p>
        <p>
          <i class="ri-map-pin-fill  text-blue-900 mr-1 "></i> Unit 15d, Dicker
          Mill, HERTFORD, SG13 7AE
        </p>
      </div>

      <div className=" md:w-1/2 m-auto ">
        <p className="font-light mb-5 ">I need</p>
        {btnData.map((data) => (
          <Button title={data.title} key={data.id} />
        ))}
        <div className="flex flex-col  gap-4 mt-5   ">
          <input
            className="bg-gray-100  border-2 border-gray-200 rounded  py-3 px-4 text-gray-600  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-gray-100  border-2 border-gray-200 rounded  py-3 px-4 text-gray-600  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="bg-gray-100  border-2 border-gray-200 rounded  py-3 px-4 text-gray-600  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="Email"
          />
          <textarea
            defaultValue="message"
            className="bg-gray-100  border-2 border-gray-200 rounded  py-3 px-4 text-gray-600  focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <a className="mt-5 text-center block w-1/4 mx-auto border-2 font-medium  px-6 py-3 rounded-3xl bg-blue-700 text-white ">
          Submit
        </a>
      </div>
    </div>
  );
}

export default Contact;
