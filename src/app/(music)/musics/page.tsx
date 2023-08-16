import { Container } from "@/components/common/Container";
import { DataTable } from "./DataTable";
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

export default function MusicsPage() {
  return (
    <section id="musics" aria-label="musics">
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Available musics
        </h1>
        <div className="mt-8">
          <DataTable columns={columns} data={data} />
        </div>
      </Container>
    </section>
  );
}
