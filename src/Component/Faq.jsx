import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] m-auto">
        <div className="w-[100%] lg:w-[35%]">
          <p className="text-[2rem] leading-[2.4rem] text-grad">
            Frequently asked questions
          </p>
          <p className="text-grad text-[1.2rem] lg:text-[1.5rem] mt-8 leading-[1.8rem]">
            Contact us via support if you have any more questions.
          </p>
        </div>
        <div className="w-[100%] lg:w-[65%] flex mt-8 lg:mt-0 flex-col gap-12">
          <div className="w-[100%] text-[1rem]">
            <h2 className="text-[white] font-[500] mb-1 lg:mb-4">
              What is tubecut?
            </h2>
            <p className="text-[#B4B5B9]">
              Tubecut is a Mac App that allows you to download and trim youyube
              videos with Tubecut, you can download and trim youtube videos in
              any format, ranging from 144p to 4k, in your desired quality and
              in mp4 or mp3.
            </p>
          </div>
          <div className="w-[100%] text-[1rem]">
            <h2 className="text-[white] font-[500] mb-1 lg:mb-4">
              How can i purchase?
            </h2>
            <p className="text-[#B4B5B9]">
              Go to our{" "}
              <a href="#" className="text-[#9E9DFC]">
                Gumroad
              </a>{" "}
              page, after filling out your details you can access the irectory
              that lets you download tubecut.
            </p>
          </div>
          <div className="w-[100%] text-[1rem]">
            <h2 className="text-[white] font-[500] mb-1 lg:mb-4">
              Where’ s my license key?
            </h2>
            <p className="text-[#B4B5B9]">
              Your license key will be sent to the email address you used to
              purchae tubecut on gumroad, if you haven’t recieved please{" "}
              <a href="#" className="text-[#9E9DFC]">
                contact us
              </a>
              .
            </p>
          </div>
          <div className="w-[100%] text-[1rem]">
            <h2 className="text-[white] font-[500] mb-1 lg:mb-4">
              My downloaded video won’t open in Quicktime. What should i do?
            </h2>
            <p className="text-[#B4B5B9]">
              In case you encounter this probllem after 720p quality, QuickTime
              has some strict restrictions on playing videos, we recommend{" "}
              <a href="#" className="text-[#9E9DFC]">
                VLC
              </a>{" "}
              for viewing high-quality videos.
            </p>
          </div>
          <div className="w-[100%] text-[1rem]">
            <h2 className="text-[white] font-[500] mb-1 lg:mb-4">
              What is your refund policy?
            </h2>
            <p className="text-[#B4B5B9]">
              There are no refunds available for tubecut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
