import type { RouteObject } from "react-router";
import { Layout } from "@/layout";

export default [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/@me",
        element: <div>me</div>,
      },
    ],
  },
] satisfies RouteObject[];
