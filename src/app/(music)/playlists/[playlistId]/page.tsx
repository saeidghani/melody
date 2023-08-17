import { Container } from "@/components/common/Container";
import React from "react";
import Image from "next/image";
import { PlaylistOptions } from "./PlaylistOptions";
import { DataTable } from "@/components/common/DataTable";
import { columns } from "./columns";
import { getPlaylist } from "@/api/playlist";

interface PlaylistPageProps {
  params: {
    playlistId: string;
  };
}

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { playlistId } = params;
  const playlist = await getPlaylist(playlistId);
  const { id, title, cover, songs } = playlist?.result;

  return (
    <section id="playlists" aria-label="playlists">
      <Container>
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <Image src={cover} alt="playlist-cover" width={400} height={400} />
            <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
          </div>
          <PlaylistOptions id={id} title={title} cover={cover} />
        </div>
        <div className="mt-8">
          <DataTable columns={columns} data={songs} />
        </div>
      </Container>
    </section>
  );
}
