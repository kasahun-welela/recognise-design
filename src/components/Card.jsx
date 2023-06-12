import React from "react";
import { data } from "../cardData";
function Card(prop) {
  console.log(data);
  return (
    <div className="m-7 lg:mx-40 md:mx-24 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((values) => (
        <div
          className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white"
          key={values.id}
        >
          <div
            className={`rounded-full w-16 ${values.bgColor}  p-3 hover:white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={values.topImgPath}></path>
            </svg>
          </div>
          <h1 className="font-bold text-xl">{values.title}</h1>
          <p className="text-center">{values.description}</p>

          <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-white p-2 bg-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={values.bottomImgPath}></path>{" "}
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
