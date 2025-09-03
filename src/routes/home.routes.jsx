import { createRoute } from "@tanstack/react-router";

import { rootRouteWrapper } from "./rootRouteWrapper";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
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

export const portfolioRoute = createRoute({
  path: "/portfolio",
  getParentRoute: () => homeLayoutRoute,
  component: AboutUs,
});

export const blogRoute = createRoute({
  path: "/blog",
  getParentRoute: () => homeLayoutRoute,
  component: Blog,
});

homeLayoutRoute.addChildren([
  homeIndexRoute,
  aboutUsRoute,
  portfolioRoute,
  blogRoute,
]);
