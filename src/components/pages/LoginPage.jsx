import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../otherComponent/TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../../contextApi/ContextApi";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setToken } = useStoreContext();
  const { setUsername } = useStoreContext();

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

  const LoginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login successful!");
      reset();
      setUsername(data.username);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 p-4 flex justify-center items-start sm:items-center">
      <div className="sm:w-[700px] sm:m-4 mt-20  sm:my-28  sm:flex shadow-2xl shadow-[#2c4850] rounded-lg">
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className="sm:w-[350px] w-[350px] py-8 sm:px-8 px-4 rounded-md"
        >
          <h1 className="text-center font-serif text-[#76ABAE] font-bold lg:text-2xl text-xl">
            Login
          </h1>

          <hr className="mt-2 mb-5" />

          <div className="flex flex-col gap-2 text-white">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#76ABAE] text-xl opacity-[0.5]" />
              <label htmlFor="username" className="text-gray-50 font-semibold">
                UserName
              </label>
            </div>
            <TextField
              required
              id="usernameOrEmail"
              type="text"
              message="*Username is required"
              placeholder="Type your username"
              register={register}
              errors={errors}
              className={"text-white"}
            />
            <div className="flex items-center gap-2">
              <RiLockPasswordFill className="text-[#76ABAE] text-xl opacity-[0.5]" />
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
                className={"text-white"}
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
              className="bg-customRed font-semibold text-white bg-gradient-to-bl from-[#235d5d] to-[#5c7474] w-[100%] py-2 hover:text-slate-400 transition-colors duration-100 rounded-full my-3"
            >
              {loader ? "Loading..." : "LogIn"}
            </button>
          </div>

          <p className="text-blue-400 text-center">
            <Link to="/reset">Forgotten Password?</Link>
          </p>

          <p className="text-center text-sm text-slate-300 mt-4">
            Don't have an account?{" "}
            <Link className="font-bold underline" to="/register">
              <span className="font-bold text-[#76ABAE] hover:text-white">
                {""}
                Signup
              </span>
            </Link>
          </p>
        </form>
        <div className="sm:flex hidden w-[350px] py-8 mt-4 items-center sm:px-4 rounded-md">
          <img
            src={`${import.meta.env.VITE_REACT_FRONTEND}/images/login.png`}
            alt="login.png"
            className="h-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
