import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );
      reset();
      navigate("/login");
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setLoader(false);
    }
  };

  return (
<div className="min-h-[calc(100vh-64px)] bg-gray-900 p-4 flex justify-center items-start sm:items-center">
      <div className="sm:w-[700px] sm:m-4  mt-20 sm:my-28   sm:flex shadow-2xl shadow-[#2c4850] rounded-lg ">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="sm:w-[350px]  w-[350px] py-8 px-4 sm:px-8 rounded-md"
        >
          <h1 className="text-center font-serif text-[#76ABAE] font-bold lg:text-2xl text-xl">
            Create an account
          </h1>

          <hr className="mt-2 mb-5" />

          <div className="flex flex-col text-white gap-2">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#76ABAE] text-xl opacity-[0.5]" />
              <label htmlFor="username" className="text-gray-50 font-semibold">
                UserName
              </label>
            </div>
            <TextField
              required
              id="username"
              type="text"
              message="*Username is required"
              placeholder="Type your username"
              register={register}
              errors={errors}
              className={"text-white"}
            />

            <div className="flex items-center gap-2">
              <MdEmail className="text-[#76ABAE] text-xl opacity-[0.5]" />
              <label htmlFor="email" className="text-gray-50 font-semibold">
                Email
              </label>
            </div>
            <TextField
              required
              id="email"
              type="email"
              message="*Email is required"
              placeholder="Type your email"
              register={register}
              errors={errors}
              className={"text-white"}
            />

            <div className="flex items-center gap-2">
              <RiLockPasswordFill className="text-[#76ABAE] text-xl opacity-[0.5] " />
              <label htmlFor="password" className="text-gray-50 font-semibold">
                Password
              </label>
            </div>
            <div className="relative w-full">
              <TextField
                required
                id="password"
                type={`${showPassword ? "text" : "password"}`}
                message="*Password is required"
                placeholder="Type your password"
                register={register}
                min={6}
                errors={errors}
                className={"text-white "}
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-[#76ABAE] opacity-[0.5]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              disabled={loader}
              type="submit"
              className="bg-customRed font-semibold text-white  bg-gradient-to-bl from-[#235d5d] to-[#5c7474]  w-[50%] py-2 rounded-full hover:text-slate-400 transition-colors duration-100 my-3"
            >
              {loader ? "Loading..." : "Register"}
            </button>
          </div>

          <p className="text-center text-sm text-slate-300 mt-4 ">
            Already have an account?{" "}
            <Link className="font-semibold underline " to="/login">
              <span className="text-[#76ABAE] font-bold hover:text-white ">
                {" "}
                Login
              </span>
            </Link>
          </p>
        </form>
        <div className="sm:flex hidden sm:w-[350px]  py-8 mt-4 items-center sm:px-8 px-4 rounded-md">
          <img src={`${import.meta.env.VITE_REACT_FRONTEND}/images/login.png`} alt="" className="h-5/6" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
