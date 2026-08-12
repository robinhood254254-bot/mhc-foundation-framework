import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hearing-test")({
  component: () => <Outlet />,
});
