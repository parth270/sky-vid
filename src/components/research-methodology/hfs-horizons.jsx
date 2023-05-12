import React from "react";

const ListContainer = ({ children }) => {
  return (
    <ul className="list-outside list-disc mt-[10px] p-[15px]">{children}</ul>
  );
};

const ListChild = ({ children }) => {
  return (
    <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const ReferenceContainer = ({ title, para, src }) => {
  return (
    <div className="w-[22%] ">
      <div className="w-[140px] h-[140px]">
        {src && <img src={src} alt="" />}
      </div>
      <h3 className="text-[20px] font-bold fckin">{title}</h3>
      <p className="text-[14px] font-medium fckin">{para}</p>
    </div>
  );
};

const HfsHorizons = ({ dropdown }) => {
  return (
    <>
      <h1 className=" fckin text-[#386179] text-[40px] font-medium border-l-[10px] border-[#f17238] h-[100px] flex items-center pl-[5%]">
        Sources of data
      </h1>

      {dropdown}
      <div className="w-[100%] min-h-[100px]  px-[4%] mt-[30px]">
        <p className="text-[23px] font-medium text-[#000]">
          This report relied on myriad data sources to support our methodology
          and help HFS obtain a well-rounded perspective on the metaverse
          services capabilities of the providers covered in our study. Sources
          are as follows:
        </p>
        <div className="w-[100%] flex justify-between mt-[40px]">
          <ReferenceContainer
            title={"RFIs and briefings"}
            para={`Each participating vendor
                    prepared and presented a
                    detailed briefing responding to
                    specific questions provided by
                    HFS. They also responded to
                    brief but specific data-point
                    requests for information.`}
          />
          <ReferenceContainer
            title={"Reference checks"}
            para={`    We conducted reference
                    checks with active clients of
                    the study participants via
                    phone-based interviews and/or
                    detailed surveys. We also
                    sought references from
                    partners and, where available,
                    employees.`}
          />
          <ReferenceContainer
            title={`HFS vendor ratings`}
            para={`Each year, HFS fields multiple
                demand-side surveys in which
                we include detailed vendor rating
                questions. For this study, we
                leveraged our fresh from the field
                HFS Pulse Study data featuring
                900+ inputs across Global 2000
                enterprise`}
          />
          <ReferenceContainer
            title="Other data sources"
            para={` Public information, such as  press releases and web sites.  Ongoing interactions, briefings, virtual events,
            etc., with in-scope vendors
            and their clients and partners.
          
          `}
          />
        </div>
      </div>
    </>
  );
};

export default HfsHorizons;
