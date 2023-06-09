import React from "react";

const Author0 = ({trans}) => {
  return (
    <div className="w-[100%] h-[100%] pt-[20px] pb-[10px] px-[5%] flex">
      <div
        className="w-[25%] pr-[40px]  h-[100%] flex items-center"
        style={{
          borderRight: "4px solid #505e71",
        }}
      >

        <img src="/author-2.png" className="w-[100%]" alt="" />
      </div>
      <div className="w-[75%] h-[100%] px-[30px]">
        <p className="text-[20px] font-medium fckin  mt-[90px] text-[#444]">
          <span className="font-bold">Phil Fersht </span>is widely recognized as
          the world’s leading independent analyst focused on the alignment of
          business operations and technology, spanning more than two decades. He
          has a global reputation for calling out the big trends, being unafraid
          to share his honest views, and driving a narrative on the technology
          and business services industries that shape many leadership decisions.
        </p>
        <p className="text-[20px] font-medium fckin  mt-[30px] text-[#444]">
          His reputation drove him to establish HFS Research in 2010. Fersht
          coined the term “OneOffice” in 2016 to describe HFS Research’s vision
          for future business operations amidst the impact of cloud, automation,
          AI, and disruptive digital business models.
        </p>
      </div>
    </div>
  );
};

export default Author0;
