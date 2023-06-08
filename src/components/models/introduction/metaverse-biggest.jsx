import React from "react";
import { Tween } from "react-gsap";

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
const Title = ({ title, width,trans }) => {
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
      duration={0.2}
    >
      <h1 className="w-[100%]  px-[5%] min-h-[70px] text-[40px] fckin text-[#535E6F]">
        {title}
        <div
          className=" h-[2px] bg-[#535e65]"
          style={{ width: `${width}%` }}
        ></div>
      </h1>
    </Tween>
  );
};
{
  /* <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] "> */
}

const MetaverseBiggest = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title="…Metaverse will see biggest growth in enterprise investment"
        trans={trans}
        width={100}
      />
      <div className="w-[100%] flex pr-[5%] overflow-y-auto scroll-hidden h-[92%]  ">
        <Tween
          from={{
            opacity: 0,
            y: -20,
          }}
          to={{
            opacity: trans ? 1 : 0,
            y: trans ? 0 : -20,
          }}
          duration={0.2}
        >
          <iframe
            src="https://flo.uri.sh/visualisation/13699375/embed"
            title="Interactive or visual content"
            class="pl-[5%] pr-[30px] flourish-embed-iframe py-[10px]"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", height: "400px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </Tween>
        <Tween
          from={{
            opacity: 0,
            y: -20,
          }}
          to={{
            opacity: trans ? 1 : 0,
            y: trans ? 0 : -20,
          }}
          duration={0.2}
        >
          <p className="text-[18px] mt-[10px] text-[#000] fckin tracking-wide font-bold">
            Question: By how much does your enterprise plan to increase
            investment in emerging technologies in the next 12-18 months?
          </p>
        </Tween>
      </div>
    </>
  );
};

export default MetaverseBiggest;
