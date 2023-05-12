import React from "react";

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
      className="w-[100%] h-[60px] fckin font-medium tracking-wide justify-center text-[#000] flex items-center "
      style={{
        backgroundColor: bg ? "#f2f2f2" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

const DataContainer = ({ title, data }) => {
  const arr = new Array();
  return (
    <div className="w-[30%] rounded-[20px] relative py-[20px] min-h-[100px] border-[2px] border-[#386179]">
      {[0, 0, 0, 0, 0, 0, 0].map((item, i) => {
        console.log(data.length, i);
        console.log(data[i].title);
        return <ListItem bg={i % 2 !== 0}>{data[i].title}</ListItem>;
      })}
    </div>
  );
};

const MetaServices = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Metaverse services may comprise a menu of old and newś
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px] flex justify-between px-[5%] mt-[30px]">
        <DataContainer
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
