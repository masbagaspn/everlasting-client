import { isAuthenticated } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/client/")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/client/dashboard" });
    } else {
      throw redirect({ to: "/auth/login" });
    }
  },
});
