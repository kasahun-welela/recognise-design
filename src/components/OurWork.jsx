import React from "react";

function OurWork() {
  return (
    <>
      <div className="mx-7 md:mx-24 md:grid grid-cols-2 gap-2 gap-x-3">
        <div className="col-span-2">
          <h1 className=" text-center text-2xl font-bold mb-3 text-primary">
            Our Works
          </h1>{" "}
          <p className="md:text-center">
            We are honoured to have had a chance to work with our clients and
            make their online experience much more efficient and worth their
            time.
          </p>
        </div>
        <div className="bg-cyan-400  md:max-h-96 my-4 flex justify-center  rounded-xl">
          <img className="md:w-full " src="./ourMac.png" />
        </div>
        <div className="bg-teal-300 md:max-h-96 my-4 flex justify-center  rounded-xl">
          <img className="md:w-full" src="./ourMeg1.png" />
        </div>
        <div className=" my-4 flex md:max-h-96 justify-center  rounded-xl">
          <img className="w-full rounded-xl" src="./ourScreen.png" />
        </div>
        <div className="bg-red-600 md:max-h-96 my-4 flex justify-end  rounded-xl">
          <img className="" src="./ourMobile.png" />
        </div>
        <div className="bg-red-600 md:max-h-96 my-4 flex justify-end  rounded-xl">
          <img className="w-full " src="./ourListMob.png" />
        </div>
        <div className="bg-red-600 md:max-h-96 my-4 flex justify-end  rounded-xl">
          <img className="w-full " src="./ourListMob.png" />
        </div>
      </div>
    </>
  );
}

export default OurWork;
