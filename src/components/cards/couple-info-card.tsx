import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";

const CoupleInformationCard = ({
  className,
}: React.ComponentProps<typeof Card>) => {
  return (
    <Card className={clsx("relative flex flex-col justify-between", className)}>
      <CardHeader>
        <CardTitle className="text-sm">Couple Information</CardTitle>
        <CardDescription className="text-xs">
          A love story in the making! Here's a glimpse of the hearts behind the
          celebration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h4 className="text-xs text-neutral-600 font-medium">
              Bride's Name
            </h4>
            <p className="text-base font-medium">Jilan Falihah</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs text-neutral-600 font-medium">
              Groom's Name
            </h4>
            <p className="text-base font-medium">Firza Gustama</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs text-neutral-600 font-medium">
              Wedding Date
            </h4>
            <p className="text-base font-medium">6 May 2023</p>
          </div>
        </div>
      </CardContent>
      <Badge variant="success" className="absolute right-4 top-4">
        Active
      </Badge>
    </Card>
  );
};

export default CoupleInformationCard;
