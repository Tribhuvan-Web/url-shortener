import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
    }
  }, [url]);
  return (
    <div className="flex flex-col bg-gray-400 text-white items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Please wait...</h1>
      <p className="text-lg font-semibold">Redirecting to your original page</p>
    </div>
  );
};

export default ShortenUrlPage;
