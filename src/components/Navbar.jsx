import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { color } from "chart.js/helpers";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={"w-full h-16 z-50 flex sticky top-0 bg-[#2c4850]"}>
      <div className="w-[55%] sm:px-10 sm:py-2 px-6 py-2">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic">ShortLy</h1>
        </Link>
      </div>
      <div
        className={`sm:flex sm:justify-between sm:static  items-center gap-4 sm:flex-row sm:w-full sm:px-10 sm:py-2 px-6 py-2 sm:shadow-none shadow-lg ${
          navbarOpen
           ? "fixed right-0 top-0 h-full w-[150px] bg-[#2c4850] flex-col ease-out duration-300"
            : "fixed right-[-200px] top-0 h-full w-[150x] bg-[#2c4850] flex-col ease-out duration-300"
        }   `}
      >
        <ul
          className={
            "flex flex-col sm:flex-row sm:gap-6 gap-3 text-white sm:mt-0 mt-14"
          }
        >
          <li className="hover:font-bold font-[500]  ">
            <Link
              className={`${
                path === "/home" ? "text-[#76ABAE] font-bold " : "text-gray-50"
              }`}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li
            className={"hover:font-bold font-[500] "}
          >
            <Link
              className={`${
                path === "/about" ? "text-[#76ABAE] font-bold" : "text-gray-50"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="hover:font-bold font-[500]  ">
            <Link
              className={`${
                path === "/dashboard"
                  ? "text-[#76ABAE] font-bold"
                  : "text-gray-50"
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className={`flex sm:flex-row flex-col gap-4 sm:mt-0 mt-4
          ${navbarOpen ? "fixed bottom-4" : ""}`}>
          <Link to={"/register"}>
            <li className="bg-[#76ABAE] hover:bg-white hover:text-[#31363F] opacity-[0.8] list-none  text-white  cursor-pointer text-center font-semibold  px-3 py-2  rounded-md transition-all duration-150">
              SignUp
            </li>
          </Link>
          <button className="bg-[#76ABAE] hover:bg-white hover:text-[#31363F] opacity-[0.8] text-white  cursor-pointer text-center font-semibold  px-3 py-2  rounded-md transition-all duration-150">
            LogOut
          </button>
        </div>
      </div>
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="sm:hidden flex items-center sm:mt-0 fixed right-4 top-4"
      >
        {navbarOpen ? (
          <RxCross2 className="text-white text-3xl" />
        ) : (
          <IoIosMenu className="text-white text-3xl" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
