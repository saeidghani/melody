import { Song } from "@/types";
import { ApiOptions, apiHandler, getServerSideData } from "@/utils";
import { AxiosResponse } from "axios";

type CreatePlaylistRequestBody = any;

type CreatePlaylistResponseBody = {
  ok: boolean;
  result: {
    title: string;
    created_at: string;
    id: number;
    cover: string;
    updated_at: null | string;
    songs: Song[];
  };
};

export type GetPlaylistsResponseBody = {
  ok: boolean;
  result: {
    items: {
      id: number;
      title: string;
      cover: string;
      created_at: string;
      updated_at: string;
      songs: Song[];
    }[];
  };
};

export type GetPlaylistResponseBody = {
  ok: boolean;
  result: {
    id: number;
    title: string;
    cover: string;
    created_at: string;
    updated_at: string;
    songs: Song[];
  };
};

type AddSongToPlaylistRequestBody = {
  song_id: number;
};

export const getPlaylists = async () => {
  const res: AxiosResponse<GetPlaylistsResponseBody> = await getServerSideData(
    "/playlist"
  );
  return res?.data;
};

export const getPlaylist = async (playlistId: string) => {
  const res: AxiosResponse<GetPlaylistResponseBody> = await getServerSideData(
    `/playlist/${playlistId}`
  );
  return res?.data;
};

export const createPlaylist = async (
  data: CreatePlaylistRequestBody,
  options: ApiOptions<CreatePlaylistResponseBody>
) => {
  return await apiHandler<CreatePlaylistResponseBody>(
    {
      url: "/playlist",
      method: "POST",
      data,
    },
    options
  );
};

export const editPlaylist = async (
  playlistId: number,
  data: CreatePlaylistRequestBody,
  options: ApiOptions<CreatePlaylistResponseBody>
) => {
  return await apiHandler<CreatePlaylistResponseBody>(
    {
      url: `/playlist/${playlistId}`,
      method: "PATCH",
      data,
    },
    options
  );
};

export const deletePlaylist = async (
  playlistId: number,
  options: ApiOptions<CreatePlaylistResponseBody>
) => {
  return await apiHandler<CreatePlaylistResponseBody>(
    {
      url: `/playlist/${playlistId}`,
      method: "DELETE",
    },
    options
  );
};

export const addSongToPlaylist = async (
  playlistId: number,
  data: AddSongToPlaylistRequestBody,
  options: ApiOptions<CreatePlaylistResponseBody>
) => {
  return await apiHandler<CreatePlaylistResponseBody>(
    {
      url: `/playlist/add-song/${playlistId}`,
      method: "POST",
      data,
    },
    options
  );
};

export const deletePlaylistSong = async (
  playlistId: string,
  options: ApiOptions<CreatePlaylistResponseBody>
) => {
  return await apiHandler<CreatePlaylistResponseBody>(
    {
      url: `/playlist/add-song/${playlistId}`,
      method: "DELETE",
    },
    options
  );
};
