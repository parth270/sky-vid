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
      duration={0.5}
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

const EnterpriseService = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title="Enterprises need service providers to step up"
        width={100}
        trans={trans}
      />

      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  ">
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
          <iframe
            src="https://flo.uri.sh/visualisation/13699177/embed"
            title="Interactive or visual content"
            className="px-[5%] flourish-embed-iframe"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", height: "200px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </Tween>
        <div className="w-[100%]">
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
            <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
              <p className="text-[15px] text-[#000] fckin tracking-wide font-bold">
                Using a 1 to 10 scale, where 1 is non-existent and 10 is the
                best you've seen, please rate vendors’ expertise in the
                following enabling technologies
              </p>
              <p className="text-[15px] text-[#000] fckin tracking-wide font-medium">
                On average, enterprises are only willing to score their service
                provider partners 6.6/10 for metaverse expertise. One-fifth of
                those surveyed score their provider less than 5/10. The average
                rises to 7.2/10 for augmented and virtual reality. The related
                world of Web3 does better, with 44% of enterprises scoring their
                service provider 8/10 and above for their expertise.
              </p>
              <p className="text-[15px] my-[20px] text-[#000] fckin tracking-wide font-medium">
                For comparison, enterprises score service providers an average
                of 7.7 for process automation and 8.2 for analytics. It’s clear
                enterprises are less convinced by the capabilities available
                from service providers in the nascent area of metaverse services
                compared to those in which service providers have a longer track
                record. Enterprises leaders need convincing with success beyond
                the ideation session.
              </p>
            </div>
          </Tween>
        </div>
      </div>
    </>
  );
};

export default EnterpriseService;
