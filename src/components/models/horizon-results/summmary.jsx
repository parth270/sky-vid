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

const ListContainer = ({ children }) => {
  return <ul className="list-outside list-disc mt-[10px]">{children}</ul>;
};

const ListChild = ({ children, trans }) => {
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
      <li className="text-[#000] fckin font-medium mb-[10px]">{children}</li>
    </Tween>
  );
};

const LowerList = ({ children }) => {
  return <div className="flex flex-col mt-[10px]">{children}</div>;
};

const Assessment = ({ dropdown, trans }) => {
  return (
    <>
      <Title
        title={" Summary of providers assessed in this report"}
        width={100}
        trans={trans}
      />
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
        <div className="w-[100%] h-[100%] flex justify-center">
          <div className="w-[48%] px-[5%] h-[570px] ">
            <div className="w-[100%] h-[40px] flex">
              <div className="bg-[#F0905A] h-[40px] w-[36%] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
                <div className="translate-y-[1px]">
                  Providers
                  <br />
                  (alphabetical order)
                </div>
              </div>
              <div className="bg-[#F0905A] h-[40px] w-[64%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
                <div className="translate-y-[1px]">HFS point of view</div>
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Accenture
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Metaverse as a catalyst for total enterprise reinvention
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Capgemini
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Leading with immersive multi-sensory experiences
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Coforge
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Metaverse as a value maximizer for blockchain and AI
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Cognizant
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Just another toolkit for fixing enterprise problems
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                EY
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Sophisticated, compliance-led, sector-specific,
                strategy-to-launch
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Foundever
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                CX-focused services for metaverse natives and beginners
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Hexaware
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Fast tests delivered with established technology ecosystem
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                IBM
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Infrastructure-led continuum of value, enabling rapid scale
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Infosys
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Deep-tech early mover meeting customers where they are
              </div>
            </div>
          </div>
          <div className="w-[48%] px-[5%] h-[570px] ">
            <div className="w-[100%] h-[40px] flex">
              <div className="bg-[#F0905A] h-[40px] w-[36%] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
                <div className="translate-y-[1px]">
                  Providers
                  <br />
                  (alphabetical order)
                </div>
              </div>
              <div className="bg-[#F0905A] h-[40px] w-[64%] border-l-[1px] border-[#fff] text-[#fff] flex items-center justify-center text-[13px] font-medium fckin">
                <div className="translate-y-[1px]">HFS point of view</div>
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                KPMG
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Managing the real risks of the big problems in virtual worlds
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                LTI Mindtree
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Creative flair meets modular tech focused on collaboration
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Publicis Sapient
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                CX-led approach and enviable self-transformation
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                PWC
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Embedding trust to build safe metaverse solutions
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                RRD
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Content and experience metaverse to help CMOs do business
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                TCS
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                End-to-end capabilities focused on experience 4.0
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Tech Mahindra
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Mature practice with major implementation creds
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                UST
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Pragmatic delivery of fast, value-focused metaverse POCs
              </div>
            </div>
            <div className="w-[100%] h-[45px] border-b-[1px] border-[#ccc] leading-[15px] flex">
              <div className="bg-[#F4f4f4] h-[100%] px-[4px] py-[10px] w-[36%] text-[#444] flex items-center justify-center text-[13px] font-bold fckin">
                Wipro
              </div>
              <div className="bg-[#F4f4f4] h-[100%] px-[10px] p-[10px] w-[64%] border-l-[1px] border-[#fff] text-[#000]  text-[13px] font-medium fckin">
                Comprehensive test-and-learn offers for now and next
              </div>
            </div>
          </div>
        </div>
      </Tween>
    </>
  );
};

export default Assessment;
