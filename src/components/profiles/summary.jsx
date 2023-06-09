import React, { useState } from "react";
import assesment from "./assesmentData";

const DropDown = ({ change, curr, data }) => {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  React.useEffect(() => {
    const onPointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onPointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown, false);
    };
  });

  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setClicked(true);
      }}
      className="w-[100%] whitespace-nowrap px-[10px] h-[45px] flex items-center tracking-wide cursor-pointer justify-center fckin bg-[#444] mt-[10px] rounded-sm relative font-medium text-[#fff] "
    >
      {data[curr].title.substring(0, 49)}
      {data[curr].title.length > 50 && "..."}
      {clicked && (
        <div className="absolute w-[100%] scroll-bar-cool-1 py-[12px] max-h-[120px] overflow-y-auto top-[48px] px-[10px] min-h-[10px] bg-[#555] rounded-sm">
          {data?.map((item, i) => {
            return (
              <div
                style={{
                  backgroundColor: curr === i ? "#222" : "",
                }}
                onClick={() => {
                  change(i);
                  setTimeout(() => {
                    setClicked(false);
                  }, 10);
                }}
                className="w-[100%] rounded-sm cursor-pointer h-[28px] my-[2px]  overflow-hidden  justify-center text-[12px] flex items-center font-medium"
              >
                <span className="font-bold tracking-wide inline-block shrink-0">
                  {item.title.substring(0, 100)}
                  {item.title.length > 11 && "..."}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const LotsData = () => {
  const [curr, setCurr] = useState(0);
  const data = assesment[curr];
  console.log(data);
  return (
    <div className="w-[100%] min-h-[100px] mt-[30px] flex justify-between ">
      <div className="w-[45%] ">
        <h3 className="font-bold fckin text-[30px] leading-[50px]">
          • Providers:
        </h3>
        <DropDown
          data={assesment}
          curr={curr}
          change={(e) => {
            setCurr(e);
          }}
        />
        <div className="mt-[30px]">
          <h2 className="font-bold text-[24px] tracking-wider text-[#000] fckin ">
            {data.title}
          </h2>
          <p className="font-medium mt-[10px] text-[18px] tracking-wider text-[#000] fckin ">
            {data.list}
          </p>
        </div>
      </div>
    </div>
  );
};

const AssesmentPage = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Summary of providers assessed in this report
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <LotsData />
      </div>
    </>
  );
};

export default AssesmentPage;
