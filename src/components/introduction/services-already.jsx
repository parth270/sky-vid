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

const ServicesAlready = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Services—already worth $2.45 billion—will grow at an average of 15%
      </h1>
      {dropdown}
      <div className="w-[100%] flex items-center mt-[30px] justify-between px-[10%] ">
        <div className="w-[45%] shrink-0 h-[600px]">
          <p className="text-[22px] text-[#000] fckin tracking-wide font-bold">
            Metaverse services revenues
          </p>
          <iframe
            src="https://flo.uri.sh/visualisation/13699500/embed"
            title="Interactive or visual content"
            class="px-[5%] flourish-embed-iframe mt-[30px]"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", height: "500px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </div>
        <div className="w-[45%] h-[600px]">
          <p className="text-[18px] text-[#000] fckin tracking-wide font-bold">
            Metaverse services total headcount
          </p>
          <iframe
            src="https://flo.uri.sh/visualisation/13699526/embed"
            title="Interactive or visual content"
            class="px-[5%] flourish-embed-iframe mt-[30px]"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", height: "500px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ServicesAlready;
