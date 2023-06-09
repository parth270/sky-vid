import React, { useState } from "react";
import assesment from "./assesmentData";
import data from "../../../report/horizonResults";
import { Tween } from "react-gsap";

const Categories = ({ selected, change, trans }) => {
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
      <div className="w-[100%] shrink-0 flex items-center justify-between h-[30px] mt-[30px]">
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 0 ? "#F0905A" : "#ccc",
            color: selected === 0 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(0);
          }}
        >
          Strengths
        </div>
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 1 ? "#F0905A" : "#ccc",
            color: selected === 1 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(1);
          }}
        >
          Development Opportunities
        </div>
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 2 ? "#F0905A" : "#ccc",
            color: selected === 2 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(2);
          }}
        >
          Relevant M&A and Partnerships
        </div>
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 3 ? "#F0905A" : "#ccc",
            color: selected === 3 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(3);
          }}
        >
          Key Clients
        </div>
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 4 ? "#F0905A" : "#ccc",
            color: selected === 4 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(4);
          }}
        >
          Operations&Resources
        </div>
        <div
          className="h-[100%] flex items-center justify-center rounded-[30px] text-[13px] px-[20px] font-medium fckin cursor-pointer"
          style={{
            backgroundColor: selected === 5 ? "#F0905A" : "#ccc",
            color: selected === 5 ? "#fff" : "#000",
          }}
          onClick={() => {
            change(5);
          }}
        >
          Internal or Co-developed IP
        </div>
      </div>
    </Tween>
  );
};

const Profile = ({
  src,
  id,
  trans,
  close,
  imgClass,
  curr,
  setCurr,
  setCurr1,
}) => {
  const [selected, setSelected] = useState(0);
  console.log(data);
  return (
    <div className="w-[100%] h-[100vh] pt-[150px] absolute z-50 flex items-center justify-center top-0 ">
      <div className="w-[100%] h-[100px] absolute bottom-0 z-50 flex items-center justify-center rotate-180 cursor-pointer">
        <img
          src="/arrow.svg"
          onClick={() => {
            setCurr(curr);
          }}
          className="w-[40px] h-[40px] movingElement "
          alt=""
        />
      </div>
      <div className="w-[100%] h-[40px] absolute top-0 z-50 flex items-center justify-center cursor-pointer">
        <img
          src="/arrow.svg"
          onClick={() => {
            setCurr1(curr);
          }}
          className="w-[40px] h-[40px]"
          alt=""
        />
      </div>
      <div className=" flex flex-col pb-[30px] px-[5%] pt-[20px] overflow-hidden  scroll-hidden w-[100%] h-[100%] bg-[#ffffff90] backdrop-blur-lg rounded-[20px]">
        <img
          src="/cross.svg"
          className="absolute top-[20px] right-[40px] w-[24px] h-[24px] cursor-pointer z-50"
          alt=""
          onClick={() => {
            close();
          }}
        />
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
          <img src={src} className={imgClass} alt="" />
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
          <p className="text-[#535E6F] text-[18px] font-medium fckin">
            {data[id].detail}
          </p>
        </Tween>
        <Categories trans={trans} selected={selected} change={setSelected} />
        {selected === 0 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].strengths.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div> {item.title}:
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
        {selected === 1 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].developmentOpportunities.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div> {item.title}:
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
        {selected === 2 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].relevant.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div> {item.title}:
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
        {selected === 3 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].keys.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div> {item.title}:
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
        {selected === 4 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].globalMetaverse.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div> {item.title}:
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
        {selected === 5 && (
          <div className="w-[100%] h-[370px] mt-[20px] pr-[40px] scroll-bar-cool-2 overflow-y-auto">
            {data[id].flagship.map((item, i) => {
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
                  key={i}
                >
                  <div className="flex mb-[10px] text-[#000] font-medium tracking-wide">
                    <div className="mr-[4px]">•</div>
                    {item.content}
                  </div>
                </Tween>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
