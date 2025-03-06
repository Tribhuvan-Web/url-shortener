import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { data } from "autoprefixer";
import toast from "react-hot-toast";
import api from "../../api/api";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${
        res.shortUrl
      }`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL copied to clipboard", {
          position: "bottom-center",
          className: "bg-green-500 text-white",
          duration: 3000,
        });
      });

      await refetch();
      reset();
      setOpen(false);
    } catch (error) {
      toast.error("An error occurred. Please try again", {
        position: "bottom-center",
        className: "bg-red-500 text-white",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 bg-opacity-50 fixed inset-0 z-50">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg bg-white animate-fade-in"
      >
        <h1 className="font-montserrat sm:mt-0 mt-3 text-center font-bold sm:text-2xl text-[22px] text-gray-800">
          Create a new short URL
        </h1>
        <hr className="mt-2 sm:mb-5 mb-3 text-gray-300" />
        <div>
          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="URL is required"
            register={register}
            errors={errors}
          />
        </div>

        <button
          className={`bg-custom-gradient font-semibold text-white w-full py-3 rounded-lg mt-5 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>

        {!loading && (
          <Tooltip title="Close">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <RxCross2 className="text-gray-800 text-3xl hover:text-red-600 transition-colors duration-300" />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};

export default CreateNewShorten;
