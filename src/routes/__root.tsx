import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/Navbar";
import { Info } from "../components/Info";

export const Route = createRootRoute({
  component: () => (
    <>
      <Info />
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
