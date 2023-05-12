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

const Pie1 = () => {
  return (
    <iframe
      src="https://flo.uri.sh/visualisation/13734775/embed"
      title="Interactive or visual content"
      class="flourish-embed-iframe w-[240px] h-[240px] ml-[20px]"
      frameborder="0"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    ></iframe>
  );
};

const Pie2 = () => {
  return (
    <iframe
      src="https://flo.uri.sh/visualisation/13734949/embed"
      title="Interactive or visual content"
      class="flourish-embed-iframe w-[240px] h-[240px] ml-[20px]"
      frameborder="0"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    ></iframe>
  );
};
const Pie3 = () => {
  return (
    <iframe
      src="https://flo.uri.sh/visualisation/13735027/embed"
      title="Interactive or visual content"
      class="flourish-embed-iframe w-[240px] h-[240px] ml-[20px]"
      frameborder="0"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    ></iframe>
  );
};
const Pie4 = () => {
  return (
    <iframe
      src="https://flo.uri.sh/visualisation/13735061/embed"
      title="Interactive or visual content"
      class="flourish-embed-iframe w-[240px] h-[240px] ml-[20px]"
      frameborder="0"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    ></iframe>
  );
};

const ColorShow = ({ data }) => {
  return (
    <>
      <div className="h-[100%] w-[80px] flex mr-[10px] flex-col ">
        {data.map((item, i) => {
          return (
            <div className="flex items-center ">
              <div
                className="w-[12px] translate-y-[1px] mr-[5px] h-[12px]"
                style={{
                  backgroundColor: item.color,
                }}
              ></div>
              <span className="whitespace-nowrap">{item.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const AssesmentPage = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Demographics
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <h2 className="text-[19px] font-bold fckin tracking-wide">
          Our cohort of metaverse services providers provided customer
          references. References hold decision-making roles in Global 2000
          enterprises
        </h2>
        <div className="w-[100%] flex h-[600px] border-[1px] border-[#000] justify-between mt-[50px] mb-[70px]">
          <div className="w-[33.33%] h-[600px]">
            <div className="w-[100%] h-[300px] border-[1px] border-[#000] overflow-hidden">
              <h1 className="h-[50px] flex items-center pl-[30px] tracking-wide text-[#000] font-bold fckin ">
                Heading
              </h1>
              <div className="flex justify-between items-center">
                <Pie1 />
                <ColorShow
                  data={[
                    {
                      color: "#723c82",
                      title: "IT",
                    },
                    {
                      color: "#f17238",
                      title: "Business",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="w-[100%] h-[300px] border-[1px] border-[#000] overflow-hidden">
              <h1 className="h-[50px] flex items-center pl-[30px] tracking-wide text-[#000] font-bold fckin ">
                Primary IT roles among respondents
              </h1>
              <div className="flex justify-between items-center">
                <Pie3 />
                <ColorShow
                  data={[
                    {
                      color: "#723c82",
                      title: "IT",
                    },
                    {
                      color: "#f17238",
                      title: "Business",
                    },
                    {
                      color: "#7d92a2",
                      title: "Business",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="w-[33.33%] h-[600px]">
            <div className="w-[100%] h-[300px] border-[1px] border-[#000] overflow-hidden">
              <h1 className="h-[50px] flex items-center pl-[30px] tracking-wide text-[#000] font-bold fckin ">
                Location of respondents
              </h1>
              <div className="flex justify-between items-center">
                <Pie2 />
                <ColorShow
                  data={[
                    {
                      color: "#723c82",
                      title: "IT",
                    },
                    {
                      color: "#f17238",
                      title: "Business",
                    },
                    {
                      color: "#7d92a2",
                      title: "Business",
                    },
                    {
                      color: "#b4b6bf",
                      title: "Business",
                    },
                    {
                      color: "#ceccd3",
                      title: "Business",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="w-[100%] h-[300px] border-[1px] border-[#000] overflow-hidden">
              <h1 className="h-[50px] flex items-center pl-[30px] tracking-wide text-[#000] font-bold fckin ">
                Primary business roles among respondents
              </h1>
              <div className="flex justify-between items-center">
                <Pie4 />
                <ColorShow
                  data={[
                    {
                      color: "#723c82",
                      title: "IT",
                    },
                    {
                      color: "#f17238",
                      title: "Business",
                    },
                    {
                      color: "#7d92a2",
                      title: "Business",
                    },
                    {
                      color: "#b4b6bf",
                      title: "Business",
                    },
                    {
                      color: "#ceccd3",
                      title: "Business",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="w-[33.33%] h-[600px] border-[1px] border-[#000]"></div>
        </div>
      </div>
    </>
  );
};

export default AssesmentPage;
