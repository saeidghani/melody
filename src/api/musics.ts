import { Song } from "@/types";
import { getServerSideData } from "@/utils";
import { AxiosResponse } from "axios";

export type GetSongsResponseBody = {
  ok: boolean;
  result: {
    items: Song[];
  };
};

export const getMusics = async (page = "1", search = "") => {
  const res: AxiosResponse<GetSongsResponseBody> = await getServerSideData(
    "/song",
    { params: { page, "filter[title][like]": search } }
  );

  return res?.data;
};
