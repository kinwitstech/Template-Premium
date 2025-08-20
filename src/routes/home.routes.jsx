import { createRoute } from "@tanstack/react-router";

import { rootRouteWrapper } from "./rootRouteWrapper";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";

export const homeLayoutRoute = createRoute({
  id: "homeLayout",
  getParentRoute: () => rootRouteWrapper,
  component: Layout,
});

export const homeIndexRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "/",
  component: Home,
});

export const aboutUsRoute = createRoute({
  path: "/about-us",
  getParentRoute: () => homeLayoutRoute,
  component: AboutUs,
});

homeLayoutRoute.addChildren([homeIndexRoute, aboutUsRoute]);
