import { homeLayoutRoute } from "./home.routes";
import { rootRouteWrapper } from "./rootRouteWrapper";

/* This code snippet is exporting a constant named `routeTree` that is being assigned the result of
calling the `addChildren` method on the `rootRouteWrapper` object with an array containing
`homeLayoutRoute` as the argument. */
export const routeTree = rootRouteWrapper.addChildren([homeLayoutRoute]);
