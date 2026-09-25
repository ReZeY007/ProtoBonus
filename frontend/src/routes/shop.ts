import { type RouteObject } from "react-router";
import Shop from "../pages/shop/Shop";

const ShopRoutes = {
  path: "shop",
  children: [
    {
      index: true,
      Component: Shop,
    },
  ],
} as const satisfies RouteObject;

export default ShopRoutes;
