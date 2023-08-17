import { errorHandler } from "./errorHandler";
import { getSession } from "next-auth/react";
import { appConfig } from "@/constants";
import { axios } from "@/lib";
import { AxiosRequestConfig } from "axios";

export type ApiOptions<TResponse> = {
  onSuccess?: (data: TResponse) => void;
  onError?: (error: any) => void;
  onSettled?: () => void;
};

export const apiHandler = async <TResponse>(
  config: { url: string } & AxiosRequestConfig,
  options: ApiOptions<TResponse> = {}
) => {
  const { onSuccess, onError = errorHandler, onSettled } = options || {};
  const session = await getSession();

  try {
    const response = await axios(config.url, {
      ...config,
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    });
    const data = await response.data;
    console.log("success:", data);
    onSuccess?.(data);
    return data as TResponse;
  } catch (error: any) {
    if (appConfig?.isDevEnv) {
      console.log("catch error:", error);
    }
    onError?.(error);
  } finally {
    onSettled?.();
  }
};
