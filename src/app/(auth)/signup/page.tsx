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
import axios from "axios";
import { register } from "@/api/auth";
import { useRouter } from "next/navigation";

const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, messages.firstName.required)
      .min(3, messages.firstName.invalid),
    lastName: z
      .string()
      .min(1, messages.lastName.required)
      .min(3, messages.lastName.invalid),
    username: z
      .string()
      .min(1, messages.username.required)
      .min(3, messages.username.invalid),
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
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const {
      firstName: first_name,
      lastName: last_name,
      username,
      password,
    } = values;

    const body = {
      first_name,
      last_name,
      username,
      password,
    };

    setIsLoading(true);

    await register(body, {
      onSuccess: (data) => {
        if (data?.ok) router.push(routes.auth.signin);
      },
      onSettled: () => setIsLoading(false),
    });
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
            name="firstName"
            label="first name"
            control={form.control}
            inputProps={{ placeholder: "Please enter your first name" }}
          />
          <TextField
            name="lastName"
            label="last name"
            control={form.control}
            inputProps={{ placeholder: "Please enter your last name" }}
          />
          <TextField
            name="username"
            label="username"
            control={form.control}
            inputProps={{ placeholder: "Please enter your username" }}
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
          <Button type="submit" width="full" loading={isLoading}>
            Sign up
          </Button>
        </form>
        <div className="grid place-content-center mt-4">
          <Link variant="underline" size="sm" href={routes.auth.signin}>
            Do you have an account? Sign in
          </Link>
        </div>
      </Form>
    </>
  );
}
