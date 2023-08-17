"use client";
import { login } from "@/api/auth";
import { TextField } from "@/components/form/TextField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@/components/ui/link";
import { messages, routes } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signinSchema = z.object({
  username: z.string().min(1, messages.username.required),
  password: z.string().min(1, messages.password.required),
});

type FormValues = z.infer<typeof signinSchema>;

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const { username, password } = values;

    const body = {
      username,
      password,
    };

    setIsLoading(true);

    await login(body, {
      onSuccess: (data) => {
        const { access_token, access_token_expration } = data?.result || {};

        if (access_token && access_token_expration) {
          signIn("credentials", {
            accessToken: access_token,
            refreshToken: access_token_expration,
            redirect: false,
          }).then((data) => {
            if (data?.ok) {
              router.push(routes.music.musics);
            }
          });
        }
      },
      onSettled: () => setIsLoading(false),
    });
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
