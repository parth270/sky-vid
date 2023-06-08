import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurr } from "../../../services/Model";
import { Profile1, Profile2, Profile3 } from "./profiles";
import Profile from "./profile";
const HorizonProfiles = () => {
  const [curr, setCurr1] = useState(null);
  const [trans, setTrans] = useState(true);
  const [src, setSrc] = useState("");
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
      <img
        src="/cross.svg"
        className="absolute top-[100px] right-[100px] w-[24px] h-[24px] cursor-pointer z-50"
        alt=""
        onClick={() => {
          dispatch(setCurr(null));
        }}
      />
      <Profile1
        change={(e, src) => {
          setTrans(false);
          setTimeout(() => {
            setCurr1(e);
            setSrc(src);
            setTrans(true);
          });
        }}
      />
      <Profile2
        change={(e, src) => {
          setTrans(false);
          setTimeout(() => {
            setCurr1(e);
            setSrc(src);
            setTrans(true);
          });
        }}
      />
      <Profile3
        change={(e, src) => {
          setTrans(false);
          setTimeout(() => {
            setCurr1(e);
            setSrc(src);
            setTrans(true);
          });
        }}
      />
      {curr !== null && (
        <Profile
          id={curr}
          imgClass="h-[100px] max-w-[200px] object-contain mb-[10px]"
          trans={trans}
          src={src}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            });
          }}
        />
      )}
      {/* {curr === 1 && (
        <Profile
          id={curr}
          imgClass="w-[220px]"
          trans={trans}
          src={src}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            });
          }}
        />
      )}
      {curr === 2 && (
        <Profile
        id={curr}
          imgClass="w-[180px]"
          trans={trans}
          src={src}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            });
          }}
        />
      )}
      {curr === 3 && (
        <Profile
        id={curr}
          imgClass="w-[180px]"
          trans={trans}
          src={src}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            });
          }}
        />
      )}
      {curr === 4 && (
        <Profile
        id={curr}
          imgClass="w-[180px]"
          trans={trans}
          src={src}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            });
          }}
        />
      )} */}
    </div>
  );
};

export default React.memo(HorizonProfiles);
