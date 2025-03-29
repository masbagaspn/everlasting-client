import DashboardLayout from "@/components/layout/dashboard-layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  return <DashboardLayout>Test</DashboardLayout>;
}
