import React from "react";
import ShortenItem from "./ShortenItem";

const ShortenUrlList = ({ data, refetch }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className="my-6 space-y-4">
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} refetch={refetch} />
      ))}
    </div>
  );
};

export default ShortenUrlList;
