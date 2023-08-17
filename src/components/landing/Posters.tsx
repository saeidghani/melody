import { cn } from "@/lib";
import Image from "next/image";

export function Posters() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative">
      <div className="flex items-center gap-x-6 lg:gap-x-4">
        <PosterColumn srcList={["/images/hero/song-cover-1.jpg"]} />
        <PosterColumn
          srcList={[
            "/images/hero/song-cover-2.jpg",
            "/images/hero/song-cover-3.jpeg",
          ]}
        />
        <PosterColumn
          className="max-sm:hidden"
          srcList={["/images/hero/song-cover-4.webp"]}
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
