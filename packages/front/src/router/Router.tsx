import { RootRoute, Route, Router } from '@tanstack/router';
import { Home } from '../components/Home';
import { Root } from '../components/Root/Root';

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});
const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: () => {
    return <h1>Settings!</h1>;
  },
});
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => {
    return <h1>About!</h1>;
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  settingsRoute,
  aboutRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}
