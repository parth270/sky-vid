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
      duration={0.5}
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

const ReferenceContainer = ({ title, para, src, trans }) => {
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
      duration={0.5}
    >
      <div className="w-[22%] ">
        <div className="w-[140px] h-[140px]">
          {src && <img src={src} alt="" />}
        </div>
        <h3 className="text-[20px] font-bold fckin">{title}</h3>
        <p className="text-[14px] font-medium fckin">{para}</p>
      </div>
    </Tween>
  );
};

const HfsHorizons = ({ dropdown, trans }) => {
  return (
    <>
      <Title title="Sources of Data" width={100} trans={trans} />
      <div className="w-[100%] min-h-[100px]  px-[4%] mt-[30px]">
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
          <p className="text-[23px] font-medium text-[#000]">
            This report relied on myriad data sources to support our methodology
            and help HFS obtain a well-rounded perspective on the metaverse
            services capabilities of the providers covered in our study. Sources
            are as follows:
          </p>
        </Tween>
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
            trans={trans}
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
            trans={trans}
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
            trans={trans}
          />
          <ReferenceContainer
            title="Other data sources"
            para={` Public information, such as  press releases and web sites.  Ongoing interactions, briefings, virtual events,
            etc., with in-scope vendors
            and their clients and partners.
          
          `}
            trans={trans}
          />
        </div>
      </div>
    </>
  );
};

export default HfsHorizons;
