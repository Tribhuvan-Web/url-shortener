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
              <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
              <h1 className=" text-slate-500 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                No Data For This Time Period
              </h1>
              <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-[12px] text-slate-200 ">
                Share your short links to get started
              </h3>
            </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className="py-5 mt-5 sm:text-end text-center cursor-pointer">
            <button
              className=" bg-gradient-to-br  from-[#235d5d] to-[#5c7474] hover:text-slate-400 px-6 py-2 rounded-md font-semibold text-slate-200  "
              onClick={() => setShortenPopUp(true)}
            >
              Create a new short url
            </button>
          </div> 

          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center  py-3 sm:px-8 px-5 rounded-md  bg-gray-100">
                  <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold ">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm " />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} refetch={refetch}/>
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
