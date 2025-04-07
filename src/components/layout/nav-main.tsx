import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useMatchRoute } from "@tanstack/react-router";

import {
  LayoutDashboard,
  MessageSquareShare,
  Tickets,
  UserPlus,
  Users,
} from "lucide-react";

const sidebarMenuItems = [
  {
    title: "Dashboard",
    url: "/client/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Guests",
    url: "/client/guests",
    icon: Users,
  },
  {
    title: "Events",
    url: "/client/events",
    icon: Tickets,
  },
  {
    title: "Messages",
    url: "/client/messages",
    icon: MessageSquareShare,
  },
];

const NavMain = () => {
  const matchRoute = useMatchRoute();
  const isActive = (to: string) => !!matchRoute({ to, fuzzy: true });

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem className="mb-2">
            <SidebarMenuButton
              asChild
              className="bg-sidebar-accent-foreground text-sidebar-accent font-semibold tracking-normal shadow text-sm"
            >
              <Link to="/client/guests/add">
                <UserPlus />
                <span>Create Invitation</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {sidebarMenuItems.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isActive(item.url)}
                  asChild
                >
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavMain;
