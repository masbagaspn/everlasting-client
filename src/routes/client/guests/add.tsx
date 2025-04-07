import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/guests/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/client/guest/add"!</div>;
}
