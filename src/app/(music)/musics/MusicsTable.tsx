"use client";
import { GetSongsResponseBody } from "@/api/musics";
import { GetPlaylistsResponseBody } from "@/api/playlist";
import { DataTable } from "@/components/common/DataTable";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { axios } from "@/lib";
import { Song } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import fileDownload from "js-file-download";
import { ArrowDownToLine, MoreHorizontal } from "lucide-react";
import { useMemo } from "react";
import { SaveToPlaylistDialog } from "./SaveToPlaylistDialog";
import { getSession } from "next-auth/react";

type MusicsTableProps = {
  musics: GetSongsResponseBody["result"]["items"];
  playlists: GetPlaylistsResponseBody["result"]["items"];
};

export default function MusicsTable({ musics, playlists }: MusicsTableProps) {
  const handleDownload = async (url: string, filename: string) => {
    const session = await getSession();

    axios
      .get(url, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const columns: ColumnDef<Song>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "year",
        header: "Year",
      },
      {
        accessorKey: "album_name",
        header: "Album",
      },
      {
        accessorKey: "artist_name",
        header: "Artist",
      },
      {
        accessorKey: "duration",
        header: "Duration",
      },
      {
        id: "options",
        cell: ({ row }) => {
          const song = row.original;

          return (
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-44">
                <ul className="grid gap-4 text-sm">
                  <li className="leading-none">
                    <SaveToPlaylistDialog
                      playlists={playlists}
                      songId={song?.id}
                    />
                  </li>
                  <li
                    className="leading-none flex items-center 
                               gap-2 cursor-pointer"
                    onClick={() => handleDownload(song?.file, song?.title)}
                  >
                    <ArrowDownToLine size={20} /> Download
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          );
        },
      },
    ],
    [playlists]
  );

  return <DataTable columns={columns} data={musics} />;
}
