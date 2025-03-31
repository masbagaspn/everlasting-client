import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import {
  LayoutDashboard,
  MessageSquareShare,
  Tickets,
  Users,
} from "lucide-react";

const sidebarMenuItems = [
  {
    title: "Dashboard",
    url: "/client",
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
          {sidebarMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={isActive(item.url)}
                className={clsx([!isActive(item.url) && "text-neutral-600"])}
              >
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavMain;
