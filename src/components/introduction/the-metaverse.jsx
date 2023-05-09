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

const TheMetaverse = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        The metaverse has moved from thought experiment to value
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <ListContainer>
          <ListChild>
            <span className="text-[16px] font-bold ">
              {" "}
              More hype than value:
            </span>{" "}
            Invest if you want a highrisk and high-reward, but they don’t do
            much
          </ListChild>
          <ListChild>
            <span className="text-[16px] font-bold ">
              {" "}
              Interesting thought experiments:
            </span>{" "}
            Potentially game changing, but more philosophical as of now
          </ListChild>
          <ListChild>
            <span className="text-[16px] font-bold "> Pilot and prove:</span>{" "}
            Technology exists, but it needs a robust business strategy
          </ListChild>
          <ListChild>
            <span className="text-[16px] font-bold ">
              {" "}
              Ready for primetime:
            </span>{" "}
            Already proven to drive business outcomes and new sources of value
          </ListChild>
        </ListContainer>
      </div>
    </>
  );
};

export default TheMetaverse;
