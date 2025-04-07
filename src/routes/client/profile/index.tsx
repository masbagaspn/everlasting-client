import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/client/profile/"!</div>;
}
