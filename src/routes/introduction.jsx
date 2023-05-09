import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const IntroductionPage = React.lazy(() => import("../views/introduction.jsx"));

const Introduction = () => {
  return (
    <Suspense fallback={<Loader />}>
      <IntroductionPage />
    </Suspense>
  );
};

export default Introduction;
