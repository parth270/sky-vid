import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./services/store";
import { Provider } from "react-redux";
import HomePage from "./routes/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./layouts/Loader";
import Login from "./components/login";
import HorizonResults from './routes/horizon-results'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"horizon-results",
    element:<HorizonResults/>
  }
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
