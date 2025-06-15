import { MdOutlineEmojiEmotions } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import ViewLessButton from "../otherComponent/ViewLessButton";
import ReadMoreButton from "../otherComponent/ReadMoreButton";

const AboutPage = () => {
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);

  const toggleViewMore1 = () => {
    setIsInView1((prev) => !prev);
  };
  const toggleViewMore2 = () => {
    setIsInView2((prev) => !prev);
  };

  return (
    <div className="w-full  m-auto flex flex-col items-center justify-cetner sm:py-20 py-8 bg-gray-900">
      <div className=" h-full flex flex-col justify-center items-center sm:px-4 px-2 ">
        <div className="w-full flex flex-col lg:gap-10 lg:flex-row items-center justify-center p ">
          <div className=" p-4 w-full h-full shadow-xl shadow-[#2c4850] flex sm:flex-row flex-col justify-center   items-center sm:px-6  py-10 rounded-xl">
            <div className="flex flex-col sm:w-[75%] items-center mb-8">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl text-center text-[#76ABAE]  font-bold py-1 md:mt-0 mt-10"
              >
                About Shortly
              </motion.p>
              <p className="md:text-3xl text-2xl text-center  text-gray-200 font-bold my-5">
                Welcome to our URL Shortener, powered by Spring Boot.
              </p>
              <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-14  text-gray-300">
                Our platform is designed to provide you with the most efficient
                and user-friendly experience possible. Simply paste your long
                URL into the text box, click the "Shorten" button, and voilà!
                You will receive a shortened URL that is ready to be shared with
                the world.
              </p>
            </div>
            <div className="sm:w-[25%] items-center  flex justify-center ">
              <img
                src={`${import.meta.env.VITE_REACT_FRONTEND}/images/aboutLogo.png`}
                alt="AboutLogo"
                className=" h-2/4 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
         "w-full h-full  flex-col sm:px-16 justify-start px-4 sm:mt-16 pt-10 gap-2" `}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-roboto font-bold lg:w-[60%]  md:w-[70%] mb-4 sm:w-[80%]  text-3xl text-gray-200"
        >
          Why Shortly?
        </motion.p>

        <p className="text-gray-300 mb-2">
          When faced with long URLs, research has shown that most internet users
          initially believe the link is spam, so it is easy to see why short
          URLs appeal to those who want to drive traffic to their site. Your URL
          is the very first impression your website will make, yet it is
          something people often overlook.
        </p>
        <p className="flex gap-2 text-gray-300 ">
          <MdOutlineEmojiEmotions className="text-6xl text-green-500" />
          People have a natural tendency to associate a shorter URL with a more
          reputable site. When seeing a long string of characters and letters,
          users may feel apprehensive about the website. Though many legitimate
          sites have long URLs users still associate legitimacy with a shortened
          URL.
        </p>

        <p className="text-gray-300 mb-2">
          Shortened URLs are easier to remember, making advertising or
          distribution more effective. A shortened URL makes it easier to copy
          from a print source, or anytime you may have to type in a link instead
          of clicking. A shortened URL has a higher chance of becoming a
          permalink. (A permalink is an URL that is intended to not change in
          the future).
          {isInView1 ? "" : <ReadMoreButton onClick={toggleViewMore1} />}
        </p>
        {isInView1 && (
          <>
            <p className="text-gray-300 mb-4">
              Shortened URLs are more aesthetically pleasing. Shortening a URL
              lets you mask unnecessary information. Twitter and some other
              services limit character length, so a shortened URL makes it
              easier to share across any platform. In-depth research analysis
              shows that shorter URLs are shared more frequently, compared to
              comparable sites or pages with long URLs.
            </p>
            <p className="text-gray-300 mb-2">
              The process of redirection behind URL shortening can be
              complicated. Use a trusted source like ShortLy to avoid
              complications. Some URL shorteners provide very limited custom
              domains, and others will not work with your domain. The free
              service at Shortly delivers a quick, easy and free way to generate
              a shorter URL for your site. The process for URL shortening is
              reliable and secure, so you can safely generate a better URL.
              {isInView1 ? <ViewLessButton onClick={toggleViewMore1} /> : ""}
            </p>
          </>
        )}
      </div>
      <div
        className={` "w-full h-full  flex-col sm:px-16 justify-start px-4 sm:mt-16  gap-2" `}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%]  mb-6 sm:mt-0 mt-6 text-3xl text-gray-200"
        >
          Friendly Links
        </motion.p>

        <p className="text-gray-300 mb-2">
          Your URL is the first step toward improving search engine optimization
          (SEO).
        </p>
        <p className="flex gap-2 text-gray-300 ">
          Bots have a difficult time with long and complicated URLs so it makes
          sense that shorter URLs will receive a higher ranking. Short URLs help
          your site to establish trust and authority.
        </p>
        <p className="text-gray-300 mb-2">
          As your business or online presence grows, so will your website.
          Growing your site will be much more comfortable with a shortened URL.
          As you add more pages of content, a shortened URL makes it easier to
          link each subsequent page without creating an unnecessarily long URL.
          {isInView2 ? "" : <ReadMoreButton onClick={toggleViewMore2} />}
        </p>
        {isInView2 && (
          <>
            <p className="text-gray-300 mb-4">
              A shortened URL also conveys professionalism. Deciding which link
              we are going to click from an internet search result,
              advertisement, or social media share is something that happens
              almost subliminally. We want links that convey where they will
              take us, and our brains register shortened links as more
              professional.
            </p>
            <p className="text-gray-300 mb-2">
              Using a URL shortener is one of the quickest and easiest things
              you can do to increase traffic and click-throughs to your site.
              When used in conjunction with smart SEO choices, relevant
              information on your website and analytics-driven marketing, you
              will be well on your way to establishing an online presence for
              your business, service or blog. Most people without in-depth
              knowledge of SEO and web technology think they need to pay a
              fortune for a reputable webmaster. In truth, there are many ways
              to create an attractive, well-ranked and respectable website. URL
              shortners, like Shortly, are one more tool in your box to help you
              build the website you need.
              {isInView2 ? <ViewLessButton onClick={toggleViewMore2} /> : ""}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
