import React, { useState } from "react";

const Guides = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Guides and definitions
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <p className="text-[18px] font-bold fckin">
          This report may contain terms, abbreviations, and concepts you may not
          be familiar with. HFS has compiled a series of guides to help
          newcomers understand the implications for a new business paradigm
          driven by metaverse-related technologies.
        </p>
        <div className="w-[100%] h-[400px] flex justify-between"></div>
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
      </div>
    </>
  );
};

export default Guides;
