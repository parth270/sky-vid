import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurr } from "../../../services/Model";
import Assessment from "./summmary";

const HorizonList = () => {
  const [curr, setCurr1] = useState(0);
  const [trans, setTrans] = useState(true);
  const dispatch = useDispatch();

  return (
    <div
      className="w-[100%] items-center flex flex-col justify-between h-[100vh] absolute pt-[100px]"
      style={{
        zIndex: 99999999,
      }}
    >
      <div className="h-[42px] rounded-[30px] bg-[#f17238]  px-[30px] min-w-[300px] flex items-center justify-center text-[20px] font-medium capitalize text-[#fff] ">
        <span className="translate-y-[1px]">Introduction</span>
      </div>
      <div className="pb-[30px] pt-[20px] overflow-hidden  scroll-hidden w-[1300px] h-[550px] shrink-0 bg-[#ffffff90] backdrop-blur-lg mt-[20px] mb-[10px] rounded-[20px]">
        {/* <div className="w-[100%] flex items-center h-[40px] justify-center absolute top-0 ">
          <img
            onClick={() => {
              if (curr !== 0) {
                setTrans(false);
                setTimeout(() => {
                  setCurr1(curr - 1);
                  setTrans(true);
                }, 600);
              }
            }}
            src="/arrow.svg"
            className="w-[30px] translate-y-[-10px] h-[30px] cursor-pointer"
            alt=""
          />
        </div> */}
        {curr === 0 && <Assessment trans={trans} />}
        <img
          src="/cross.svg"
          className="absolute top-[20px] right-[40px] w-[24px] h-[24px] cursor-pointer z-50"
          alt=""
          onClick={() => {
            dispatch(setCurr(null));
          }}
        />
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center rotate-180 cursor-pointer">
        <img
          src="/arrow.svg"
          onClick={() => {
            // if (curr !== 4) {
            //   setTrans(false);
            //   setTimeout(() => {
            //     setCurr1(curr + 1);
            //     setTrans(true);
            //   }, 600);
            // }
          }}
          className="w-[40px] h-[40px] movingElement "
          alt=""
        />
      </div>
    </div>
  );
};

export default React.memo(HorizonList);
