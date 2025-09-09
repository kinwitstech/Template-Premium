import { createRoute } from "@tanstack/react-router";

import { rootRouteWrapper } from "./rootRouteWrapper";
import PortfolioDetail from "@/components/PortfolioDetail";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import { Portfolios } from "@/pages/Portfolios";

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
  component: Portfolios,
});

export const blogRoute = createRoute({
  path: "/blog",
  getParentRoute: () => homeLayoutRoute,
  component: Blog,
});

export const portfolioDetailRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "/portfolio/$id",
  component: PortfolioDetail,
});

homeLayoutRoute.addChildren([
  homeIndexRoute,
  aboutUsRoute,
  portfolioRoute,
  blogRoute,
  portfolioDetailRoute,
]);
