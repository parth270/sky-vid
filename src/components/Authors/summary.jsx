import React, { useState } from "react";

const Author = ({ img, name, designation, email, content }) => {
  return (
    <div className="w-[45%]">
      <div className="w-[100%] h-[100px] bg-[#ceccd3] flex">
        <div className="w-[100px] h-[100px] bg-[#000] shrink-0">
          {img && <img alt="" src={img} />}
        </div>
        <div className="py-[10px] px-[20px] flex flex-col ">
          <h2 className="text-[16px] fckin font-bold tracking-wide text-[#723c82]">
            {name}
          </h2>
          <h3 className="text-[16px] fckin font-bold tracking-wide text-[#000]">
            {designation}
          </h3>
          <h4 className="text-[16px] fckin font-bold tracking-wide text-[#386179] underline">
            {email}
          </h4>
        </div>
      </div>
      {content.map((item, i) => {
        return (
          <h3 className="text-[16px] mt-[20px] fckin font-bold tracking-wide text-[#000]">
            {item}
          </h3>
        );
      })}
    </div>
  );
};

const AssesmentPage = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        HFS Research authors
      </h1>
      {dropdown}
      <div className="w-[100%] min-h-[100px] flex justify-between px-[5%] mt-[30px]">
        <Author
          name="Phil Fersht"
          designation={"CEO and Chief Analyst"}
          email="phil.fersht@hfsresearch.com"
          content={[
            `Phil Fersht is widely recognized as the world’s leading independent
            analyst focused on the alignment of business operations and technology,
            spanning more than two decades. He has a global reputation for calling
            out the big trends, being unafraid to share his honest views, and driving a
            narrative on the technology and business services industries that shape
            many leadership decisions. 
            `,
            `His reputation drove him to establish HFS Research in 2010. Fersht
            coined the term “OneOffice” in 2016 to describe HFS Research’s vision for
            future business operations amidst the impact of cloud, automation, AI, and
            disruptive digital business models`,
          ]}
        />
        <Author
          name="David Cushman"
          designation={"Executive Research Leader"}
          email="david.cushman@hfsresearch.com"
          content={[
            `David Cushman is our strategic lead for Metaverse and Web3, aligning
            closely with his research in Emerging Technology. He is also deeply
            engaged in research into Employee Experience, and leads our HFS Hot
            Vendors program.
            `,
            `Experienced in start-up, scale-up and large-scale digital transformation
            programs, he has led digital development at the UK’s fastest-growing
            media company, founded and grown digital consultancies across Europe
            and worked with world-class companies as a director in digital strategy
            advisory at a tier-1 services provider.`,
            `He is the author of The 10 Principles of Open Business
            (Palgrave-Macmillan, 2014).`,
          ]}
        />
      </div>
    </>
  );
};

export default AssesmentPage;
