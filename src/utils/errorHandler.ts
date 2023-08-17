import { routes } from "@/constants";
import { toast } from "@/hooks";
import { AxiosError } from "axios";
import { signOut } from "next-auth/react";

export const errorHandler = async (
  error: AxiosError<{
    ok: boolean;
    result: { field: string; message: string }[];
  }>
) => {
  console.log("handling error", error);

  if (error?.status === 401) {
    signOut();
    if (typeof window !== "undefined") {
      return window.location.replace(routes.auth.signin);
    }
  }

  const sendAlert = (message: string) => toast({ title: message });

  const result = error?.response?.data?.result;

  if (result && Array.isArray(result)) {
    result?.forEach((err) => {
      const { message } = err ?? {};
      if (message && typeof message === "string") {
        sendAlert(message);
      }
    });
  } else {
    sendAlert("Something is wrong, Please try later");
  }
};
