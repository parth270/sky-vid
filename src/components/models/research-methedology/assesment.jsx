import React from "react";
import { Tween } from "react-gsap";
import CustomizedTables from "./assesment-table";

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



const Assessment = ({ dropdown, trans }) => {
  return (
    <>
      {/* <Title
        title={"Assessment methodology"}
        width={100}
        trans={trans}
      /> */}
      <div className="w-[100%] min-h-[100px]  px-[2%] mt-[15px]">
        <CustomizedTables trans />
      </div>
    </>
  );
};

export default Assessment;
