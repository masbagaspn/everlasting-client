import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { LoginFormSchema, LoginFormType } from "@/schema/LoginForm";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "@tanstack/react-router";

export const LoginForm = () => {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: () => router.navigate({ to: "/app" }),
  });

  const onSubmit = (formData: LoginFormType) => {
    mutate(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full font-display"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <div className="flex flex-col gap-2">
                <FormControl className="flex flex-col gap-2">
                  <Input {...field} className="font-sans py-6" />
                </FormControl>
                <FormMessage className="text-red-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl className="flex flex-col gap-2">
                <Input type="password" {...field} className="font-sans py-6" />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button className="mt-8 py-6 hover:cursor-pointer">Sign In</Button>
      </form>
    </Form>
  );
};
