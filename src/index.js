import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./services/store";
import { Provider } from "react-redux";
import HomePage from "./routes/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./layouts/Loader";
import Login from "./components/login";
import HorizonResults from "./routes/horizon-results";
import Introduction from "./routes/introduction";
import Research from "./routes/research-methodology.jsx";
import Profiles from "./routes/research-profiles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "horizon-profiles",
    element: <HorizonResults />,
  },
  {
    path: "introduction",
    element: <Introduction />,
  },
  {
    path: "research-methodology",
    element: <Research />,
  },
  {
    path: "research-profiles",
    element: <Profiles/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Loader>
      <Login>
        <RouterProvider router={router} />
      </Login>
    </Loader>
  </Provider>
);
