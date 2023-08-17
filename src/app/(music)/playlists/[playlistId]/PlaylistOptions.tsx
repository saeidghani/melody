import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal } from "lucide-react";
import { PlaylistDialog } from "@/components/common/PlaylistDialog";
import { DeletePlaylistDialog } from "./DeletePlaylistDialog";

interface PlaylistOptionsProps {
  id: number;
  title: string;
  cover: string;
}

export function PlaylistOptions({ id, title, cover }: PlaylistOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="w-36">
        <ul className="grid gap-4">
          <li className="text-sm leading-none">
            <PlaylistDialog id={id} title={title} cover={cover}>
              <button>Edit Playlist</button>
            </PlaylistDialog>
          </li>
          <li className="text-sm leading-none text-red-500">
            <DeletePlaylistDialog id={id} />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
