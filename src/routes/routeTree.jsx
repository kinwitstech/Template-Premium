import { homeLayoutRoute } from "./home.routes";
import { rootRouteWrapper } from "./rootRouteWrapper";

export const routeTree = rootRouteWrapper.addChildren([homeLayoutRoute]);
