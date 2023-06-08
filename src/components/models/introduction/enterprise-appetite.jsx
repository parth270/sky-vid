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

const EnterpriseAppetite = ({ dropdown, trans }) => {
  
  return (
    <>
      <Title
        title=" Enterprise appetite is huge—but it lacks strategic direction"
        width={100}
        trans={trans}
      />
      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%] flex justify-between  px-[5%] ">
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
            src="https://flo.uri.sh/visualisation/13698288/embed"
            title="Interactive or visual content"
            class="flourish-embed-iframe"
            frameborder="0"
            scrolling="no"
            style={{ width: "48%", height: "420px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </Tween>
        <div className="w-[48%]">
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
            <div className="w-[100%] min-h-[80px] mt-[5px]">
              <p className="text-[15px] text-[#000] fckin tracking-wide font-bold">
                Q. Rank the top three technologies your organization expects to
                invest the most in over the next 12 to 18 months
              </p>
              <p className="text-[15px] text-[#000] fckin tracking-wide font-medium">
                Total percentage of rank 1, 2, or 3 responses
              </p>
            </div>
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
            <div className="w-[100%]  min-h-[100px] py-[5px] bg-[#f2f2f2] mb-[30px] px-[5%] mt-[0px]">
              <p className="text-[15px] text-[#000] fckin tracking-wide font-medium">
                Investment in the range of metaverse enablers (identified on
                page 18) is huge.
              </p>
              <p className="text-[15px] my-[5px] text-[#000] fckin tracking-wide font-medium">
                In combination, there is greater total prioritization (39%
                ranking 1, 2, or 3) placed on the metaverse enablers than on any
                other technology needs identified by our audience of Global 2000
                executives (HFS Pulse, 2022).
              </p>
              <p className="text-[15px] my-[5px] text-[#000] fckin tracking-wide font-medium">
                The fact that enterprise buyers identify only a small proportion
                of this (14%) as related to their metaverse ambitions suggests a
                strategy gap that service providers must work harder to fill.
              </p>
              <p className="text-[15px] my-[5px] text-[#000] fckin tracking-wide font-medium">
                Projects involving AR and VR—and blockchain, too—should be
                delivered as part of a program with a clearer view on the more
                holistic business outcomes that the shift to metaverse can
                deliver
              </p>
              <p className="text-[15px] text-[#000] fckin tracking-wide font-medium">
                The wisest long-term view is to add 5G, IoT, and quantum to that
                strategic plan.
              </p>
            </div>
          </Tween>
        </div>
      </div>
    </>
  );
};

export default EnterpriseAppetite;
