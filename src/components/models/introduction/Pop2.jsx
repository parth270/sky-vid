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
    <h1 className="w-[100%]  px-[5%] h-[70px] text-[40px] fckin text-[#535E6F]">
      {title}
      <div
        className=" h-[2px] bg-[#535e65]"
        style={{ width: `${width}%` }}
      ></div>
    </h1>
  );
};

const Pop2 = () => {
  return (
    <>
      <Title title="Executive summary" width={100} />
      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] ss">
        <ListContainer>
          <ListChild>
            An estimated $1 trillion metaverse economy opportunity awaits – but
            so far, HFS estimates the 18 service providers in this report are
            only capturing around $2.45 billion of it. To start closing the gap,
            2023 must be a big year for proving value. We expect metaverse
            services to come under firm pressure to deliver real ROI in an
            increasing majority of enterprise use cases. Enterprises are ready
            to invest, with 47% committing to 10%–20% growth in metaverse
            investments over the next two years and a further 40% planning to
            add 5%–10% to metaverse budgets. To match this, they need service
            providers to upskill and scale up.
          </ListChild>
          <ListChild>
            Commitment to the metaverse is not evenly distributed. We found many
            examples of service providers relabeling or reorganizing existing
            functions under a metaverse umbrella rather than adding significant
            new investment. This is true of personnel and revenue recognition.
            Additional investment is easier to identify in new offerings,
            roadmaps, and partner ecosystems.
          </ListChild>
          <ListChild>
            Enterprises should push their providers for the application of
            robust value frameworks to focus on outcomes. Many of the leading
            service providers in this report have them readily available. There
            is no need to experiment outside of these frameworks. We see the
            shortest routes to value through CX, EX and, in the industrial
            metaverse, through digital twins—impacting training, product and
            service development, and the supply chain. Digital twins represent
            our best-yet data visualization technology.
          </ListChild>
          <ListChild>
            The best near- and mid-term opportunities come from adding metaverse
            capabilities and approaches rather than wholly replacing old ways of
            working, living, buying, and making with the new. As with most new
            technologies, the opportunity is in combining the best available
            solutions to meet specific needs.
          </ListChild>
          <ListChild>
            Many service providers are compiling technology stacks in reaction
            to customer need. While they stick to this, it is hard to see how
            they can envisage and therefore shape a future state to lead their
            clients toward. Customers are looking for a leader in unfamiliar
            territory
          </ListChild>
          <ListChild>
            The metaverse of VR and AR and immersive experience is being widely
            embraced by both enterprises and service providers; the
            decentralized, datachallenging reality of Web3, less so. The most
            mature offerings embrace both. Service providers must be braver in
            outlining both the threats and the opportunities associated with the
            Web3-powered, decentralized, and interoperable version of the
            metaverse as it looms ever larger.
          </ListChild>
          <ListChild>
            The most mature metaverse services we identified in this report - in
            EX, CX and digital twins - are coming out of the innovation lab to
            be integrated into implementable enterprise-scale elements of core
            offerings.
          </ListChild>
        </ListContainer>
      </div>
    </>
  );
};

export default Pop2;
