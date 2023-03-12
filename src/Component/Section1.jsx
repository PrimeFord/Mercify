import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="one">
        <div className="w-[62%] m-auto justify-between flex">
          <div className="desc purp1">
            <p>Fast. Safe. Simple.</p>
            <p className="flex">
              <span className="text-[#25252F]">you</span>
              <span>
                <img src="/image/Frame 1.svg" alt="" />
              </span>{" "}
              ter
            </p>
          </div>
          <div className="relative h-100% flex w-[40%]">
            <img
              className=" absolute top-[3rem] left-[8rem] z-10"
              src="/image/Frame 2.svg"
              alt=""
            />
            <img
              className=" absolute top-[4rem] left-[3rem]"
              src="/image/Frame 3.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-100% flex justify-center gap-6">
          <div className="w-[30%] relative">
            <img
              className=" absolute top-[-1rem]"
              src="/image/Frame 5.svg"
              alt=""
            />
            <img
              className=" absolute top-[1rem] left-[2rem] z-10"
              src="/image/Frame 4.svg"
              alt=""
            />
            <img
              className=" absolute left-[10rem]"
              src="/image/Frame 20.svg"
              alt=""
            />

            <img
              className=" absolute left-[13.5rem] z-5"
              src="/image/Frame 7.svg"
              alt=""
            />
            <img
              className=" absolute top-[1rem] left-[17.5rem] z-10"
              src="/image/Frame 19.svg"
              alt=""
            />
            <img
              className=" absolute top-[8rem]"
              src="/image/Frame 9.svg"
              alt=""
            />
          </div>
          <div className="w-[30%] flex flex-col gap-6">
            <p className="leading-[1.4rem] text-[1rem] pb-4 font-[400]">
              No ads, no bullshit. You can download YouTube videos in MP4 and
              MP3 formats. Tubecut will get you that video you wanted with the
              right quality and trimming.
            </p>
            <button className="w-fit px-[2.2rem] py-[1rem] bg-gradient-to-r from-[#4C497E] to-[#C7BFFA] text-[white] rounded-[.5rem]">
              Download mac App
            </button>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="m-auto flex w-[100%] justify-between">
          <div className="w-[50%] flex justify-end  pr-[5rem]">
            <div className="w-fit relative flex flex-col gap-2">
              <p className="list">
                <p>
                  <span className="text-[#d9d9d9]">2160p</span> [3840*2160]
                </p>
                <span>-398mb</span>
              </p>
              <p className="list">
                <p>
                  <span className="text-[#d9d9d9]">1080p</span> [1920*1080]
                </p>
                <span>-328mb</span>
              </p>{" "}
              <p className="list">
                <p>
                  <span className="text-[#d9d9d9]">720p</span> [1280*720]
                </p>
                <span>-245mb</span>
              </p>{" "}
              <p className="list">
                <p>
                  <span className="text-[#d9d9d9]">480p</span> [640*480]
                </p>
                <span>-172mb</span>
              </p>{" "}
              <p className="list">
                <p>
                  <span className="text-[#d9d9d9]">320p</span> [480*320]
                </p>
                <span>-98mb</span>
              </p>{" "}
              <p className="download">Download</p>
              <img
                className="absolute top-[2.5rem]"
                src="/image/Frame 10.svg"
                alt=""
              />
              <img
                className="absolute left-[5.5rem] top-[2.5rem]"
                src="/image/Frame 11.svg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center pl-[5rem]">
            <div className="w-[55%]">
              <p className="text-[2rem] font-[500]">
                <span className="first">Every.</span> Single. Option.
              </p>
              <p className=" font-[400]">
                Download youtube videos in every single quality right from 144p
                to 4k HD
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto flex w-[100%] gap-8">
          <div className="w-[50%] flex flex-col justify-center items-end">
            <div className="w-[55%]">
              <p className="purp2 text-[2rem] font-[500]">
                <span className="first">Slice.</span>Cut. Finish.
              </p>
              <p className=" font-[400]">
                You can trim and download your videos by choosing the time range
                that you wish to save.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-start">
            <img src="/image/Frame 46.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
