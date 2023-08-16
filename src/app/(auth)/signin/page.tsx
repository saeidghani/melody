"use client";
import { TextField } from "@/components/form/TextField";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { messages, routes } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signinSchema = z.object({
  email: z
    .string()
    .min(1, messages.email.required)
    .email(messages.email.invalid),
  password: z.string().min(1, messages.password.required),
});

type FormValues = z.infer<typeof signinSchema>;

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-6">Sign in</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <TextField
            name="email"
            label="email"
            control={form.control}
            inputProps={{ placeholder: "Please enter your email" }}
          />
          <TextField
            name="password"
            label="password"
            control={form.control}
            inputProps={{
              type: "password",
              placeholder: "Please enter your password",
            }}
          />
          <Button type="submit" width="full" loading={isLoading}>
            Sign in
          </Button>
        </form>
        <div className="mt-2 flex justify-center">
          <Link variant="underline" size="sm" href={routes.auth.signup}>
            Don’t have an account yet? Sign up
          </Link>
        </div>
      </Form>
    </>
  );
}
