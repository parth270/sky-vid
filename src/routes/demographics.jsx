import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const DemographicsPage = React.lazy(() => import("../views/Demographics.jsx"));

const Demographics = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DemographicsPage />
    </Suspense>
  );
};

export default Demographics