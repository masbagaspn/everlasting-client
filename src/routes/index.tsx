import { createFileRoute, redirect } from "@tanstack/react-router";

const isAuthenticated = localStorage.getItem("token") ? true : false;

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (isAuthenticated) {
      throw redirect({ to: "/client/dashboard" });
    } else {
      throw redirect({ to: "/auth/login" });
    }
  },
});
