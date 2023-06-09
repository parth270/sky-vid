import React from "react";
import { Tween } from "react-gsap";

const ListContainer = ({ children }) => {
  return <ul className="list-outside list-disc mt-[10px]">{children}</ul>;
};

const ListChild = ({ children }) => {
  return (
    <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};
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
      <h1 className="w-[100%]  px-[5%] min-h-[70px] text-[40px] fckin text-[#535E6F]">
        {title}
        <div
          className=" h-[2px] bg-[#535e65]"
          style={{ width: `${width}%` }}
        ></div>
      </h1>
    </Tween>
  );
};
{
  /* <div className="w-[100%] overflow-y-auto scroll-hidden h-[92%]  px-[5%] "> */
}

const SubData1 = ({ dropdown, trans, close }) => {
  return (
    <div className="w-[100%] h-[100vh] pt-[150px] absolute z-50 flex items-center justify-center top-0 ">
      <div className=" flex flex-col pb-[30px] px-[5%] pt-[20px] overflow-hidden  scroll-hidden w-[100%] h-[100%] bg-[#ffffff90] backdrop-blur-lg rounded-[20px]">
        <img
          src="/cross.svg"
          className="absolute top-[10px] right-[100px] w-[24px] h-[24px] cursor-pointer z-50"
          alt=""
          onClick={() => {
            close();
          }}
        />
        <Title
          title="Horizon 3—New sources of value "
          trans={trans}
          width={100}
        />
        <div className="w-[100%] px-[5%] overflow-y-auto scroll-hidden h-[92%]  ">
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
            <p className="text-[18px] mt-[10px] text-[#000] fckin tracking-wide font-bold">
              Horizon 2 +
            </p>
            <p className="text-[18px]  mt-[20px] text-[#000] fckin tracking-wide font-medium">
              Ability to drive OneEcosystem approach by finding completely new
              sources of value
            </p>
            <p className="text-[18px] mt-[10px] text-[#000] fckin tracking-wide font-medium">
              • Strategy and execution capabilities at scale
              <br />
              • Well-rounded capabilities across all value creation levers:
              talent, domain, technology, data, and change <br />• Partnerships
              on emerging technologies that support the metaverse e.g., Web3,
              dApps and DAOs, quantum <br /> • Driving co-creation with clients
              and ecosystem partners <br /> • Referenceable and satisfied
              clients driving new business models on the basis of the
              partnership
            </p>
          </Tween>
        </div>
      </div>
    </div>
  );
};

export default SubData1;
