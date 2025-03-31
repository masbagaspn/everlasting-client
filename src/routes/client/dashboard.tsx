import CoupleInformationCard from "@/components/cards/couple-info-card";
import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { MoveUpRight, Users } from "lucide-react";

export const Route = createFileRoute("/client/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout pageTitle="Dashboard">
      <main className="bg-white rounded-lg p-8">
        <div className="w-full grid grid-cols-4 gap-6">
          <CoupleInformationCard className="col-span-2" />
          <Card className="col-span-1">
            <CardHeader>
              <div className="w-full flex justify-between">
                <div className="w-fit p-2 bg-purple-50 rounded-full text-purple-900 shadow-sm">
                  <Users className="stroke-1" />
                </div>
                <button className="w-fit p-2 border rounded-full cursor-pointer hover:bg-neutral-100 transition">
                  <MoveUpRight className="stroke-1" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col-reverse gap-1">
              <h4 className="text-xs font-medium text-neutral-600">
                Total Guest
              </h4>
              <p className="text-2xl font-bold leading-7">532</p>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <div className="w-full flex justify-between">
                <div className="w-fit p-2 bg-orange-50 rounded-full text-orange-900 shadow-sm">
                  <Users className="stroke-1" />
                </div>
                <button className="w-fit p-2 border rounded-full cursor-pointer hover:bg-neutral-100 transition">
                  <MoveUpRight className="stroke-1" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col-reverse gap-1">
              <h4 className="text-xs font-medium text-neutral-600">
                Shared Invitations
              </h4>
              <p className="text-2xl font-bold leading-7 inline-flex items-end gap-2">
                532{" "}
                <span className="text-base text-neutral-600 font-normal">
                  (100%)
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
