import React from "react";

function Card(prop) {
  return (
    <>
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-primary hover:text-white">
        <div className={`rounded-full w-16 ${prop.cssClass}  p-3 hover:white`}>
          <img src={prop.img} />
        </div>
        <h1 className="font-bold text-center text-xl">{prop.title}</h1>
        <p className="text-center">{prop.description}</p>
        {prop.arrow && (
          <div className="rounded-full w-10  bg-gray-200 px-3 py-2">
            <a href="#">
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
