import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PlaylistDialog } from "../../../components/common/PlaylistDialog";
import { PlaylistCard } from "./PlaylistCard";
import { getPlaylists } from "@/api/playlist";

export default async function PlaylistsPage() {
  const data = await getPlaylists();

  return (
    <section id="playlists" aria-label="playlists">
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">Playlists</h1>
        <div className="flex justify-end">
          <PlaylistDialog>
            <Button>
              <Plus /> New Playlist
            </Button>
          </PlaylistDialog>
        </div>
        <div
          className="-mx-px grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3
                     lg:grid-cols-2 xl:grid-cols-3 
                     border-l border-t border-gray-200 sm:mx-0 mt-6"
        >
          {data?.result?.items?.map(({ id, title, cover }) => (
            <PlaylistCard
              key={id}
              playlist={{
                id,
                title,
                thumbnail: cover,
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
