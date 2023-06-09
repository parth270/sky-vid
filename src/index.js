import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./services/store";
import { Provider } from "react-redux";
import HomePage from "./routes/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./layouts/Loader";
// import Login from "./components/login";
// import HorizonResults from "./routes/horizon-results";
// import Introduction from "./routes/introduction";
// import Research from "./routes/research-methodology.jsx";
// import Profiles from "./routes/research-profiles.jsx";
// import Demographics from "./routes/demographics.jsx";
// import Authors from "./routes/authors.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Loader>
      <RouterProvider router={router} />
    </Loader>
  </Provider>
);
