import React, { useState } from "react";

const AboutUs = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        About HFS
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[5%] mt-[30px]">
        <p className="text-[26px] font-bold fckin">
          Insight. Inspiration. Impact.
        </p>
        <p className="text-[18px] font-bold fckin tracking-wider mt-[20px]">
          HFS is a unique analyst organization that combines deep visionary
          expertise with rapid demand-side analysis of the Global 2000. Its
          outlook for the future is admired across the global technology and
          business operations industries. Its analysts are respected for their
          no-nonsense insights based on demand-side data and engagements with
          industry practitioners.
        </p>
        <p className="text-[18px] font-bold fckin tracking-wider mt-[20px] ">
          HFSResearch introduced the world to terms such as “RPA” (Robotic
          Process Automation) in 2012 and more recently, Digital OneOffice™ and
          OneEcosystem™. The HFS mission is to provide visionary insight into
          the major innovations impacting business operations such as Automation
          and Process Intelligence, Blockchain, the Metaverse and Web3. HFS has
          deep business practices across all key industries, IT and business
          services, sustainability and engineering
        </p>
        <p className="text-[18px] font-bold fckin tracking-wider mt-[20px] ">
          <a
            href="https://www.linkedin.com/company/hfs-research/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://www.linkedin.com/company/hfs-research/
          </a>
        </p>
        <p className="text-[18px] font-bold fckin tracking-wider mt-[20px] ">
          <a
            href="https://www.linkedin.com/company/hfs-research/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://www.hfsresearch.com/
          </a>
        </p>
        <p className="text-[18px] font-bold fckin tracking-wider mt-[20px] ">
          <a
            href="https://www.horsesforsources.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://www.horsesforsources.com/
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutUs;
