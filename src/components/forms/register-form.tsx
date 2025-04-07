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
import { RegisterCredentials, RegisterCredentialsType } from "@/schema/auth";
import { register } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { toast } from "sonner";

const RegisterForm = () => {
  const setToken = useAuthStore((store) => store.setUserToken);
  const router = useRouter();

  const form = useForm<RegisterCredentialsType>({
    resolver: zodResolver(RegisterCredentials),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      roleId: 2,
    },
  });

  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setToken(data.responseData);
      toast("Successfully create an account!");
      setTimeout(() => {
        router.navigate({ to: "/client" });
      }, 1000);
    },
    onError: (err: Error) => {
      console.error(err);
      toast(err.message);
    },
  });

  const onSubmit = (formData: RegisterCredentialsType) => {
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
        <div className="w-full grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <div className="flex flex-col gap-2">
                  <FormControl className="flex flex-col gap-2">
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </div>
              </FormItem>
            )}
          />
        </div>
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
        <Button className="mt-8 hover:cursor-pointer">Register</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
