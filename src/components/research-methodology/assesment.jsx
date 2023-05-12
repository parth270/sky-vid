import React, { useState } from "react";
import assesment, { HorizonLists } from "./assesmentData";

const ListContainer = ({ children }) => {
  return (
    <ul className="list-outside list-disc mt-[10px] p-[15px]">{children}</ul>
  );
};

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
        <div className="absolute w-[100%] py-[5px] top-[48px] px-[10px] min-h-[10px] bg-[#555] rounded-sm">
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

const ListChild = ({ children }) => {
  return (
    <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
  );
};

const LotsData = () => {
  const [curr, setCurr] = useState(0);
  const [horizon, setHorizon] = useState(0);
  const horizonData = HorizonLists[curr];
  console.log(horizonData);
  const data = assesment[curr];
  console.log(data);
  return (
    <div className="w-[100%] min-h-[100px] mt-[30px] flex justify-between ">
      <div className="w-[45%] ">
        <h3 className="font-bold fckin text-[30px] leading-[50px]" >
        • Assesment Dimension:
        </h3>
        <DropDown
          data={assesment}
          curr={curr}
          change={(e) => {
            setCurr(e);
            setHorizon(0);
          }}
        />
        <ListContainer>
          {data.list.map((item, i) => {
            return <ListChild>{item}</ListChild>;
          })}
        </ListContainer>
      </div>
      <div className="w-[45%]">
      <h3 className="font-bold fckin text-[30px] leading-[50px]" >
        • Horizon Service Providers:
        </h3>
        <DropDown
          data={[
            {
              title: "Horizon 1 service providers  ",
            },
            {
              title: "Horizon 2 service providers  ",
            },
            {
              title: "Horizon 3 service providers  ",
            },
          ]}
          curr={horizon}
          change={(e) => {
            setHorizon(e);
          }}
        />
        <ListContainer>
          {horizonData[horizon].map((item, i) => {
            return <ListChild>{item}</ListChild>;
          })}
        </ListContainer>
      </div>
      {/* <div className="w-[30%]">
        <DropDown
          data={data}
          curr={curr}
          change={(e) => {
            setCurr(e);
          }}
        />
      </div> */}
    </div>
  );
};

const AssesmentPage = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Assessment methodology
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <p className="text-[15px] font-bold fckin tracking-wide text-[#386179]">
          The HFS Horizons Metaverse Services Providers, 2023 report evaluates
          the capabilities of providers across a range of dimensions to
          understand the Why, What, How, and So What of their metaverse services
          offerings. Our assessment is based on inputs from clients, partners,
          and employees and augmented with analyst perspectives. The following
          illustrates how we have assessed their vision, execution and
          capabilities
        </p>
        <LotsData />
      </div>
    </>
  );
};

export default AssesmentPage;
