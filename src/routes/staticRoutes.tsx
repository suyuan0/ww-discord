import type { RouteObject } from "react-router";
import { Layout } from "@/layout";

export default [
  {
    path: "/",
    Component: Layout,
  },
] satisfies RouteObject[];
