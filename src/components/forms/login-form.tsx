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

import { useRouter } from "@tanstack/react-router";
import { login } from "@/services/auth";
import { LoginCredentials, LoginCredentialsType } from "@/schema/auth";
import { useAuthStore } from "@/stores/authStore";
import { toast } from "sonner";

const LoginForm = () => {
  const setToken = useAuthStore((store) => store.setUserToken);
  const router = useRouter();

  const form = useForm<LoginCredentialsType>({
    resolver: zodResolver(LoginCredentials),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.responseData);
      router.navigate({ to: "/client" });
    },
    onError: (err: Error) => {
      console.error(err);
      toast(err.message);
    },
  });

  const onSubmit = (formData: LoginCredentialsType) => {
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
                  <Input {...field} />
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
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button className="mt-8 hover:cursor-pointer">Sign In</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
