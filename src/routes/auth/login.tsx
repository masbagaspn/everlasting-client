import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "@/components/layout/auth-layout";
import LoginForm from "@/components/forms/login-form";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

const headline = "Plan Your Dream Wedding, Effortlessly!";
const subheadlines = [
  "Welcome to Evelasting—your all-in-one wedding planning companion.",
  "Log in to manage every detail, from guest lists to event schedules, all in one place.",
];

function Login() {
  return (
    <AuthLayout
      headline={headline}
      subheadlines={subheadlines}
      footer={<Footer />}
    >
      <LoginForm />
    </AuthLayout>
  );
}

const Footer = () => {
  return (
    <p className="w-full gap-2 text-sm text-center">
      Don't have an account?
      <span>
        <Link
          to="/auth/register"
          className="text-purple-900 font-medium underline mx-0.5"
        >
          Create one now
        </Link>
        to start planning your wedding.
      </span>
    </p>
  );
};
