"use client";
import { Link } from "@/components/ui/link";
import { routes } from "@/constants";
import Image from "next/image";

type PlaylistCardProps = {
  playlist: {
    id: number;
    title: string;
    thumbnail: string;
  };
};

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  const { id, title, thumbnail } = playlist || {};

  return (
    <div
      className="flex flex-col relative bg-white
                 border-b border-r border-gray-200"
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-200">
        <Image
          fill
          src={thumbnail ?? "/images/playlist-cover.png"}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        className="flex flex-col justify-between pb-4 pt-10 p-4 
                      sm:p-6 text-center"
      >
        <Link href={routes.music.playlist.view(id)}>
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
}
