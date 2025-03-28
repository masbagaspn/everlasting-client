import { createFileRoute } from "@tanstack/react-router";

import { LoginForm } from "@/components/forms/LoginForm";

import clsx from "clsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main
      className={clsx(
        "w-screen h-screen grid grid-cols-2 gap-10 overflow-hidden",
        "p-4 text-purple-900",
        "bg-[url('/login-image.jpg')] bg-cover bg-right-top"
      )}
    >
      <section className="w-full h-full col-start-2 flex flex-col justify-center bg-purple-50 px-16 py-10 rounded-xl gap-10 relative z-60">
        <span className="absolute top-4 right-6 text-2xl font-display font-bold text-purple-900">
          E.
        </span>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl tracking-tight font-bold font-display">
            Plan Your Dream Wedding, Effortlessly!
          </h2>
          <p className="text-sm inline-flex flex-col font-sans tracking-tight text-neutral-500">
            <span>
              Welcome to Evelasting—your all-in-one wedding planning companion.
            </span>
            <span>
              Log in to manage every detail, from guest lists to event
              schedules, all in one place.
            </span>
          </p>
        </div>
        <LoginForm />
      </section>
      <div className="absolute right-0 top-0 w-screen h-screen bg-gradient-to-r from-transparent to-white z-50 blur-2xl" />
    </main>
  );
}
