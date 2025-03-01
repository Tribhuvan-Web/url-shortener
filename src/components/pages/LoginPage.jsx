import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../../contextApi/ContextApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const { setToken } = useStoreContext();

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
      //Store the token in local storage
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("LoginPage successful!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("LoginPage failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-t from-[#31363F]  to-[#76ABAE] flex justify-center items-center">
      <div className="sm:w-[700px] w-[600] sm:flex shadow-custom ">
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className="sm:w-[350px] w-[350px] py-8 sm:px-8 px-4 rounded-md"
        >
          <h1 className="text-center  font-serif text-white font-bold lg:text-2xl text-xl">
            LogIn Page
          </h1>

          <hr className="mt-2 mb-5 " />

          <div className="flex flex-col gap-2 text-white">
            <div className="flex items-center gap-2">
              <img src="../src/assets/user.png" alt="" className="w-5" />
              <label htmlFor="username" className="text-white font-semibold">
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
            />
            <div className="flex items-center gap-2">
              <img src="../src/assets/lock.png" alt="" className="w-5 " />
              <label htmlFor="password" className="text-white font-semibold">
                Password
              </label>
            </div>
            <TextField
              required
              id="password"
              type="password"
              message="*Password is required"
              placeholder="Type your password"
              register={register}
              min={6}
              errors={errors}
            />
          </div>
          <div className="flex justify-center">
            <button
              disabled={loader}
              type="submit"
              className="bg-customRed font-semibold text-white bg-gradient-to-t from-[#2E4F4F] to-[#2C3333] w-[50%]  py-2 hover:text-slate-400 transition-colors duration-100 rounded-full my-3"
            >
              {loader ? "Loading..." : "LogIn"}
            </button>
          </div>

          <p className="text-center text-sm text-slate-300 mt-6">
            Don't have an account? 
            <Link
              className="font-semibold underline hover:text-black"
              to="/register"
            >
              <span className="font-semibold text-blue-500 hover:font-bold"> Signup</span>
            </Link>
          </p>
        </form>
        <div className="sm:flex hidden w-[350px]  py-8 mt-4 sm:px-8 px-4 rounded-md">
          <img src="../src/assets/OIP.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
