import React from "react";

const Author1 = () => {
  return (
    <div className="w-[100%] h-[100%] pt-[20px] pb-[10px] px-[5%] flex">
      <div
        className="w-[25%] pr-[40px]  h-[100%] flex items-center"
        style={{
          borderRight: "4px solid #505e71",
        }}
      >
        <img src="/author-1.png" alt="" />
      </div>
      <div className="w-[75%] h-[100%] px-[30px]">
        <p className="text-[20px] font-medium fckin  mt-[70px] text-[#444]">
          <span className="font-bold"> David Cushman</span> is our strategic
          lead for Metaverse and Web3, aligning closely with his research in
          Emerging Technology. He is also deeply engaged in research into
          Employee Experience, and leads our HFS Hot Vendors program.
        </p>
        <p className="text-[20px] font-medium fckin  mt-[30px] text-[#444]">
          Experienced in start-up, scale-up and large-scale digital
          transformation programs, he has led digital development at the UK’s
          fastest-growing media company, founded and grown digital consultancies
          across Europe and worked with world-class companies as a director in
          digital strategy advisory at a tier-1 services provider.
        </p>ś
        <p className="text-[20px] font-medium fckin text-[#444] mt-[30px]">
          He is the author of The 10 Principles of Open Business
          (Palgrave-Macmillan, 2014).
        </p>
      </div>
    </div>
  );
};

export default Author1;
