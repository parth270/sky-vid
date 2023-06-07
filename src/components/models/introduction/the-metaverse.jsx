import React from "react";

const ListContainer = ({ children }) => {
  return <ul className="list-outside list-disc mt-[10px]">{children}</ul>;
};

const ListChild = ({ children, color }) => {
  return (
    <li
      className="text-[#000] fckin leading-[16px] font-medium mb-[10px] "
      style={{
        color: color,
      }}
    >
      {children}
    </li>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const Title = ({ title, width }) => {
  return (
    <h1 className="w-[100%]  px-[5%] h-[70px] text-[40px] fckin text-[#535E6F]">
      {title}
      <div
        className=" h-[2px] bg-[#535e65]"
        style={{ width: `${width}%` }}
      ></div>
    </h1>
  );
};

const TheMetaverse = () => {
  return (
    <>
      <Title
        title="The metaverse has moved from thought experiment to value"
        width={100}
      />
      <div className="w-[100%] scroll-hidden h-[92%]  px-[5%] ">
        <div className="w-[100%] min-h-[100px]  px-[5%]">
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
        <div className="w-[90%] mx-[5%] relative h-[400px] translate-y-[-30px] flex items-center">
          <img src="/aa.svg" className="absolute w-[100%] " alt="" />
          <div
            className="w-[100%] h-[100%] absolute flex items-center"
            style={{
              zIndex: 1000,
            }}
          >
            <div className=" w-[25%] px-[6%] ">
              <ListContainer>
                <ListChild color={"#fff"}>
                  {" "}
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Cryptocurrencies
                  </span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Stablecoins
                  </span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]"> NFTs</span>
                </ListChild>
              </ListContainer>
            </div>
            <div className=" w-[25%] px-[6%] ">
              <ListContainer>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]"> CBDC</span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]"> Web 3.0</span>
                </ListChild>
              </ListContainer>
            </div>
            <div className=" w-[25%] px-[6%] ">
              <ListContainer>
                <ListChild color={"#fff"}>
                  {" "}
                  <span className="text-[#fff] leading-[16px]"> Metaverse</span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]"> DeFi</span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]"> DAOs</span>
                </ListChild>
              </ListContainer>
            </div>
            <div className=" w-[25%] px-[6%] ">
              <ListContainer>
                <ListChild color={"#fff"}>
                  {" "}
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Ecosystem play
                  </span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Asset tokenization transactions
                  </span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Multiparty financial
                  </span>
                </ListChild>
                <ListChild color={"#fff"}>
                  <span className="text-[#fff] leading-[16px]">
                    {" "}
                    Supply chain track and trace
                  </span>
                </ListChild>
              </ListContainer>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100px] "></div>
      </div>
    </>
  );
};

export default TheMetaverse;
