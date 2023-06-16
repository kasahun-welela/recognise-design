import React from "react";

function Card(prop) {
  return (
    <>
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-600 hover:text-white">
        <div className={`rounded-full w-16 ${prop.cssClass}  p-3 hover:white`}>
          <img src={prop.img} />
        </div>
        <h1 className="font-bold text-center text-xl">{prop.title}</h1>
        <p className="text-center">{prop.description}</p>
        {prop.arrow && (
          <div className="rounded-full w-10  bg-gray-200 p-3">
            <a href="#">
              <img src={prop.arrow} alt="arrow" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
