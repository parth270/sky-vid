import React from "react";

export const Profile1 = ({ change }) => {
  return (
    <div className="w-[1300px] mt-[30px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
        <div className="bg-[#535E6F] h-[30px] w-[280px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]">
          Horizon 3 - Market Leaders
        </div>
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
      </div>
      <div className="w-[100%] h-[150px] bg-[#ffffff99] mt-[12px] relative mb-[5px]">
        <img
          src="/profiles/accenture.png"
          className="w-[150px] absolute top-[10px] left-[80px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/kmpg.png"
          className="w-[150px] absolute top-[70px] left-[180px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/EY.png"
          className="w-[90px] absolute top-[10px] left-[340px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/public-sapi.png"
          className="w-[140px] absolute top-[70px] left-[440px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/IBM.png"
          className="w-[140px] absolute top-[10px] left-[640px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/tech-mahindra.png"
          className="w-[140px] absolute top-[90px] left-[840px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/infoysis.png"
          className="w-[140px] absolute top-[10px] left-[940px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
        <img
          src="/profiles/wipro.png"
          className="w-[140px] absolute top-[30px] left-[1090px] cursor-pointer"
          onClick={() => {
            change(0);
          }}
          alt=""
        />
      </div>
    </div>
  );
};
export const Profile2 = () => {
  return (
    <div className="w-[1300px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[35%] h-[5px] bg-[#707070]"></div>
        <div className="bg-[#535E6F] h-[30px] w-[320px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]">
          Horizon 2 - Enterprise Innovators
        </div>
        <div className="w-[35%] h-[5px] bg-[#707070]"></div>
      </div>
    </div>
  );
};
export const Profile3 = () => {
  return (
    <div className="w-[1300px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
        <div className="bg-[#535E6F] h-[30px] w-[280px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]">
          Horizon 1 - Disruptors
        </div>
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
      </div>
    </div>
  );
};
