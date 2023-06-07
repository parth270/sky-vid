import React from "react";
import { useSelector } from "react-redux";
import Introduction from "./introduction/Introduction";
import ResearchMethedology from "./research-methedology";
import HorizonList from "./horizon-results";

const ModelsContainer = () => {
  const curr = useSelector((state) => state.model.curr);
  return (
    <>
      {curr === 0 && <Introduction />}
      {curr === 1 && <ResearchMethedology />}
      {curr === 2 && <HorizonList />}
    </>
  );
};

export default ModelsContainer;
