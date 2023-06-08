import React, { useState } from "react";
import { Tween } from "react-gsap";

const Title = ({ title, width, trans }) => {
  return (
    <Tween
      from={{
        opacity: 0,
        y: -20,
      }}
      to={{
        opacity: trans ? 1 : 0,
        y: trans ? 0 : -20,
      }}
      duration={0.2}
    >
      <h1 className="w-[100%]  px-[5%] min-h-[70px] text-[38px] fckin text-[#535E6F]">
        {title}
        <div
          className=" h-[2px] bg-[#535e65]"
          style={{ width: `${width}%` }}
        ></div>
      </h1>
    </Tween>
  );
};

const Guides = ({ dropdown, trans }) => {
  return (
    <>
      <Title title="  Guides and definitions" width={100} trans={trans} />
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <Tween
          from={{
            opacity: 0,
            y: -20,
          }}
          to={{
            opacity: trans ? 1 : 0,
            y: trans ? 0 : -20,
          }}
          duration={0.2}
        >
          <p className="text-[18px] font-bold fckin">
            This report may contain terms, abbreviations, and concepts you may
            not be familiar with. HFS has compiled a series of guides to help
            newcomers understand the implications for a new business paradigm
            driven by metaverse-related technologies.
          </p>
        </Tween>
        <Tween
          from={{
            opacity: 0,
            y: -20,
          }}
          to={{
            opacity: trans ? 1 : 0,
            y: trans ? 0 : -20,
          }}
          duration={0.2}
        >
          <div className="w-[100%] my-[20px] h-[300px] flex justify-center">
            <img src="/data.png" alt="" className="object-contain" />
          </div>
        </Tween>
        <Tween
          from={{
            opacity: 0,
            y: -20,
          }}
          to={{
            opacity: trans ? 1 : 0,
            y: trans ? 0 : -20,
          }}
          duration={0.2}
        >
          <p className="text-[18px] font-bold fckin">
            Click images of the reports to open links. For more, search
            “metaverse” at{" "}
            <a
              href="https://www.hfsresearch.com"
              target="_blank"
              className="hover:underline"
            >
              {" "}
              www.hfsresearch.com
            </a>
          </p>
        </Tween>
      </div>
    </>
  );
};

export default Guides;
