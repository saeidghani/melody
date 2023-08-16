import { Container } from "@/components/common/Container";
import { NewPlaylist } from "./NewPlaylist";
import { PlaylistCard } from "./PlaylistCard";

export default function PlaylistsPage() {
  return (
    <section id="playlists" aria-label="playlists">
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">Playlists</h1>
        <NewPlaylist />
        <div
          className="-mx-px grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3
                     lg:grid-cols-2 xl:grid-cols-3 
                     border-l border-t border-gray-200 sm:mx-0 mt-6"
        >
          {[1, 2, 3, 4].map((n) => (
            <PlaylistCard
              key={n}
              playlist={{
                id: n,
                title: "Call of the Mastodon",
                thumbnail: "/images/playlist-cover.png",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
