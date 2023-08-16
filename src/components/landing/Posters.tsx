import { cn } from "@/lib";
import Image from "next/image";

export function Posters() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative">
      <div className="flex items-center gap-x-6 lg:gap-x-4">
        <PosterColumn
          srcList={[
            "/images/hero/song-cover-1.png",
            "/images/hero/song-cover-2.png",
          ]}
        />
        <PosterColumn
          srcList={[
            "/images/hero/song-cover-3.png",
            "/images/hero/song-cover-4.png",
            "/images/hero/song-cover-5.png",
          ]}
        />
        <PosterColumn
          className="max-sm:hidden"
          srcList={[
            "/images/hero/song-cover-6.png",
            "/images/hero/song-cover-7.png",
          ]}
        />
      </div>
    </div>
  );
}

function Poster({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image
        width={150}
        height={218}
        src={src}
        alt=""
        className="object-cover object-center"
      />
    </div>
  );
}

function PosterColumn({
  srcList,
  className = "",
}: {
  srcList: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid flex-shrink-0 grid-cols-1 gap-y-4", className)}>
      {srcList.map((src, idx) => (
        <Poster key={idx} src={src} />
      ))}
    </div>
  );
}
