import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hearing-education")({
  component: () => <Outlet />,
});
