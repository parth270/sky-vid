import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const ResearchPage = React.lazy(() => import("../views/research-methodology.jsx"));

const Research = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ResearchPage />
    </Suspense>
  );
};

export default Research;
