import { getMusics } from "@/api/musics";
import { getPlaylists } from "@/api/playlist";
import { Container } from "@/components/common/Container";
import MusicsTable from "./MusicsTable";
import { SearchInput } from "./SearchInput";

type MusicsPageProps = {
  searchParams: {
    page: string;
    search: string;
  };
};

export default async function MusicsPage({ searchParams }: MusicsPageProps) {
  const { page = "1", search = "" } = searchParams;
  const musics = await getMusics(page, search);
  const playlists = await getPlaylists();
  console.log(musics?.result?.items?.at(0));
  return (
    <section id="musics" aria-label="musics">
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Available musics
        </h1>
        <div className="grid gap-4 mt-8">
          <SearchInput />
          <MusicsTable
            musics={musics?.result?.items}
            playlists={playlists?.result?.items}
          />
        </div>
      </Container>
    </section>
  );
}
