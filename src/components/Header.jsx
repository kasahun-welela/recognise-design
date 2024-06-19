import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const handleMenu = () => setIsNavOpen((prev) => !prev);
  return (
    <div className="w-full shadow-md">
      <div className=" h-18  justify-between items-center px-20 py-5 md:flex lg:flex hidden">
        <h1 className="h-10 w-10 ml-20">
          <img src="./logo.png" alt="lll" />
        </h1>
        <ul className=" md:flex lg:flex  gap-5 font-serif hidden mr-20 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-blue-700 font-semibold ${
                  isActive ? "text-blue-700 font-bold" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-700 font-semibold ${
                  isActive ? "text-blue-700 font-bold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-blue-700 font-semibold ${
                  isActive ? "text-blue-700 font-bold" : ""
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `hover:text-blue-700 font-semibold ${
                  isActive ? "text-blue-700 font-bold" : ""
                }`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="hover:bg-slate-200  font-semibold">
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                `hover:text-blue-700 font-semibold ${
                  isActive ? "text-blue-700 font-bold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
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
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-semibold ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-semibold ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-semibold ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-semibold ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:bg-slate-200  font-semibold">
              <NavLink
                to="/contact_us"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-semibold ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
