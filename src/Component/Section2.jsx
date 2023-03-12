import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="">
        <p className="text-grad w-fit text-center leading-[2.2rem] m-auto">
          The things <br /> that make us unique
        </p>
        <p className=" w-fit text-center font-[400] mt-[2rem] m-auto">
          There are key features that set us apart from other Youtube
          downloaders.
        </p>
        <div className="purp3 w-fit flex mt-[4rem] m-auto">
          <img className="w-[]" src="/image/Frame 14.svg" alt="" />
          <img src="/image/Frame 15.svg" alt="" />
          <img src="/image/Frame 16.svg" alt="" />
          <img src="/image/Frame 17.svg" alt="" />
        </div>
        <div className="purp relative justify-between w-[90%] h-[22rem] items-center flex mt-[7rem] m-auto">
          <img className="w-[40%] h-[80%]" src="/image/Frame 30.svg" alt="" />
          <img
            className="absolute w-[100%] h-[100%] "
            src="/image/Frame 29.svg"
            alt=""
          />
          <img className="w-[40%] h-[80%]" src="/image/Frame 40.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
