import React from "react";
import { useSelector } from "react-redux";
import Introduction from "./introduction/Introduction";
import ResearchMethedology from "./research-methedology";
import HorizonList from "./horizon-results";
import Authors from "./authors";
import Demographics from "./demographics";
import HorizonProfiles from "./horizon-profiles";

const ModelsContainer = () => {
  const curr = useSelector((state) => state.model.curr);
  return (
    <>
      {curr === 0 && <Introduction />}
      {curr === 1 && <ResearchMethedology />}
      {curr === 2 && <HorizonList />}
      {curr === 3 && <HorizonProfiles />}
      {curr === 4 && <Authors />}
      {curr === 5 && <Demographics />}
    </>
  );
};

export default ModelsContainer;
