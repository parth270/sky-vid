import React, { Suspense } from "react";
import Loader from "../utils/Loader";

const ProfilesPage = React.lazy(() => import("../views/Profiles.jsx"));

const Profiles = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ProfilesPage />
    </Suspense>
  );
};

export default Profiles;
