import React from "react";
import Graph from "./Graph";
import { useStoreContext } from "../contextApi/ContextApi";
import { useFetchTotalClicks } from "../hooks/useQuery";
import ShortenPopUp from "../components/pages/ShortenPopUp";

const DashboardLayout = () => {
  const refetch = false;

  const { token } = useStoreContext();

  const [shortenPopUp, setShortenPopUp] = React.useState(false);

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError
  );

  console.log(useFetchTotalClicks(token, onError));

  function onError() {
    console.log("Error");
  }

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] ">
      {loader ? (
        <div className="text-center py-5">Loading...</div>
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
        </div>
      )}
      <ShortenPopUp refetch={refetch} />
    </div>
  );
};

export default DashboardLayout;
