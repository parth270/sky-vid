import React from "react";
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
      duration={0.5}
    >
      <h1 className="w-[100%]  px-[5%] h-[70px] text-[40px] fckin text-[#535E6F]">
        {title}
        <div
          className=" h-[2px] bg-[#535e65]"
          style={{ width: `${width}%` }}
        ></div>
      </h1>
    </Tween>
  );
};

const ListContainer = ({ children }) => {
  return <ul className="list-outside list-disc mt-[10px]">{children}</ul>;
};

const ListChild = ({ children, trans }) => {
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
      duration={0.5}
    >
      <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
    </Tween>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const MetaEnabling = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title={"Metaverse enabling technologies and service capabilities"}
        width={100}
        trans={trans}
      />

      <div className="w-[100%] min-h-[100px]  px-[5%] relative mt-[30px]">
        <div className="w-[100%] flex justify-between px-[10%]">
          <img src="/f1.png" className="w-[200px]" alt="" />
          <img src="/f2.png" className="w-[200px]" alt="" />
          <img src="/f3.png" className="w-[200px]" alt="" />
        </div>
        <div className="w-[100%] flex justify-between px-[20%]">
          <img src="/l1.png" className="w-[200px]" alt="" />
          <img src="/l2.png" className="w-[20px]" alt="" />
          <img src="/l3.png" className="w-[200px]" alt="" />
        </div>
        <div className="w-[100%] flex justify-center px-[10%]">
          <img
            src="/epi-3.png"
            className="w-[400px] translate-y-[-1px]"
            alt=""
          />
        </div>
        <div className="w-[100%] flex justify-between translate-y-[-100px] px-[10%]">
          <img src="/epi-2.png" className="w-[200px]" alt="" />
          <img src="/epi-1.png" className="w-[200px]" alt="" />
        </div>
      </div>
    </>
  );
};

export default MetaEnabling;
