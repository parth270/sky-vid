import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const AuthorsPage = React.lazy(() => import("../views/Authors.jsx"));

const Authors = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthorsPage />
    </Suspense>
  );
};

export default Authors