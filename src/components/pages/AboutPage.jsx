const AboutPage = () => {
  return (
    <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
      <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-10 lg:flex-row items-center justify-center ">
         
          <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-[#2c4850] flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
            <h2 className="text-4xl text-center text-[#76ABAE]  font-bold px-4 py-1 md:mt-0 mt-10">
              About Linklytics
            </h2>
            <p className="md:text-3xl text-2xl text-center  dark:text-gray-200 font-bold my-5">
              Welcome to our URL Shortener, powered by Spring Boot.
            </p>
            <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
              Our platform is designed to provide you with the most efficient
              and user-friendly experience possible. Simply paste your long URL
              into the text box, click the "Shorten" button, and voilà! You will
              receive a shortened URL that is ready to be shared with the world.
            </p>

            <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-gradient-to-t from-[#235d5d] to-[#5c7474] rounded-full lg:text-xl text-lg text-white font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
