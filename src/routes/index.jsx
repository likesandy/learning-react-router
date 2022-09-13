import { lazy } from "react";
import { Navigate } from "react-router-dom";

import Home from "./01-basic-use/home";

// route Lazy loading : lazy + import +  Suspense
const About = lazy(() => import("./01-basic-use/about"));
const Details = lazy(() => import("./02-route-params/details"));
const User = lazy(() => import("./02-route-params/user"));

// react-router-config -> useRoutes
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/user",
    element: <User />,
  },
];

export default routes;
