import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getUser } from "@/services/user";
import { getUserInvitations } from "@/services/userInvitation";
import { useQueries } from "@tanstack/react-query";
import { ChevronsUpDown } from "lucide-react";

const userInvitationsQuery = () => ({
  queryKey: ["userInvitations"],
  queryFn: async () => getUserInvitations(),
});

const userQuery = () => ({
  queryKey: ["user"],
  queryFn: async () => getUser(),
});

const NavHeader = () => {
  const queries = useQueries({
    queries: [userQuery(), userInvitationsQuery()],
  });

  const user = queries[0].data.responseData;
  const userInvitations = queries[1].data.responseData;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="h-fit flex justify-between"
              disabled={!userInvitations.length}
            >
              <span className="w-full inline-flex flex-col justify-between">
                <span className="text-neutral-900 font-display font-medium">
                  Everlasting
                </span>
                <span className="text-xs">{`${user.firstName} ${user.lastName}`}</span>
              </span>
              {userInvitations.length ? (
                <ChevronsUpDown className="ml-auto" />
              ) : null}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            {userInvitations.length &&
              userInvitations.map((inv: { name: string }) => (
                <DropdownMenuItem key={inv.name}>{inv.name}</DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavHeader;
