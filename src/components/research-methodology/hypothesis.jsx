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

const MetaverseBiggest = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Hypothesis, inclusion criteria, and assessment
      </h1>

      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <ListContainer>
          <ListChild>
            The potential for metaverse in the enterprise is accelerating apace.
            How effectively are enterprises uncovering its potential across
            their customers and employees by partnering with service providers
            and consultants?
          </ListChild>
          <ListChild>
            In answering this, we selected 18 leading service providers and
            consultants offering metaverse services, based on revenue,
            investment, declared strategy, and market momentum.
          </ListChild>
          <ListChild>
            As further detailed on page 16, we assessed each provider’s value
            proposition (the Why?), execution and innovation criteria (the
            What?), go-to-market strategy (the How?), and market impact (the So
            What?).
          </ListChild>
          <ListChild>
            We assessed the combination of technology and services each provider
            is developing, applying, or partnering to deliver, many of which are
            captured on pages 17 and 18.
          </ListChild>
          <ListChild>
            Page 19 lists our definitions of Horizon 1, 2, and 3 in the context
            of metaverse services and what we are looking for from qualifying
            vendors.
          </ListChild>
        </ListContainer>
      </div>
    </>
  );
};

export default MetaverseBiggest;
