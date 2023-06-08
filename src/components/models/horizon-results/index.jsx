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
      <div className=" pt-[60px] overflow-hidden  scroll-hidden w-[100%] h-[100%]  relative bg-[#ffffff90] ">
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
        <img
          src="/cross.svg"
          className="absolute top-[40px] right-[100px] w-[24px] h-[24px] cursor-pointer z-50"
          alt=""
          onClick={() => {
            dispatch(setCurr(null));
          }}
        />
        {curr === 0 && <Assessment trans={trans} />}
      </div>
      <div className="w-[100%] h-[100px] absolute bottom-0 z-50 flex items-center justify-center rotate-180 cursor-pointer">
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
