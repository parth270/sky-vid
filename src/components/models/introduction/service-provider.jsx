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
{
  /* <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] "> */
}

const ServiceProvider = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title="Service providers lag enterprise investment intent"
        width={100}
        trans={trans}
      />
      <div className="w-[100%] px-[5%] flex justify-between overflow-y-auto scroll-hidden h-[92%] ">
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
            src="https://flo.uri.sh/visualisation/13699315/embed"
            title="Interactive or visual content"
            className=" flourish-embed-iframe"
            frameborder="0"
            scrolling="no"
            style={{ width: "52%", height: "420px" }}
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
            duration={0.5}
          >
            <div className="w-[100%] min-h-[70px]  px-[5%] mt-[5px]">
              <p className="text-[18px] text-[#000] fckin tracking-wide font-bold">
                Please specify which enabling technologies your service provider
                is leveraging as part of your relationship
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
            duration={0.5}
          >
            <div className="w-[100%] mx-[5%] min-h-[100px] py-[10px] bg-[#f2f2f2] mb-[5px] px-[5%] mt-[30px]">
              <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
                Enterprise customers say their service provider is leveraging
                metaverseenabling technologies in only 5% of cases—yet… (see
                next slide)
              </p>
            </div>
          </Tween>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
