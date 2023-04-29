import React from "react";

function OurWork() {
  return (
    <div className="mx-7 ">
      {" "}
      <h1 className="mt-6 text-center text-2xl font-bold mb-3 text-blue-800">
        Our Works
      </h1>
      <p className="">
        We are honoured to have had a chance to work with our clients and make
        their online experience much more efficient and worth their time.
      </p>
      <div className="bg-cyan-400 my-4 flex justify-center  rounded-xl">
        <img className="" src="./ourMac.png" />
      </div>
      <div className="bg-teal-300  my-4 flex justify-center  rounded-xl">
        {/* <div className="h-35"> */}
        <img className="absolute right-0  " src="./ourMeg2.png" />
        <img className="" src="./ourMeg1.png" />
        {/* </div> */}
      </div>
      <div className=" my-4 flex justify-center  rounded-xl">
        <img className="w-full rounded-xl" src="./ourScreen.png" />
      </div>
      <div className="bg-red-600 my-4 flex justify-end  rounded-xl">
        <img className="" src="./ourMobile.png" />
      </div>
      <div className="bg-red-600 my-4 flex justify-end  rounded-xl">
        <img className="w-full " src="./ourListMob.png" />
      </div>
    </div>
  );
}

export default OurWork;
