import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/three";

const Login = ({ children }) => {
  const [input, setInput] = useState("");
  const [login, setLogin] = useState(false);

  React.useEffect(() => {
    const item = localStorage.getItem("logg");
    console.log(item);
    if (item) {
      setLogin(true);
    }
  }, []);

  function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const dispatch = useDispatch();

  return (
    <>
      {!login ? (
        <div
          className="w-[100%] bg-[#fff] flex items-center flex-col justify-center left-0 h-[100vh]"
          style={{
            zIndex: 999999999999999999,
          }}
        >
          <div className="">
            <img
              src="/logo-1.svg"
              className=" w-[400px] h-[200px] object-cover p-[30px]"
              alt=""
            />
            <p className="text-[16px] font-bold font-mono">
              Please Provide your email:
            </p>
            <input
              className="w-[100%] mt-[4px] px-[10px] font-medium text-[#000] border-[2px] rounded-sm h-[40px] border-[#000] outline-none"
              type="email"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              name=""
              id=""
            />
            <button
              className="w-[100%] h-[50px] rounded-sm bg-[#000] font-medium text-[#fff] mt-[20px]"
              onClick={() => {
                if (isEmail(input)) {
                  localStorage.setItem("logg", true);
                  dispatch(setLoading(true));
                  setTimeout(() => {
                    setLogin(true);
                  }, 1700);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Login;
