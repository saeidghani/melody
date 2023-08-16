"use client";
import { TextField } from "@/components/form/TextField";
import { UploadField } from "@/components/form/UploadField";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { messages } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signinSchema = z.object({
  title: z
    .string()
    .min(1, messages.playlist.required)
    .min(3, messages.playlist.min),
  cover: z.custom<File>((v) => v instanceof File).optional(),
});

type FormValues = z.infer<typeof signinSchema>;

interface NewPlaylistProps {
  children: ReactNode;
  title?: string;
  cover?: string;
}

export function PlaylistDialog({ children, title, cover }: NewPlaylistProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      title: title ?? "",
    },
  });

  useEffect(() => {
    form.setValue("title", title ?? "");
  }, [cover, form, title]);

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <TextField
                name="title"
                label="title"
                control={form.control}
                inputProps={{ placeholder: "Please enter playlist title" }}
              />
              <UploadField
                name="cover"
                label="cover"
                control={form.control}
                defaultImagePreview={cover}
              />
              <Button type="submit" width="full" loading={isLoading}>
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
