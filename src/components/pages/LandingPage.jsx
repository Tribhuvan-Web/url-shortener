import Card from "../Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";
import { Link } from "react-router-dom";
import "../styles/BackGround.css";
import BackGround from "../backGround/BackGround";

const LandingPage = () => {
  const navigate = useNavigate();

  const { token } = useStoreContext();

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 lg:px-14 sm:px-8 px-4  text-white">
      <BackGround />
        <div className="lg:flex-row flex-col px-5 lg:gap-10 gap-8 flex sm:py-2 py-20 justify-between items-center">
          <div className="  flex sm:flex-row flex-col items-center sm:justify-between sm:mt-14 mb-10 lg:gap-x-80 mx-auto">
            <div className="flex flex-col items-start justify-start sm:w-[50%] ">
              <motion.h1
                initial={{ opacity: 0, y: -80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-bold font-roboto   text-[#76ABAE]  md:text-4xl sm:text-4xl text-3xl  md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
              >
                Your Ultimate URL Shortening Tool
              </motion.h1>
              <p className=" text-md text-base my-2  dark:text-gray-300 ">
                Quickly transform long, cluttered links into sleek, shareable
                URLs with Shortly. Simple, efficient,
                and designed to enhance your digital experience."
              </p>
              {!token && (
                <Link to={"/register"} >
                  <li className="bg-[#76ABAE] hover:bg-white hover:text-[#31363F] opacity-[0.8] list-none  text-white  cursor-pointer  font-semibold  px-16 py-2 mt-8 rounded-full transition-all duration-150">
                    SignUp
                  </li>
                </Link>
              )}
            </div>
            <div className="sm:w-[35%] w-full sm:py-6 py-16 justify-end items-center z-10 ">
              <img
                src="images/bgimg.png"
                alt="Landing Page Logo"
                className=" object-cover "
              />
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl sm:text-center"
          >
            Trusted by Individuals, Empowered by Simplicity and Security
          </motion.p>
          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            <Card
              title="Simple URL Shortening"
              desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
            />
            <Card
              title="Powerful Analytics"
              desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
            />
            <Card
              title="Enhanced Security"
              desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
            />
            <Card
              title="Fast and Reliable"
              desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
