import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal } from "lucide-react";
import { PlaylistDialog } from "@/components/common/PlaylistDialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function PlaylistOptions() {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="w-36">
        <ul className="grid gap-4">
          <li className="text-sm leading-none">
            <PlaylistDialog title="asdfghj" cover="/images/playlist-cover.png">
              <button>Edit Playlist</button>
            </PlaylistDialog>
          </li>
          <li className="text-sm leading-none text-red-500">
            <DeletePlaylistDialog />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

function DeletePlaylistDialog() {
  return (
    <Dialog>
      <DialogTrigger>Delete playlist</DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="font-medium">Delete playlist</DialogHeader>
        <p>Are you sure you want to delete this playlist?</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="text">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
