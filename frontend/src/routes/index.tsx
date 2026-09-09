import { type RouteObject } from "react-router";
import Landing from "../containers/Landing";
import Auth from "./auth";
import Layout from "../pages/Layout";

const Routes = [
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Landing,
      },
      Auth,
    ],
  },
] as const satisfies RouteObject[];

export default Routes;
