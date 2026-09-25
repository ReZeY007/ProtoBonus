import { type RouteObject } from "react-router";
import Login from "../pages/login/Login";
import logoutAction, { loginAction } from "../pages/login/action";

const Auth = [
  {
    path: "login",
    Component: Login,
    action: loginAction,
  },
  {
    path: "logout",
    action: logoutAction,
  },
] as const satisfies RouteObject[];

export default Auth;
