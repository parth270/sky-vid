import React from "react";
import HomeLayout from "../layouts/Home";
import SkyboxContainer from "../components/skyboxContainer";
import ModelsContainer from "../components/models";

const Home = () => {

  return (
    <HomeLayout>
      <SkyboxContainer>
        <ModelsContainer  />
      </SkyboxContainer>
    </HomeLayout>
  );
};

export default Home;
