import { Container } from "@/components/common/Container";
import React from "react";
import Image from "next/image";
import { PlaylistOptions } from "./PlaylistOptions";
import { DataTable } from "@/components/common/DataTable";
import { columns } from "./columns";

const data = [
  {
    id: 1,
    album_name: "Call of the Mastodon",
    artist_name: "Mastodon",
    duration: "280.2151",
    title: "Deep Sea Creature",
    year: "2001",
    file: "http://example.com/song/download/1",
    format: "mp3",
  },
  {
    id: 2,
    album_name: "Call of the Mastodon",
    artist_name: "Mastodon",
    duration: "280.2151",
    title: "Deep Sea Creature",
    year: "2001",
    file: "http://example.com/song/download/1",
    format: "mp3",
  },
  {
    id: 3,
    album_name: "Call of the Mastodon",
    artist_name: "Mastodon",
    duration: "280.2151",
    title: "Deep Sea Creature",
    year: "2001",
    file: "http://example.com/song/download/1",
    format: "mp3",
  },
];

interface PlaylistPageProps {
  params: {
    playlistId: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const { playlistId } = params;

  return (
    <section id="playlists" aria-label="playlists">
      <Container>
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <Image
              src="/images/playlist-cover.png"
              alt="playlist-cover"
              width={400}
              height={400}
            />
            <h1 className="text-2xl font-bold mb-6 text-center">
              Playlist Name
            </h1>
          </div>
          <PlaylistOptions />
        </div>
        <div className="mt-8">
          <DataTable columns={columns} data={data} />
        </div>
      </Container>
    </section>
  );
}
