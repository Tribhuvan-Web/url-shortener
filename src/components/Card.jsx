import React from "react";

const Card = ({ title, desc }) => {
  return (
    <div className="shadow-xl shadow-[#2c4850] border flex flex-col px-4 py-8 gap-3 rounded-sm">
      <h1 className=" text-xl text-[#76ABAE] font-semibold">{title}</h1>
      <p className=" text-sm dark:text-gray-300">{desc}</p>
    </div>
  );
};

export default Card;
