import React, { useState } from "react";
import Pop1 from "./Pop1";
import Pop2 from "./Pop2";
import TheMetaverse from "./the-metaverse";

const Introduction = () => {
  const [curr, setCurr] = useState(0);

  return (
    <div
      className="w-[100%] items-center flex flex-col justify-between h-[100vh] absolute pt-[100px]"
      style={{
        zIndex: 99999999,
      }}
    >
      <div className="h-[42px] rounded-[30px] bg-[#f17238]  px-[30px] min-w-[300px] flex items-center justify-center text-[20px] font-medium capitalize text-[#fff] ">
        <span className="translate-y-[1px]">Introduction</span>
      </div>
      <div className="pb-[30px] pt-[20px] overflow-hidden  scroll-hidden w-[1200px] h-[550px] shrink-0 bg-[#ffffff90] backdrop-blur-lg mt-[20px] mb-[10px] rounded-[20px]">
        <div className="w-[100%] flex items-center h-[40px] justify-center absolute top-0 ">
          <img
            onClick={() => {
              if (curr !== 0) {
                setCurr(curr - 1);
              }
            }}
            src="/arrow.svg"
            className="w-[30px] h-[30px]  "
            alt=""
          />
        </div>
        {curr === 0 && <Pop1 />}
        {curr === 1 && <Pop2 />}  
        {curr === 2 && <TheMetaverse />}  
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center rotate-180 cursor-pointer">
        <img
          src="/arrow.svg"
          onClick={() => {
            if (curr !== 8) {
              setCurr(curr + 1);
            }
          }}
          className="w-[40px] h-[40px] movingElement "
          alt=""
        />
      </div>
    </div>
  );
};

export default Introduction;
