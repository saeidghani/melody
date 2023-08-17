import { GetPlaylistsResponseBody, addSongToPlaylist } from "@/api/playlist";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ListVideo, Loader2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

interface SaveToPlaylistDialogProps {
  playlists: GetPlaylistsResponseBody["result"]["items"];
  songId: number;
}

export function SaveToPlaylistDialog({
  playlists,
  songId,
}: SaveToPlaylistDialogProps) {
  const [loadingPlaylistId, setLoadingPlaylistId] = useState<number | null>(
    null
  );

  const handleAddSongToPlaylist = useCallback(
    async (playlistId: number) => {
      setLoadingPlaylistId(playlistId);

      await addSongToPlaylist(
        playlistId,
        { song_id: songId },
        {
          onSettled: () => setLoadingPlaylistId(null),
        }
      );
    },
    [songId]
  );

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <ListVideo size={20} /> Save to playlist
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="font-medium">Save to playlist</DialogHeader>
        <div className="">All playlists</div>
        <ul className="grid gap-4">
          {playlists?.map(({ id, title, cover }) => (
            <li
              key={id}
              className="flex items-center gap-4 
              hover:bg-gray-100 cursor-pointer"
              onClick={() => handleAddSongToPlaylist(id)}
            >
              <Image src={cover} width={50} height={50} alt="" />
              <span className="truncate">{title}</span>
              {loadingPlaylistId === id && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
