import React from "react";

interface PlaylistPageProps {
  params: {
    playlistId: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const { playlistId } = params;

  return <div>playlistId: {playlistId}</div>;
}
