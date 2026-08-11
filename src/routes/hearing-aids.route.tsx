import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hearing-aids")({
  component: () => <Outlet />,
});
