import { type RouteObject } from "react-router";
import Login from "../pages/Login";

const Auth = {
  path: "/auth",
  children: [
    {
      path: "login",
      Component: Login,
    },
  ],
} as const satisfies RouteObject;

export default Auth;
