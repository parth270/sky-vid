import React from "react";
import { Tween } from "react-gsap";

const Table = ({trans}) => {
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
    <div className="w-[100%] h-[570px] ">
      <div className="w-[100%] h-[40px] flex">
        <div className="bg-[#F0905A] h-[40px] w-[17%] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
          <div className="translate-y-[1px]">Assessment dimension</div>
        </div>
        <div className="bg-[#F0905A] h-[40px] w-[32%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
          <div className="translate-y-[1px]">Assessment sub-dimension</div>
        </div>
        <div className="bg-[#F0905A] h-[40px] w-[17%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
          <div className="translate-y-[1px]">Horizon 1 service providers</div>
        </div>
        <div className="bg-[#F0905A] h-[40px] w-[17%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
          <div className="translate-y-[1px]">Horizon 2 service providers</div>
        </div>
        <div className="bg-[#F0905A] h-[40px] w-[17%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
          <div className="translate-y-[1px]">Horizon 3 service providers</div>
        </div>
      </div>
      <div className="w-[100%] h-[100px] flex">
        <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[17%] text-[#444] text-[13px] font-bold fckin">
          Value proposition:
          <br />
          <br />
          <br />
          The Why? (25%)
        </div>
        <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[32%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • How do you define “metaverse”?
          <br />
          • Strategy and vision for metaverse and nature of outcomes
          <br />• Why did enterprises choose to work with you on metaverse?
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          Ability to drive functional digital transformation by driving cost
          reduction, speed, and efficiency
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          Horizon 1 + Ability to drive OneOffice mindset with real
          enterprise-level business outcomes
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000] text-[13px] font-medium fckin">
          Horizon 2 + Ability to drive OneEcosystem approach by finding
          completely new sources of value
        </div>
      </div>
      <div className="w-[100%] h-[250px] flex">
        <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[17%] text-[#444] text-[13px] font-bold fckin">
          Execution and innovation capabilities:
          <br />
          <br />
          The What? (25%)
        </div>
        <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[32%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Technology roadmap for the metaverse
          <br />• How are you developing ecosystem partners for your roadmap?
          <br />
          Where are you investing to deliver on your metaverse experience (your
          own employees’ experiences, your customers’ and your customers’
          employees’ experiences, infrastructure, and labs?)
          <br />• How are you developing or training your staff to exploit the •
          metaverse opportunity? Strategies for junior and senior talent?
          Specific hiring programs for metaverse capabilities?
          <br />• How are you developing the infrastructure to help clients
          define business outcomes and their future roadmap?
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Primarily focused on implementation
          <br />
          • Offshore-focused with strong technical skills and partnerships with
          1-2 hyperscalers
          <br />
          • Demonstrate robust fundamentals of cloud-transformation with clients
          <br />• Partnerships with foundational technologies supporting the
          metaverse (e.g., IoT, blockchain, NFTs, 5G, AR, VR, digital twins)
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Ability to support clients’ metaverse roadmaps, aligning customer
          and employee experience
          <br /> • Ability to create metaverse experiences with own employees
          <br /> • Horizon 1 + global capabilities with strong consulting skills
          and partnerships with metaverse tech specialists covering DeFi,
          tokenization, geospacing tech
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000] text-[13px] font-medium fckin">
          • Strategy and execution capabilities at scale
          <br /> • Horizon 2 + well-rounded capabilities across all value
          creation levers: talent, domain, technology, data, and change
          <br /> • Partnerships on emerging technologies that support the
          metaverse, e.g., Web3, dApps and DAOs, quantum
        </div>
      </div>
      <div className="w-[100%] h-[82px] flex">
        <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[17%] text-[#444] text-[13px] font-bold fckin">
          Go-to-market strategy:
          <br />
          <br />
          The How? (25%)
        </div>
        <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[32%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • What are you actually selling with the metaverse?
          <br />
          • What industries are you targeting? Investing in for 2023?
          <br />• New value sources from metaverse partner ecosystem
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          Robust delivery of metaverse technologies
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Horizon 1+
          <br />• Proven and leading-edge proprietary tools, assets, and
          frameworks
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000] text-[13px] font-medium fckin">
          • Horizon 2+ • Driving co-creation with clients and ecosystem partner
        </div>
      </div>
      <div className="w-[100%] h-[100px] flex">
        <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[17%] text-[#444] text-[13px] font-bold fckin">
          Market impact:
          <br />
          <br />
          The So What? (25%)
        </div>
        <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[32%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • How are you organized to develop your metaverse offerings and
          capabilities? Centralized, regional, or by vertical?
          <br />
          • Early- and mid-stage client experiences with metaverse
          <br />• Voice of the customer
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Referenceable and satisfied clients for ability to execute
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
          • Horizon 1+
          <br />• Referenceable and satisfied clients for ability to innovate
        </div>
        <div className="bg-[#F4f4f4] h-[100%] p-[10px] w-[17%] border-l-[1px] border-[#fff] text-[#000] text-[11px] font-medium fckin">
          • Horizon 2 +
          <br />• Referenceable and satisfied clients driving new business
          models on the basis of the partnership
        </div>
      </div>
    </div>
    </Tween>
  );
};

export default Table;
