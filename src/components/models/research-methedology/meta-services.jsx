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

const ListChild = ({ children }) => {
  return (
    <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const ListItem = ({ bg, children }) => {
  return (
    <div
      className="w-[100%] h-[50px] fckin font-medium tracking-wide justify-center text-[#000] flex items-center "
      style={{
        backgroundColor: bg ? "#f2f2f2" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

const DataContainer = ({ title, data, trans }) => {
  const arr = new Array();
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
      <div className="w-[30%] rounded-[20px] relative py-[20px] min-h-[100px] border-[2px] bg-[#fff] border-[#386179]">
        {[0, 0, 0, 0, 0, 0, 0].map((item, i) => {
          console.log(data.length, i);
          console.log(data[i].title);
          return <ListItem bg={i % 2 !== 0}>{data[i].title}</ListItem>;
        })}
      </div>
    </Tween>
  );
};

const MetaServices = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title="Metaverse services may comprise a menu of old and newś"
        width={100}
        trans={trans}
      />
      <div className="w-[100%] min-h-[100px] flex justify-between px-[5%] mt-[30px]">
        <DataContainer
          trans={trans}
          data={[
            { title: "Virtual reality*" },
            { title: "Augmented or mixed reality* " },
            { title: "Extended reality*" },
            { title: "Blockchain*" },
            { title: "NFTs* " },
            { title: "Crypto*" },
            { title: "DeFi*" },
          ]}
        ></DataContainer>
        <DataContainer
          trans={trans}
          data={[
            { title: "Digital twins" },
            { title: "Digital customer experience" },
            { title: "E-commerce" },
            { title: "Online events" },
            { title: "Online gaming" },
            { title: "" },
            { title: "" },
          ]}
        ></DataContainer>
        <DataContainer
          trans={trans}
          data={[
            { title: "Artificial intelligence" },
            { title: "Future-facing data strategy" },
            { title: "Web3" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
          ]}
        ></DataContainer>
      </div>
    </>
  );
};

export default MetaServices;
