import { motion } from "framer-motion";
import Inputfield from "../input/Inputfield";
import "../styles/BackGround.css";
import BackGround from "../backGround/BackGround";
import Loader from "../../Loader";
import React from "react";

const HomePage = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] bg-gray-900 lg:px-14 sm:px-8 px-4 py-20 overflow-visible text-white relative">
      {loading && <Loader  />}

        <BackGround />
        <div className="lg:flex-row flex-col bg-gray-900  lg:gap-10 gap-8 flex justify-between items-center">
          <div className=" flex-1 ">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bold font-roboto  mx-auto sm:text-center text-[#76ABAE]  md:text-4xl sm:text-4xl text-3xl  md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
            >
              Shortly Simplifies URL Shortening For Efficient Sharing.
            </motion.h1>
            <p className=" md:text-xl sm:text-lg text-base my-6 mx-auto sm:text-center dark:text-gray-300 ">
              Shortly streamlines the process of URL shortening, making sharing
              links effortless and efficient. With its user-friendly interface,
              Shortly allows you to generate concise, easy-to-share URLs in
              seconds. Simplify your sharing experience with Shortly today.
            </p>
            <div className="flex items-center my-16 pt-2 gap-3 ">
              <Inputfield loading={loading} setLoading={setLoading} />
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          {/* <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl sm:text-center"
          >
            Trusted by individuals and teams at the world best companies{}
          </motion.p> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
