import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inputfield = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const validateUrl = (url) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return regex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUrl(url)) {
      setError("");
      navigate("/register");
    } else {
      setError("Please enter a valid URL");
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-black rounded-lg">
      <h1 className="text-2xl text-white font-bold mb-2">
        Shorten a long link
      </h1>
      <p className="mb-4 text-white">No payment required.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="https://example.com/long-url"
          value={url}
          onChange={handleChange}
          className="w-full p-4 mb-2 border border-gray-300 rounded-md text-black"
          required
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="p-2 w-full rounded bg-blue-500 text-white cursor-pointer"
        >
          Get your link for free
        </button>
      </form>
    </div>
  );
};

export default Inputfield;
