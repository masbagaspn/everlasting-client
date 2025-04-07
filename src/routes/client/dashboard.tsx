import CoupleInformationCard from "@/components/cards/couple-info-card";
import OverviewCards from "@/components/cards/overview-cards";
import { AppLayout } from "@/components/layout/app-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout pageTitle="Dashboard">
      <section className="h-[89.5vh] bg-white grid grid-cols-4 grid-rows-3 gap-y-6 gap-x-4 p-8">
        <OverviewCards />
        <Card className="col-span-1 row-span-2">
          <CardHeader>
            <CardTitle>Guest Respond</CardTitle>
            <CardDescription className="text-xs">
              Quick overview of guest responses to your invitations.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 grid grid-rows-3 gap-2">
            <div className="bg-purple-100 flex flex-row-reverse justify-end items-center rounded gap-4 py-2 px-4">
              <h4 className="text-xs font-medium text-purple-900">
                Invitation
                <br />
                Opened
              </h4>
              <p className="w-12 text-xl font-bold text-purple-900">532</p>
            </div>
            <div className="bg-green-100 flex flex-row-reverse justify-end items-center rounded gap-4 py-2 px-4">
              <h4 className="text-xs font-medium text-green-800">
                Guest
                <br />
                Attend
              </h4>
              <p className="w-12 text-xl font-bold text-green-800">500</p>
            </div>
            <div className="bg-red-100 flex flex-row-reverse justify-end items-center rounded gap-4 py-2 px-4">
              <h4 className="text-xs font-medium text-red-700">
                Guest
                <br />
                Not Attend
              </h4>
              <p className="w-12 text-xl font-bold text-red-700">32</p>
            </div>
          </CardContent>
        </Card>
        <CoupleInformationCard className="row-start-2 col-start-1 col-span-3 justify-between" />
      </section>
    </AppLayout>
  );
}
