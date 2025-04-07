import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";

type AuthLayoutProps = {
  headline: string;
  subheadlines: string[];
  children: React.ReactNode;
  footer: React.ReactElement;
};

const AuthLayout = ({
  headline,
  subheadlines,
  children,
  footer,
}: AuthLayoutProps) => {
  return (
    <main
      className={clsx(
        "w-screen h-screen grid grid-cols-2 gap-10 overflow-hidden",
        "p-4 text-purple-900",
        "bg-[url('/login-image.jpg')] bg-cover bg-right-top"
      )}
    >
      <Card className="col-start-2 relative w-full h-full flex flex-col justify-between z-60 px-6 py-10">
        <span className="absolute top-4 right-6 text-2xl font-display font-bold text-purple-900">
          E.
        </span>
        <CardHeader>
          <CardTitle className="text-4xl tracking-tight font-bold font-display mb-4">
            {headline}
          </CardTitle>
          <CardDescription className="text-sm inline-flex flex-col font-sans tracking-tight text-neutral-500">
            {subheadlines.map((sub, index) => (
              <span key={`sub-headline-${index}`}>{sub}</span>
            ))}
          </CardDescription>
          <div className="flex flex-col gap-4"></div>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="justify-self-end">{footer}</CardFooter>
      </Card>
      <div className="absolute right-0 top-0 w-screen h-screen bg-gradient-to-r from-transparent to-white z-50 blur-2xl" />
    </main>
  );
};

export default AuthLayout;
