import { ApiOptions, apiHandler } from "@/utils";

type RegisterRequestBody = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
};

type RegisterResponseBody = {
  ok: boolean;
  result: {
    first_name: string;
    last_name: string;
    username: string;
    id: number;
  };
};

type LoginRequestBody = {
  username: string;
  password: string;
};

type LoginResponseBody = {
  ok: boolean;
  result: {
    access_token: string;
    access_token_expration: string;
  };
};

export const register = async (
  data: RegisterRequestBody,
  options: ApiOptions<RegisterResponseBody>
) => {
  return await apiHandler<RegisterResponseBody>(
    {
      url: "/site/register",
      method: "POST",
      data,
    },
    options
  );
};

export const login = async (
  data: LoginRequestBody,
  options: ApiOptions<LoginResponseBody>
) => {
  return await apiHandler<LoginResponseBody>(
    {
      url: "/site/login",
      method: "POST",
      data,
    },
    options
  );
};
