import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/three";

const Loader = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoading(true));
    return () => {
      dispatch(setLoading(false));
    };
  });

  return <></>;
};

export default Loader;
