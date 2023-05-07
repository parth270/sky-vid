import React, { useState } from "react";
import HorizonResultsData from "../../report/horizonResults";

const DropDown = ({ change }) => {
  const [curr, setCurr] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  const data = [];
  for (let i = 0; i < HorizonResultsData.length; i++) {
    data.push({
      title: HorizonResultsData[i].title,
      detail: HorizonResultsData[i].detail,
    });
  }

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
      className="w-[140px] h-[39px] flex items-center tracking-wide cursor-pointer justify-center fckin bg-[#444] mt-[10px] rounded-sm relative font-medium text-[#fff] "
    >
      {data[curr].title}
      {clicked && (
        <div className="absolute w-[140px] py-[5px] top-[40px] px-[10px] min-h-[10px] bg-[#555] rounded-sm">
          {data?.map((item, i) => {
            return (
              <div
                style={{
                  backgroundColor: curr === i ? "#222" : "",
                }}
                onClick={() => {
                  setCurr(i);
                  change(i);
                }}
                className="w-[100%] rounded-sm cursor-pointer h-[28px] my-[2px]  overflow-hidden  justify-center text-[12px] flex items-center font-medium"
              >
                <span className="font-bold tracking-wide inline-block shrink-0">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const HorizonResults = () => {
  const [curr, setCurr] = useState(0);
  const data = HorizonResultsData[curr];
  return (
    <div className="w-[100%] h-[100vh] bg-[#fff] scroll-bar-cool overflow-y-auto">
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        {data.title}: {data.detail}
      </h1>
      <div className="w-[100%] h-[100px] flex justify-end  px-[2%]">
        <DropDown
          change={(e) => {
            setCurr(e);
          }}
        />
      </div>
      <div className="w-[96%] min-h-[100px] mx-[2%] shadow-lg">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Strengths
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.strengths?.map((item, i) => {
              return (
                <li
                  className="text-[#fff] fckin font-medium mb-[10px] 	"
                  key={i}
                >
                  <span className="font-bold underline underline-offset-[2px] text-[17px] tracking-wide">
                    {item.title}
                  </span>
                  : {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[100%] mt-[10px] min-h-[100px] px-[2%]  mt-[30px]">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Development opportunities
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.developmentOpportunities?.map((item, i) => {
              return (
                <li
                  className="text-[#fff] fckin font-medium mb-[10px] 	"
                  key={i}
                >
                  <span className="font-bold underline underline-offset-[2px] text-[17px] tracking-wide">
                    {item.title}
                  </span>
                  : {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[100%] mt-[10px] min-h-[100px] px-[2%]  mt-[30px]">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Relevant M&A and partnerships
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.relevant?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <p className="font-bold underline underline-offset-[2px] text-[#fff] mb-[5px] text-[17px] tracking-wide">
                    {item.title}
                  </p>
                  {Array.isArray(item.content) ? (
                    item.content?.map((Item, j) => {
                      return (
                        <li
                          className="text-[#fff] fckin font-medium mb-[10px]"
                          key={j}
                        >
                          {Item}
                        </li>
                      );
                    })
                  ) : (
                    <li className="text-[#fff] fckin font-medium mb-[10px] 	">
                      {item.content}
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[100%] mt-[10px] min-h-[100px] px-[2%]  mt-[30px]">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Key metaverse services clients
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.keys?.map((item, i) => {
              return (
                <li
                  className="text-[#fff] fckin font-medium mb-[10px] 	"
                  key={i}
                >
                  <span className="font-bold underline underline-offset-[2px] text-[17px] tracking-wide">
                    {item.title}
                  </span>
                  : {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[100%] mt-[10px] min-h-[100px] px-[2%]  mt-[30px]">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Global metaverse operations and resources
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.globalMetaverse?.map((item, i) => {
              return (
                <li
                  className="text-[#fff] fckin font-medium mb-[10px] 	"
                  key={i}
                >
                  <span className="font-bold underline underline-offset-[2px] text-[17px] tracking-wide">
                    {item.title}
                  </span>
                  : {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[100%] mt-[10px] min-h-[100px] px-[2%] mb-[30px] mt-[30px]">
        <h3 className="w-[100%] fckin tracking-wide h-[50px] text-[#fff] font-medium text-[21px] flex pl-[20px] items-center bg-[#444]">
          Flagship internal or co-developed IP—metaverse services
        </h3>
        <div className="w-[100%] bg-[#44444490]  min-h-[100px]">
          <ul className="list-outside list-disc px-[40px] py-[20px]">
            {data.flagship?.map((item, i) => {
              return (
                <li
                  className="text-[#fff] fckin font-medium mb-[10px] 	"
                  key={i}
                >
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizonResults;
