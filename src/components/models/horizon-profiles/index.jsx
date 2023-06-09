import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurr } from "../../../services/Model";
import { Profile1, Profile2, Profile3 } from "./profiles";
import Profile from "./profile";
import SubData1 from "./sub-data-1";
import SubData2 from "./sub-data-2";
import SubData3 from "./sub-data-3";
const HorizonProfiles = () => {
  const [curr, setCurr1] = useState(null);
  const [newCurr, setNewCurr] = useState(null);
  const [trans, setTrans] = useState(true);
  const [src, setSrc] = useState("");
  const dispatch = useDispatch();
  const srces = [
    "/profiles/accenture.png",
    "/profiles/kmpg.png",
    "/profiles/EY.png",
    "/profiles/public-sapi.png",
    "/profiles/IBM.png",
    "/profiles/tech-mahindra.png",
    "/profiles/infoysis.png",
    "/profiles/wipro.png",
    "/profiles/hexaware.png",
    "/profiles/capgemini.png",
    "/profiles/pwx.png",
    "/profiles/coforge.png",
    "/profiles/rd.png",
    "/profiles/cognizant.png",
    "/profiles/tcs.png",
    "/profiles/foundever.png",
    "/profiles/ust.png",
    "/profiles/ltimindtree.png",
  ];

  const ids = [0, 1, 2, 3, 4, 5, 6, 7, 14, 8, 11, 9, 12, 10, 13, 15, 17, 16];

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
      <div className="w-[100%] h-[100%] flex items-center justify-center flex-col">
        <Profile1
          doIt={() => {
            setNewCurr(0);
          }}
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
          doIt={() => {
            setNewCurr(1);
          }}
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
          doIt={() => {
            setNewCurr(2);
          }}
          change={(e, src) => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(e);
              setSrc(src);
              setTrans(true);
            });
          }}
        />
      </div>
      {newCurr === 0 && (
        <SubData1
          trans={trans}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setNewCurr(null);
              setTrans(true);
            }, 600);
          }}
        />
      )}
      {newCurr === 1 && (
        <SubData2
          trans={trans}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setNewCurr(null);
              setTrans(true);
            }, 600);
          }}
        />
      )}
      {newCurr === 2 && (
        <SubData3
          trans={trans}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setNewCurr(null);
              setTrans(true);
            }, 600);
          }}
        />
      )}
      {curr !== null && (
        <Profile
          id={curr}
          curr={ids.indexOf(curr)}
          imgClass="h-[100px] max-w-[200px] object-contain mb-[10px]"
          trans={trans}
          src={src}
          setCurr={(e) => {
            console.log(e);
            if (Number(e) !== 17) {
              setTrans(false);
              setTimeout(() => {
                setCurr1(ids[e + 1]);
                setSrc(srces[e + 1]);
                setTrans(true);
              }, 600);
            }
          }}
          setCurr1={(e) => {
            console.log(e);

            if (Number(e) !== 0) {
              setTrans(false);
              setTimeout(() => {
                setCurr1(ids[e - 1]);
                setSrc(srces[e - 1]);
                setTrans(true);
              }, 600);
            }
          }}
          close={() => {
            setTrans(false);
            setTimeout(() => {
              setCurr1(null);
              setSrc("");
              setTrans(true);
            }, 600);
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
