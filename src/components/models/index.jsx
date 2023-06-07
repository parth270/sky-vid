import React from "react";
import { useSelector } from "react-redux";
import Introduction from "./introduction/Introduction";

const ModelsContainer = () => {
  const curr = useSelector((state) => state.model.curr);
  return <>{curr === 0 && <Introduction />}</>;
};

export default ModelsContainer;
