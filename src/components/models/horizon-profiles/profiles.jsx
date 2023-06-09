import React from "react";

export const Profile1 = ({ change, doIt }) => {
  return (
    <div className="w-[1300px] mt-[30px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
        <div
          onClick={() => {
            doIt();
          }}
          className="bg-[#535E6F] cursor-pointer h-[30px] w-[280px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]"
        >
          Horizon 3 - Market Leaders
        </div>
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
      </div>
      <div className="w-[100%] h-[150px] bg-[#ffffff99] mt-[12px] relative mb-[5px]">
        <img
          src="/profiles/accenture.png"
          className="w-[150px] absolute top-[10px] left-[80px] cursor-pointer"
          onClick={() => {
            change(0, "/profiles/accenture.png");
          }}
          alt=""
        />
        <img
          src="/profiles/kmpg.png"
          className="w-[150px] absolute top-[70px] left-[180px] cursor-pointer"
          onClick={() => {
            change(1, "/profiles/kmpg.png");
          }}
          alt=""
        />
        <img
          src="/profiles/EY.png"
          className="w-[90px] absolute top-[10px] left-[340px] cursor-pointer"
          onClick={() => {
            change(2, "/profiles/EY.png");
          }}
          alt=""
        />
        <img
          src="/profiles/public-sapi.png"
          className="w-[140px] absolute top-[70px] left-[440px] cursor-pointer"
          onClick={() => {
            change(3, "/profiles/public-sapi.png");
          }}
          alt=""
        />
        <img
          src="/profiles/IBM.png"
          className="w-[140px] absolute top-[10px] left-[640px] cursor-pointer"
          onClick={() => {
            change(4, "/profiles/IBM.png");
          }}
          alt=""
        />
        <img
          src="/profiles/tech-mahindra.png"
          className="w-[140px] absolute top-[90px] left-[840px] cursor-pointer"
          onClick={() => {
            change(5, "/profiles/tech-mahindra.png");
          }}
          alt=""
        />
        <img
          src="/profiles/infoysis.png"
          className="w-[140px] absolute top-[10px] left-[940px] cursor-pointer"
          onClick={() => {
            change(6, "/profiles/infoysis.png");
          }}
          alt=""
        />
        <img
          src="/profiles/wipro.png"
          className="w-[140px] absolute top-[30px] left-[1090px] cursor-pointer"
          onClick={() => {
            change(7, "/profiles/wipro.png");
          }}
          alt=""
        />
      </div>
    </div>
  );
};
export const Profile2 = ({ change, doIt }) => {
  return (
    <div className="w-[1300px] mt-[10px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[35%] h-[5px] bg-[#707070]"></div>
        <div
          onClick={() => {
            doIt();
          }}
          className="bg-[#535E6F] h-[30px] w-[320px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]"
        >
          Horizon 2 - Enterprise Innovators
        </div>
        <div className="w-[35%] h-[5px] bg-[#707070]"></div>
      </div>
      <div className="w-[100%] h-[150px] bg-[#ffffff99] mt-[12px] relative mb-[5px]">
        <img
          src="/profiles/hexaware.png"
          className="w-[120px] absolute top-[60px] left-[40px] cursor-pointer"
          onClick={() => {
            change(14, "/profiles/hexaware.png");
          }}
          alt=""
        />
        <img
          src="/profiles/capgemini.png"
          className="w-[220px] absolute top-[30px] left-[150px] cursor-pointer"
          onClick={() => {
            change(8, "/profiles/capgemini.png");
          }}
          alt=""
        />
        <img
          src="/profiles/pwx.png"
          className="w-[150px] absolute top-[60px] left-[340px] cursor-pointer"
          onClick={() => {
            change(11, "/profiles/pwx.png");
          }}
          alt=""
        />
        <img
          src="/profiles/coforge.png"
          className="w-[180px] absolute top-[20px] left-[500px] cursor-pointer"
          onClick={() => {
            change(9, "/profiles/coforge.png");
          }}
          alt=""
        />
        <img
          src="/profiles/rd.png"
          className="w-[180px] absolute top-[50px] left-[680px] cursor-pointer"
          onClick={() => {
            change(12, "/profiles/rd.png");
          }}
          alt=""
        />
        <img
          src="/profiles/cognizant.png"
          className="w-[180px] absolute top-[40px] left-[880px] cursor-pointer"
          onClick={() => {
            change(10, "/profiles/cognizant.png");
          }}
          alt=""
        />
        <img
          src="/profiles/tcs.png"
          className="w-[140px] absolute top-[80px] left-[1080px] cursor-pointer"
          onClick={() => {
            change(13, "/profiles/tcs.png");
          }}
          alt=""
        />
      </div>
    </div>
  );
};
export const Profile3 = ({ change, doIt }) => {
  return (
    <div className="w-[1300px] mt-[10px]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
        <div
          onClick={() => {
            doIt();
          }}
          className="bg-[#535E6F] h-[30px] w-[280px] font-medium fckin text-[#fff] items-center justify-center flex rounded-[30px]"
        >
          Horizon 1 - Disruptors
        </div>
        <div className="w-[38%] h-[5px] bg-[#707070]"></div>
      </div>
      <div className="w-[100%] h-[150px] bg-[#ffffff99] mt-[12px] relative mb-[5px]">
        <img
          src="/profiles/foundever.png"
          className="w-[300px] absolute top-[25px] left-[100px] cursor-pointer"
          onClick={() => {
            change(15, "/profiles/foundever.png");
          }}
          alt=""
        />
        <img
          src="/profiles/ust.png"
          className="w-[170px] absolute top-[25px] left-[540px] cursor-pointer"
          onClick={() => {
            change(17, "/profiles/ust.png");
          }}
          alt=""
        />
        <img
          src="/profiles/ltimindtree.png"
          className="w-[300px] absolute top-[30px] left-[840px] cursor-pointer"
          onClick={() => {
            change(16, "/profiles/ltimindtree.png");
          }}
          alt=""
        />
      </div>
    </div>
  );
};
