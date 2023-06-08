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

const Pop1 = ({ trans }) => {
  return (
    <>
      <Title title="Introduction" width={100} trans={trans} />
      <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] ">
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
          <p className="font-medium fckin  text-[18px] text-[#000]">
            The term “metaverse” is regularly used as marketing shorthand for
            any virtual space or augmented reality in which users interact with
            digitally generated or enhanced environments and other users, often
            via digital versions of themselves. Enterprises can work with this
            definition to develop better virtualized customer, employee, and
            partner experiences and to upskill in preparation for the needs of
            future customers. We asked providers to also consider the future
            direction of the metaverse—where it becomes an open and
            interoperable driver of an emerging business paradigm disrupted by
            decentralization—and the impact of customer control of their own
            data.{" "}
          </p>
        </Tween>
        <ul className="list-outside list-disc mt-[10px]">
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
            <li className="text-[#000] fckin font-medium mb-[10px]">
              <div>
                The value proposition for metaverse services is moving from a
                “return on learning” toward what HFS describes as value across
                three horizons:
              </div>
              <div className="flex flex-col mt-[10px]">
                <span>
                  <span className="text-[#000] font-bold text-[17px]">
                    {" "}
                    ⎯Horizon 1:
                  </span>{" "}
                  Driving business outcomes, cost reduction, and productivity
                  improvements
                </span>
                <span>
                  ⎯Horizon 2: Horizon 1 + improving customer experience (CX) and
                  employee experience (EX) at the enterprise level
                </span>
                <span>
                  ⎯Horizon 3: Horizon 2 + unearthing new sources of value to
                  drive growth and manage risks at the ecosystem level
                </span>
              </div>
            </li>
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
            <li className="text-[#000] fckin font-medium mb-[10px]">
              This inaugural HFS Horizons report for metaverse services examines
              the capabilities of 18 services providers and management
              consultancies to paint the supplier landscape across the three HFS
              Horizons.
            </li>
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
            <li className="text-[#000] fckin font-medium mb-[10px]">
              We assessed the service providers across a defined series of
              criteria:
              <div className="flex flex-col mt-[10px]">
                <span>⎯The Why: Value proposition</span>
                <span>⎯The What: Execution and innovation capabilities</span>
                <span>⎯The How: Go-to-market strategy</span>
                <span>⎯The So What: Market and client impact</span>
              </div>
            </li>
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
            <li className="text-[#000] fckin font-medium mb-[10px]">
              This report also includes detailed profiles of each service
              provider, outlining their placement, provider facts, and detailed
              strengths and opportunities.
            </li>
          </Tween>
        </ul>
      </div>
    </>
  );
};

export default Pop1;
