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

const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, messages.email.required)
      .email(messages.email.invalid),
    password: z
      .string()
      .min(1, messages.password.required)
      .min(8, messages.password.min),
    passwordConfirm: z.string().min(1, messages.password.passwordConfirm),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: messages.password.passwordConfirmMisMatch,
    path: ["passwordConfirm"],
  });

type FormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-6">Sign up</h1>
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
          <TextField
            name="passwordConfirm"
            label="password confirm"
            control={form.control}
            inputProps={{
              type: "password",
              placeholder: "Please confirm your password",
            }}
          />
          <Button type="submit" width="full">
            Sign up
          </Button>
        </form>
        <div className="grid place-content-center mt-4">
          <Link
            variant="underline"
            size="sm"
            loading={isLoading}
            href={routes.auth.signin}
          >
            Do you have an account? Sign in
          </Link>
        </div>
      </Form>
    </>
  );
}
