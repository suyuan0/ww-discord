import type { RouteObject } from "react-router";
import { Layout } from "@/layout";

export default [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/channels/@me",
        children: [
          {
            index: true,
            element: <div>@me</div>,
          },
        ],
      },
      {
        path: "/store",
        element: <div>store</div>,
      },
      {
        path: "/shop",
        element: <div>shop</div>,
      },
      {
        path: "/quest-home",
        element: <div>quest-home</div>,
      },
    ],
  },
] satisfies RouteObject[];
