import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "@mui/material/Modal";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Snackbar, Alert } from "@mui/material";
import { useStoreContext } from "../../contextApi/ContextApi";
import api from "../../api/api";

const Inputfield = ({ onValidUrl = null }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [copyAlert, setCopyAlert] = useState(false);
  const { token } = useStoreContext();

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    if (validateUrl(url)) {
      setError("");
      onValidUrl?.();
      await createShortUrlHandler({ originalUrl: url });
    } else {
      setError("Please enter a valid URL");
    }
  };

  const createShortUrlHandler = async (data) => {
   
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortUrl = `${import.meta.env.VITE_REACT_FRONTEND}/s/${
        res.shortUrl
      }`;
      setShortenUrl(shortUrl);
      setOpenModal(true);
    } catch (error) {
      setError("An error occurred. Please try again");
    }
  };
  const handleCloseModal = () => {
    setUrl("");
    setShortenUrl("");
    setOpenModal(false);
  };

  return (
    <div className="p-8 sm:w-9/12  mx-auto bg-gray-50 dark:bg-gray-900 border-solid border-white border-2 static z-20 shadow-xl shadow-[#2c4850] rounded-3xl">
      <h1 className="text-3xl text-white font-bold mb-2">
        Shorten a long link
      </h1>
      <p className="mb-4 text-white">No payment required.</p>

      <form onSubmit={handleSubmit} className="flex flex-col md:mt-12 " >
        <span className="py-2 font-bold text-lg ">
          Type or paste your long link here
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
          className="lg:p-2 p-1.5 sm:max-w-60 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-[#2c4850] duration-200 disabled:opacity-50"
        >
          <span className=" text-white font-bold  flex items-center justify-center gap-2 ">
            <p>Get your link for free </p>
            <FaArrowRight className="text-white font-bold text-lg" />
          </span>
        </button>
      </form>

      <Modal open={openModal} className="flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 w-full max-w-md items-center flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 mx-auto">
            Your Shortened URL
          </h2>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <a
                href={shortenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words text-md"
              >
                {shortenUrl}
              </a>
              <CopyToClipboard
                text={shortenUrl}
                onCopy={() => setCopyAlert(true)}
              >
                <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100">
                  <ContentCopyIcon fontSize="small" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <button
            onClick={handleCloseModal}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>

      <Snackbar
        open={copyAlert}
        autoHideDuration={3000}
        onClose={() => setCopyAlert(false)}
        className="fixed bottom-4 mx-auto"
      >
        <Alert severity="success" variant="filled" >
          URL copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Inputfield;
