import React from "react";

function Testimonal() {
  return (
    <>
      <h3 className="text-center font-semibold  text-blue-800">Testimonal</h3>
      <h1 className="text-center font-bold text-xl mb-4">
        People Who work with us
      </h1>
      {/* testimonal card */}
      <div className="mx-7  p-4 shadow-xl flex flex-col rounded-xl ">
        <div className="flex p-3">
          <img src="angel.png" alt="testimonal image" />
          <div className="ml-4">
            <h2 className=" text-blue-800 font-semibold">Angel Rose</h2>
            <h4 className="font-light text-xs ">Creative Manager</h4>
          </div>
        </div>
        <p className="p-3 font-light text-sm ">
          "There are many variations passages of Lorem Ipsum majority some by
          words which don't look ."{" "}
        </p>
      </div>
    </>
  );
}

export default Testimonal;
