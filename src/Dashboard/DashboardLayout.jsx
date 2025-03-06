import React, { useEffect } from "react";
import Graph from "./Graph";
import { useStoreContext } from "../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../hooks/useQuery";
import ShortenPopUp from "../components/shortenComponent/ShortenPopUp";
import { FaLink } from "react-icons/fa";
import ShortenUrlList from "../components/shortenComponent/ShortenUrlList";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { token } = useStoreContext();

  const navigate = useNavigate();

  const [shortenPopUp, setShortenPopUp] = React.useState(false);

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError
  );

  const {
    isLoading,
    data: myShortenUrls,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  function onError() {
    navigate("/error");
  }
  
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className="h-96 relative text-black">
            {totalClicks.length === 0 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-bold text-lg">
                No data for this time period
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-custom-gradient px-4 py-2 rounded-md text-white"
              onClick={() => setShortenPopUp(true)}
            >
              Create a new short url
            </button>
          </div>

          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm " />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
