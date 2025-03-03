import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Inputfield = ({ onValidUrl = null}) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateUrl = (url) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\./;
    return regex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUrl(url)) {
      setError("");
      if (onValidUrl) {
        onValidUrl();
      }
    } else {
      setError("Please enter a valid URL");
    }
  };

  return (
    <div className="p-8 sm:w-9/12  mx-auto border-solid border-white border-2  shadow-xl shadow-[#2c4850] rounded-3xl">
      <h1 className="text-3xl text-white font-bold mb-2">
        Shorten a long link
      </h1>
      <p className="mb-4 text-white">No payment required.</p>

      <form onSubmit={handleSubmit} className="flex flex-col md:mt-12 ">
        <span className="py-2 font-bold text-lg ">
          Paste your long link here
        </span>
        <input
          type="text"
          required
          placeholder="https://example.com/long-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`w-full p-2 rounded-lg ${
            error ? "mb-1" : "mb-4"
          } border border-gray-300 text-black focus:outline outline-2  outline-blue-500`}
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          className="lg:p-2 p-1.5 sm:max-w-60 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-[#2c4850] duration-200 "
        >
          <span className=" text-white font-bold  ">
            Get your link for free →
          </span>
        </button>
      </form>
    </div>
  );
};

export default Inputfield;
