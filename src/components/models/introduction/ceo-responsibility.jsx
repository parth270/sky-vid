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

const CeoResponsibility = ({ dropdown }) => {
  return (
    <>
      <Title
        title={"CEOs have yet to wake up to the bigger picture on metaverse"}
        width={100}
      />
      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%] pb-[100px] px-[5%] ">
        <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
          <p className="text-[18px] text-[#000] fckin tracking-wide font-bold">
            Q. Rank the top three technologies your organization expects to
            invest the most in over the next 12 to 18 months
          </p>
          <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
            Total percentage of rank 1, 2, or 3 responses
          </p>
        </div>
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/13698083"
        >
          <script src="https://public.flourish.studio/resources/embed.js"></script>
        </div>
        <iframe
          src="https://flo.uri.sh/visualisation/13698083/embed"
          title="Interactive or visual content"
          className=" px-[5%] flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          style={{ width: "100%", height: "600px" }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <div className="w-[90%] mx-[5%] min-h-[100px] py-[30px] bg-[#f2f2f2] mb-[30px] px-[5%] mt-[30px]">
          <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
            CEOs are more convinced by the nearer-term and often simpler use
            cases and benefits of blockchain and AR–VR than they are by the need
            to place their bets on Web3 and metaverse.
          </p>
          <p className="text-[18px] my-[20px] text-[#000] fckin tracking-wide font-medium">
            Blockchain and AR–VR are technology choices while Web3–metaverse
            requires buying into the process, enterprise, and cross-ecosystem
            benefits on offer.
          </p>
          <p className="text-[18px] text-[#000] fckin tracking-wide font-medium">
            Our data shows CIOs and CTOs are marginally more likely to see the
            bigger picture than their bosses. But just 14% and 15% are ranking
            Web3 and metaverse in their top three investments in 2023.
          </p>
        </div>
      </div>
    </>
  );
};

export default CeoResponsibility;