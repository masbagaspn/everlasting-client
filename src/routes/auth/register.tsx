import RegisterForm from "@/components/forms/register-form";
import AuthLayout from "@/components/layout/auth-layout";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

const headline = "Start Your Wedding Journey with Evelasting!";
const subheadlines = [
  "Create an account to begin planning the celebration of a lifetime.",
  "Manage guests, customize events, and send beautiful invitations—all in one place.",
];

function RouteComponent() {
  return (
    <AuthLayout
      headline={headline}
      subheadlines={subheadlines}
      footer={<Footer />}
    >
      <RegisterForm />
    </AuthLayout>
  );
}

const Footer = () => {
  return (
    <p className="w-full text-sm text-center">
      Already have an account?{" "}
      <Link
        to="/auth/login"
        className="text-purple-900 underline font-medium mx-0.5"
      >
        Log in here
      </Link>
    </p>
  );
};
