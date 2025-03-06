import dayjs from "dayjs";
import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaExternalLinkAlt, FaRegCalendar } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdDelete, MdOutlineAdsClick } from "react-icons/md";
import api from "../../api/api";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useNavigate } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import Graph from "../../Dashboard/Graph";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createDate }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [analyticToggle, setAnalyticToggle] = React.useState(false);
  const [selectedUrl, setSelectedUrl] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [analyticsData, setAnalyticsData] = React.useState([]);
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(
    /^https?:\/\//,
    ""
  );

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(
        `api/urls/analytics/${selectedUrl}?startDate=2025-01-01T00:00:00&endDate=2025-03-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      setAnalyticsData(data);
      setSelectedUrl("");
    } catch (error) {
      navigate("/error");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchUrl();
    }
  }, [selectedUrl]);

  return (
    <div className="bg-slate-300 shadow-lg border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <a
              href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
              target="_blank"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {subDomain + "/" + `${shortUrl}`}
            </a>
            <FaExternalLinkAlt className="text-blue-600" />
          </div>
          <div className="text-gray-700">{originalUrl}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-green-600 font-semibold">
              <MdOutlineAdsClick className="text-lg" />
              <span>{clickCount}</span>
              <span>{clickCount === 1 ? "Click" : "Clicks"}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <FaRegCalendar className="text-lg" />
              <span>{dayjs(createDate).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${import.meta.env.VITE_REACT_SUBDOMAIN}/s/${shortUrl}`}
          >
            <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition">
              <button>{isCopied ? "Copied" : "Copy"}</button>
              {isCopied ? (
                <LiaCheckSolid className="text-lg" />
              ) : (
                <IoCopy className="text-lg" />
              )}
            </div>
          </CopyToClipboard>
          <div
            onClick={() => analyticsHandler(shortUrl)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition"
          >
            <button>Analytics</button>
            <MdAnalytics className="text-lg" />
          </div>
       
        </div>
      </div>
      <div className="flex justify-end text-end">

        <MdDelete className="text-2xl text-red-700 cursor-pointer"/>
      </div>
      <React.Fragment>
        <div
          className={`${
            analyticToggle ? "flex" : "hidden"
          }  max-h-96 sm:mt-0 mt-5 min-h-96 relative  border-t-2 w-[100%] overflow-hidden `}
        >
          {loader ? (
            <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
              <div className="flex flex-col items-center gap-1">
                <Hourglass
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#306cce", "#72a1ed"]}
                />
                <p className="text-slate-700">Please Wait...</p>
              </div>
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                  <h1 className=" text-slate-500 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                    No Data For This Time Period
                  </h1>
                  <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-[12px] text-slate-200 ">
                    Share your short link to get started
                  </h3>
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      </React.Fragment>
    </div>
  );
};

export default ShortenItem;
