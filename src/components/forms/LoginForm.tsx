import { useForm } from "react-hook-form";

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

import { LoginFormType } from "@/schema/LoginForm";

export const LoginForm = () => {
  const form = useForm<LoginFormType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <div className="flex flex-col gap-4 w-full font-display">
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
                <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8 py-6 hover:cursor-pointer">
          Sign In
        </Button>
      </div>
    </Form>
  );
};
