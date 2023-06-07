import React, { useState } from "react";
import { Tween } from "react-gsap";

const AboutUs = ({ dropdown, trans }) => {
  return (
    <>
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
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
          <p className="text-[40px] font-bold fckin">
            Insight. Inspiration. Impact.
          </p>
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
          <p className="text-[18px] font-bold fckin tracking-wider mt-[20px]">
            HFS is a unique analyst organization that combines deep visionary
            expertise with rapid demand-side analysis of the Global 2000. Its
            outlook for the future is admired across the global technology and
            business operations industries. Its analysts are respected for their
            no-nonsense insights based on demand-side data and engagements with
            industry practitioners.
          </p>
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
          <p className="text-[18px] font-bold fckin tracking-wider mt-[5px] ">
            HFSResearch introduced the world to terms such as “RPA” (Robotic
            Process Automation) in 2012 and more recently, Digital OneOffice™
            and OneEcosystem™. The HFS mission is to provide visionary insight
            into the major innovations impacting business operations such as
            Automation and Process Intelligence, Blockchain, the Metaverse and
            Web3. HFS has deep business practices across all key industries, IT
            and business services, sustainability and engineering
          </p>
        </Tween>
        <div className="w-[100%] mt-[100px] flex items-center justify-between">
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
            <div className="bg-[#535E6F] text-[#fff] text-[14px] tracking-wide fckin px-[20px] flex items-center w-[300px] h-[70px] rounded-[50px]">
              <img src="/linked.png" className="w-[40px] mr-[10px]" alt="" />
              <a
                href="https://www.linkedin.com/company/hfs-research/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.hfsresearch.com
              </a>
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
            <div className="bg-[#535E6F] text-[#fff] text-[14px] tracking-wide fckin px-[20px] flex items-center w-[300px] h-[70px] rounded-[50px]">
              <img src="/message.png" className="w-[40px] mr-[10px]" alt="" />
              <a
                href="https://www.linkedin.com/company/hfs-research/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @hfsresearch
              </a>
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
            <div className="bg-[#535E6F] text-[#fff] text-[14px] tracking-wide fckin px-[20px] flex items-center w-[300px] h-[70px] rounded-[50px]">
              <img src="/inter.png" className="w-[40px] mr-[10px]" alt="" />
              <a
                href="https://www.horsesforsources.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.horsesforsources.com
              </a>
            </div>
          </Tween>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
