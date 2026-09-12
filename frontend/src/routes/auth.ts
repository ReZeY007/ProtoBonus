import { type RouteObject } from "react-router";
import Login from "../pages/login/Login";
import { loginAction } from "../pages/login/action";

const Auth = {
  path: "login",
  Component: Login,
  action: loginAction,
} as const satisfies RouteObject;

export default Auth;
