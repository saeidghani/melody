import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { axios } from "@/lib";
import { AxiosRequestConfig } from "axios";

export const getServerSideData = async (
  url: string,
  config?: AxiosRequestConfig
) => {
  const session = await getServerSession(authOptions);
  const token = session?.user?.accessToken;

  const res = await axios.get(url, {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
