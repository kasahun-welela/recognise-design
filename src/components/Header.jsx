import React, { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const handleMenu = () => setIsNavOpen((prev) => !prev);
  return (
    <div className="w-full shadow-2xl">
      <div className=" h-18  justify-between items-center px-20 py-5 md:flex lg:flex hidden">
        <h1 className="h-10 w-10 ml-20">
          <img src="./logo.png" alt="lll" />
        </h1>
        <ul className=" md:flex lg:flex  gap-5 font-serif hidden mr-20 ">
          <li className="hover:bg-slate-200 font-semibold">
            {" "}
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-slate-200 font-semibold">
            <a href="/about">About</a>
          </li>
          <li className="hover:bg-slate-200 font-semibold">
            <a href="/services">Services</a>
          </li>
          <li className="hover:bg-slate-200 font-semibold">
            <a href="/portofolio">Portofolio</a>
          </li>
          <li className="hover:bg-slate-200  font-semibold">
            <a href="/contactus">Contact Us</a>
          </li>
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
            <li className="hover:bg-slate-200 font-semibold">
              {" "}
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-slate-200 font-semibold">
              {" "}
              <a href="/about">About</a>
            </li>
            <li className="hover:bg-slate-200 font-semibold">
              {" "}
              <a href="/services">Services</a>
            </li>
            <li className="hover:bg-slate-200 font-semibold">
              <a href="/portofolio">Portofolio</a>
            </li>
            <li className="hover:bg-slate-200  font-semibold">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
