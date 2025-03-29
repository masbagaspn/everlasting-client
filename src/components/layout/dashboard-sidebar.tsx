import { motion as m } from "motion/react";

import {
  LayoutDashboard,
  Users,
  Tickets,
  ChevronLeft,
  ArrowDownToLine,
} from "lucide-react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import React from "react";

const menuItems = [
  {
    title: "Dashboard",
    to: "/app",
    icon: "LayoutDashboard",
  },
  {
    title: "Guests",
    to: "/app/guests",
    icon: "Users",
  },
  {
    title: "Events",
    to: "/app/events",
    icon: "Tickets",
  },
];

const DashboardSidebar = () => {
  const matchRoute = useMatchRoute();
  const isActive = (to: string) => !!matchRoute({ to, fuzzy: true });
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <m.nav
      className="w-[15vw] h-screen flex flex-col justify-between border-r border-neutral-200 p-4 relative"
      animate={{
        width: isOpen ? "192px" : "78px",
        transition: { duration: 0.25, stiffness: 100 },
      }}
    >
      <div className="flex flex-col">
        <h1
          className={clsx("font-display text-purple-900 tracking-tight", [
            !isOpen && "font-bold",
          ])}
        >
          {isOpen ? "Everlasting" : "E."}
        </h1>
        <Separator className="bg-neutral-200 mt-4 mb-6" />
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={`sidebar-menu-${item.title}`}>
              <Link
                to={item.to}
                className={clsx(
                  "w-full inline-flex items-center px-3 py-2 gap-4 text-sm tracking-tight rounded",
                  [
                    isActive(item.to) &&
                      "bg-purple-900 text-purple-100 font-semibold",
                    !isActive(item.to) &&
                      "bg-transparent text-neutral-500 hover:bg-purple-100 hover:text-purple-800",
                  ]
                )}
                disabled={isActive(item.to)}
              >
                <ItemIcon title={item.title.toLowerCase()} />
                {isOpen ? item.title : ""}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Separator className="mb-4 bg-neutral-200" />
        <button
          className={clsx(
            "w-full inline-flex justify-start items-center px-3.5 py-2 gap-4",
            "bg-transparent text-neutral-500 text-sm tracking-tight rounded",
            "hover:bg-purple-100 hover:text-purple-800 cursor-pointer"
          )}
        >
          <ItemIcon title="logout" />
          {isOpen && "Logout"}
        </button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 -right-3 w-6 h-6 flex items-center justify-center p-1 bg-purple-900 rounded transition hover:bg-purple-700 cursor-pointer"
      >
        <ChevronLeft
          className={clsx("w-6 h-6 text-neutral-100 transition", [
            !isOpen && "rotate-180",
          ])}
        />
      </button>
    </m.nav>
  );
};

const ItemIcon = ({ title }: { title: string }) => {
  const Icon = (title: string) => {
    if (title === "dashboard") return <LayoutDashboard />;
    if (title === "guests") return <Users />;
    if (title === "events") return <Tickets />;
    if (title === "logout") return <ArrowDownToLine className="rotate-90" />;
  };

  return <div className="w-5 h-5 flex items-center">{Icon(title)}</div>;
};

export default DashboardSidebar;
