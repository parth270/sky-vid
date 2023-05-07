import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const HorizonResultsPage = React.lazy(() => import("../views/horizon-results"));

const HorizonResults = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HorizonResultsPage />
    </Suspense>
  );
};

export default HorizonResults;
