import React from "react";
import { Tween } from "react-gsap";

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
      <h1 className="w-[100%]  px-[5%] h-[70px] text-[40px] fckin text-[#535E6F]">
        {title}
        <div
          className=" h-[2px] bg-[#535e65]"
          style={{ width: `${width}%` }}
        ></div>
      </h1>
    </Tween>
  );
};

const ListContainer = ({ children }) => {
  return <ul className="list-outside list-disc mt-[10px]">{children}</ul>;
};

const ListChild = ({ children, trans }) => {
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
      <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
    </Tween>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const Hypothesis = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title={"Hypothesis, inclusion criteria, and assessment"}
        width={100}
        trans={trans}
      />

      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <ListContainer>
          <ListChild trans={trans}>
            The potential for metaverse in the enterprise is accelerating apace.
            How effectively are enterprises uncovering its potential across
            their customers and employees by partnering with service providers
            and consultants?
          </ListChild>
          <ListChild trans={trans}>
            In answering this, we selected 18 leading service providers and
            consultants offering metaverse services, based on revenue,
            investment, declared strategy, and market momentum.
          </ListChild>
          <ListChild trans={trans}>
            As further detailed on page 16, we assessed each provider’s value
            proposition (the Why?), execution and innovation criteria (the
            What?), go-to-market strategy (the How?), and market impact (the So
            What?).
          </ListChild>
          <ListChild trans={trans}>
            We assessed the combination of technology and services each provider
            is developing, applying, or partnering to deliver, many of which are
            captured on pages 17 and 18.
          </ListChild>
          <ListChild trans={trans}>
            Page 19 lists our definitions of Horizon 1, 2, and 3 in the context
            of metaverse services and what we are looking for from qualifying
            vendors.
          </ListChild>
        </ListContainer>
      </div>
    </>
  );
};

export default Hypothesis;
