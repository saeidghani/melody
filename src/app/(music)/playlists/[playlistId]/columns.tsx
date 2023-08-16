"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownToLine } from "lucide-react";

export type Music = {
  id: number;
  album_name: string;
  artist_name: string;
  duration: string;
  title: string;
  year: string;
  file: string;
  format: string;
};

export const columns: ColumnDef<Music>[] = [
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
    id: "download",
    cell: ({ row }) => {
      const music = row.original;

      return (
        <button>
          <ArrowDownToLine size={20} />
        </button>
      );
    },
  },
];
