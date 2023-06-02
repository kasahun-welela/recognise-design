import React, { useState } from "react";
// import { BsChevronDown,BsFill1CircleFill,BsMenuButtonWide } from "react-icons/bs";
// import { IconName } from "react-icons/bs";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleMenu = () => setIsNavOpen((prev) => !prev);
  return (
    <div className="w-full shadow-2xl">
      <div className=" h-18  justify-between items-center px-20 py-5 md:flex lg:flex hidden">
        <h1 className="h-10 w-10 ml-20">
          <img src="./logo.png" alt="lll" />
        </h1>
        <ul className=" md:flex lg:flex  gap-5 font-serif hidden mr-20 ">
          <li className="hover:bg-slate-200 font-semibold">Home</li>
          <li className="hover:bg-slate-200 font-semibold">About</li>
          <li className="hover:bg-slate-200 font-semibold">Services</li>
          <li className="hover:bg-slate-200 font-semibold">Portofolio</li>
          <li className="hover:bg-slate-200  font-semibold">Contact Us</li>
        </ul>
      </div>

      <div
        className={`absolute shadow-2xl  top-0 w-screen left-0 right-0  md:hidden `}
      >
        <div className=" mt-0  h-12 py-12 px-10 items-center flex justify-between ">
          <img className="pt-3 h-20 w-15 " src="./logo.png" alt="lll" />

          {isNavOpen ? (
            <img
              src="humberger.png"
              className="md:hidden"
              onClick={handleMenu}
              alt="humberger"
            />
          ) : (
            <img
              src="close.png"
              className="md:hidden"
              onClick={handleMenu}
              alt="close"
            />
          )}
        </div>
        {!isNavOpen && (
          <ul className="bg-white font-serif flex flex-col pl-4 pt-3 gap-1">
            <li className="hover:bg-slate-200 font-semibold">Home</li>
            <li className="hover:bg-slate-200 font-semibold">About</li>
            <li className="hover:bg-slate-200 font-semibold">Services</li>
            <li className="hover:bg-slate-200 font-semibold">Portofolio</li>
            <li className="hover:bg-slate-200  font-semibold">Contact Us</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
