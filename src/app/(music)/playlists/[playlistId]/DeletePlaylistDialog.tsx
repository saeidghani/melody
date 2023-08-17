"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deletePlaylist } from "@/api/playlist";
import { useRouter } from "next/navigation";
import { routes } from "@/constants";

interface DeletePlaylistDialogProps {
  id: number;
}

export function DeletePlaylistDialog({ id }: DeletePlaylistDialogProps) {
  const router = useRouter();

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
            <Button
              variant="destructive"
              onClick={async () => {
                deletePlaylist(id, {
                  onSuccess: () => {
                    router.push(routes.music.playlist.index);
                  },
                });
              }}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
