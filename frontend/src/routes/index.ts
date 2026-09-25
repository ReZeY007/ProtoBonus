import { type RouteObject } from "react-router";
import Landing from "../pages/landing/Landing";
import Auth from "./auth";
import Layout from "../pages/Layout";
import { rootLoader } from "../pages/root/loader";

const Routes = [
  {
    Component: Layout,
    loader: rootLoader,
    children: [
      {
        path: "/",
        Component: Landing,
      },
      ...Auth,
    ],
  },
] as const satisfies RouteObject[];

export default Routes;
