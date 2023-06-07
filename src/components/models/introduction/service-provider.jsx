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

const Title = ({ title, width }) => {
  return (
    <h1 className="w-[100%]  px-[5%] min-h-[70px] text-[40px] fckin text-[#535E6F]">
      {title}
      <div
        className=" h-[2px] bg-[#535e65]"
        style={{ width: `${width}%` }}
      ></div>
    </h1>
  );
};
{/* <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] "> */}

const ServiceProvider = ({ dropdown }) => {
  return (
    <>
      <Title
        title="Service providers lag enterprise investment intent"
        width={100}
      />
      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%] ">
        <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
          <p className="text-[18px] text-[#000] fckin tracking-wide font-bold">
            Please specify which enabling technologies your service provider is
            leveraging as part of your relationship
          </p>
        </div>
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/13698083"
        >
          <script src="https://public.flourish.studio/resources/embed.js"></script>
        </div>
        <iframe
          src="https://flo.uri.sh/visualisation/13699315/embed"
          title="Interactive or visual content"
          className="px-[5%] flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          style={{ width: "100%", height: "600px" }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <div className="w-[90%] mx-[5%] min-h-[100px] py-[30px] bg-[#f2f2f2] mb-[30px] px-[5%] mt-[30px]">
          <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
            Enterprise customers say their service provider is leveraging
            metaverseenabling technologies in only 5% of cases—yet… (see next
            slide)
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
