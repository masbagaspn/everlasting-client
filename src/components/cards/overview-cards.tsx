import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MailCheck,
  MessageSquareQuote,
  MoveUpRight,
  Users,
} from "lucide-react";

const OverviewCards = () => {
  return (
    <React.Fragment>
      <Card className="col-span-1 flex flex-col justify-between">
        <CardHeader>
          <div className="w-full flex justify-between">
            <div className="w-fit p-2 bg-purple-50 rounded-full text-purple-900 shadow-sm">
              <Users className="w-4 h-4 stroke-1" />
            </div>
            <button className="w-fit p-2 border rounded-full cursor-pointer hover:bg-neutral-100 transition">
              <MoveUpRight className="w-4 h-4 stroke-1" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col-reverse gap-1">
          <h4 className="text-xs font-medium text-neutral-400">Total Guest</h4>
          <p className="text-2xl font-bold leading-7">532</p>
        </CardContent>
      </Card>
      <Card className="col-span-1 flex flex-col justify-between">
        <CardHeader>
          <div className="w-full flex justify-between">
            <div className="w-fit p-2 bg-orange-50 rounded-full text-orange-600 shadow-sm">
              <MailCheck className="w-4 h-4 stroke-1" />
            </div>
            <button className="w-fit p-2 border rounded-full cursor-pointer hover:bg-neutral-100 transition">
              <MoveUpRight className="w-4 h-4 stroke-1" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col-reverse gap-1">
          <h4 className="text-xs font-medium text-neutral-400">
            Shared Invitations
          </h4>
          <p className="text-2xl font-bold leading-7 inline-flex items-end gap-2">
            532{" "}
            <span className="text-base text-neutral-400 font-normal">
              (100%)
            </span>
          </p>
        </CardContent>
      </Card>
      <Card className="col-span-1 flex flex-col justify-between">
        <CardHeader>
          <div className="w-full flex justify-between">
            <div className="w-fit pt-2.5 pb-1.5 px-2 bg-pink-50 rounded-full text-pink-600 shadow-sm">
              <MessageSquareQuote className="w-4 h-4 stroke-1" />
            </div>
            <button className="w-fit p-2 border rounded-full cursor-pointer hover:bg-neutral-100 transition">
              <MoveUpRight className="w-4 h-4 stroke-1" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col-reverse gap-1">
          <h4 className="text-xs font-medium text-neutral-400">Total Wish</h4>
          <p className="text-2xl font-bold leading-7 inline-flex items-end gap-2">
            532{" "}
            <span className="text-base text-neutral-400 font-normal">
              (1 each person)
            </span>
          </p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default OverviewCards;
