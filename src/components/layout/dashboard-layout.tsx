import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen h-screen flex">
      <DashboardSidebar />
      {children}
    </main>
  );
};

export default DashboardLayout;
