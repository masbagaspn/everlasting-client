import { AppLayout } from "@/components/layout/app-layout";
import { Guest, columns } from "@/components/tables/guest-columns";
import GuestDataTable from "@/components/tables/guest-data-table";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

const guestList: Guest[] = [
  {
    id: "d84642e0-0a17-11f0-b057-bc24119371da",
    name: "Mas Bagas Prasetio Nugroho",
    phone_number: 81232562140,
    invitation_status: "not delivered",
  },
];

export const Route = createFileRoute("/client/guests/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout pageTitle="Guests">
      <section className="h-full p-8 rounded-lg">
        <div>
          <Button>Add New</Button>
        </div>
        <GuestDataTable columns={columns} data={guestList} />
      </section>
    </AppLayout>
  );
}
