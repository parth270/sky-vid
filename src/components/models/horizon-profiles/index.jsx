import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurr } from "../../../services/Model";
import { Profile1, Profile2, Profile3 } from "./profiles";
const HorizonProfiles = () => {
  const [curr, setCurr1] = useState(0);
  const [trans, setTrans] = useState(true);
  const dispatch = useDispatch();

  return (
    <div
      className="w-[100%] items-center flex flex-col  h-[100vh] absolute pt-[100px]"
      style={{
        zIndex: 99999999,
      }}
    >
      <div className="h-[42px] rounded-[30px] bg-[#f17238]  px-[30px] min-w-[300px] flex items-center justify-center text-[20px] font-medium capitalize text-[#fff] ">
        <span className="translate-y-[1px]">HorizonProfiles</span>
      </div>
      <Profile1
        change={(e) => {
          setTrans(false);
          setTimeout(() => {
            setCurr(e);
            setTrans(true);
          });
        }}
      />
      <Profile2
        change={(e) => {
          setTrans(false);
          setTimeout(() => {
            setCurr(e);
            setTrans(true);
          });
        }}
      />
      <Profile3
        change={(e) => {
          setTrans(false);
          setTimeout(() => {
            setCurr(e);
            setTrans(true);
          });
        }}
      />
      {/* <div className="pb-[30px] pt-[20px] overflow-hidden  scroll-hidden w-[1300px] h-[550px] shrink-0 bg-[#ffffff90] backdrop-blur-lg mt-[20px] mb-[10px] rounded-[20px]">
        <div className="w-[100%] flex items-center h-[40px] justify-center absolute top-0 ">
         
        </div>
        <img
          src="/cross.svg"
          className="absolute top-[20px] right-[40px] w-[24px] h-[24px] cursor-pointer z-50"
          alt=""
          onClick={() => {
            dispatch(setCurr(null));
          }}
        />
      </div> */}
    </div>
  );
};

export default React.memo(HorizonProfiles);
