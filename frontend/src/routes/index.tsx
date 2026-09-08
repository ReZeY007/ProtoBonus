import Landing from "../containers/Landing";
import Auth from "./auth";

const Routes = [
  {
    path: "/",
    element: <Landing />,
  },
  Auth,
];

export default Routes;
