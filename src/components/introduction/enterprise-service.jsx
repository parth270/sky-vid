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

const EnterpriseService = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Enterprises need service providers to step up
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <p className="text-[18px] text-[#000] fckin tracking-wide font-bold">
          Using a 1 to 10 scale, where 1 is non-existent and 10 is the best
          you've seen, please rate vendors’ expertise in the following enabling
          technologies
        </p>
      </div>
      <div
        class="flourish-embed flourish-chart"
        data-src="visualisation/13698083"
      >
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </div>
      <iframe
        src="https://flo.uri.sh/visualisation/13699177/embed"
        title="Interactive or visual content"
        className="px-[5%] flourish-embed-iframe"
        frameborder="0"
        scrolling="no"
        style={{ width: "100%", height: "200px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      <div className="w-[90%] mx-[5%] min-h-[100px] py-[30px] bg-[#f2f2f2] mb-[30px] px-[5%] mt-[30px]">
        <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
          On average, enterprises are only willing to score their service
          provider partners 6.6/10 for metaverse expertise. One-fifth of those
          surveyed score their provider less than 5/10. The average rises to
          7.2/10 for augmented and virtual reality. The related world of Web3
          does better, with 44% of enterprises scoring their service provider
          8/10 and above for their expertise.
        </p>
        <p className="text-[18px] my-[20px] text-[#000] fckin tracking-wide font-medium">
          For comparison, enterprises score service providers an average of 7.7
          for process automation and 8.2 for analytics. It’s clear enterprises
          are less convinced by the capabilities available from service
          providers in the nascent area of metaverse services compared to those
          in which service providers have a longer track record. Enterprises
          leaders need convincing with success beyond the ideation session.
        </p>
      </div>
    </>
  );
};

export default EnterpriseService;
