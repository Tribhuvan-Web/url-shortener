import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "../App.css";
import { useStoreContext } from "../contextApi/ContextApi";
import api from "../api/api";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { token, setToken } = useStoreContext();
  const [username, setUsername] = useState("");

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };
  const loginHandler = () => {
    navigate("/login");
    closeNavbar();
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    if (token) {
      fetchUsername();
    }
  }, [token]);

  const fetchUsername = async () => {
    try {
      const { data } = await api.get("/api/auth/username", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setUsername(data);
    } catch (error) {
      console.log("Error in fetching username", error);
    }
  };

  return (
    <div className={"w-full h-16 z-50 flex sticky top-0 bg-[#2c4850]"}>
      <div className="w-[55%] sm:px-10 sm:py-2 px-6 py-2">
        <Link to={token ? "/home" : "/"}>
          <h1 className="font-bold text-3xl text-white italic">Shortly</h1>
        </Link>
      </div>
      <div
        className={`sm:flex sm:justify-between sm:static items-center gap-4 sm:flex-row sm:w-full sm:px-10 sm:py-2 px-6 py-2 sm:shadow-none shadow-lg ${
          navbarOpen
            ? "fixed right-0 top-0 h-full w-[150px] bg-[#2c4850] flex-col ease-out duration-300"
            : "fixed right-[-200px] top-0 h-full w-[150px] bg-[#2c4850] flex-col ease-out duration-300"
        }`}
      >
        <ul
          className={
            "flex flex-col sm:flex-row sm:gap-6 gap-3 text-white sm:mt-0 mt-14"
          }
        >
          <li className="hover:font-bold font-[500]">
            <Link
              className={`${
                path === "/home" ? "text-[#76ABAE] font-bold" : "text-gray-50"
              }`}
              to="/home"
              onClick={closeNavbar}
            >
              Home
            </Link>
          </li>
          <li className="hover:font-bold font-[500]">
            <Link
              className={`${
                path === "/about" ? "text-[#76ABAE] font-bold" : "text-gray-50"
              }`}
              to="/about"
              onClick={closeNavbar}
            >
              About
            </Link>
          </li>
          <li className="hover:font-bold font-[500]">
            <Link
              className={`${
                path === "/dashboard"
                  ? "text-[#76ABAE] font-bold"
                  : "text-gray-50"
              }`}
              to="/dashboard"
              onClick={closeNavbar}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div
          className={`flex sm:flex-row flex-col gap-4 sm:mt-0 mt-4 ${
            navbarOpen ? "fixed bottom-4" : ""
          } sm:static`}
        >
          {!token && (
            <Link to={"/register"} onClick={closeNavbar}>
              <li className="bg-[#76ABAE] hover:bg-white hover:text-[#31363F] opacity-[0.8] list-none text-white cursor-pointer text-center font-semibold px-3 py-2 rounded-md transition-all duration-150">
                SignUp
              </li>
            </Link>
          )}
          {token && (
            <div className="group relative inline-block">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#76ABAE] to-[#31363F] rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-white font-bold text-xl">
                    {username.substring(0, 1).toUpperCase()}
                  </span>
                </div>
                <div className="text-white">
                  <p className="font-semibold text-lg">{username}</p>
                </div>
                <IoMdArrowDropdown className="text-white font-black"/>
              </div>

              <div className="absolute right-0 mt-3 w-64 origin-top-right scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                <div className="bg-[#31363F] rounded-lg shadow-xl p-4 space-y-3 border border-[#76ABAE]/20">
                  <ul className="space-y-2 text-white">
                    <li className="hover:bg-[#76ABAE]/20 px-3 py-2 rounded-md transition-colors">
                      <a href="#" className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>Terms & Conditions</span>
                      </a>
                    </li>
                    <li className="hover:bg-[#76ABAE]/20 px-3 py-2 rounded-md transition-colors">
                      <a href="#" className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                  </ul>

                  <button
                    onClick={logoutHandler}
                    className="w-full flex items-center justify-center space-x-2 bg-[#76ABAE] hover:bg-[#5d8c8f] text-white font-semibold px-4 py-2 rounded-md transition-all duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          {!token && (
            <button
              onClick={loginHandler}
              className="bg-gradient-to-br from-[#76ABAE] to-[#5d8c8f] hover:from-[#5d8c8f] hover:to-[#76ABAE] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Login
            </button>
          )}
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
