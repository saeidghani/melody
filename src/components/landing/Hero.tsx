import { Container } from "../common/Container";
import { Posters } from "./Posters";
import { StartButton } from "./StartButton";

export function Hero() {
  return (
    <Container
      className="grid grid-cols-1 lg:grid-cols-2 
                 gap-6 place-items-center"
    >
      <div className="flex flex-col items-center lg:items-start gap-6">
        <h1
          className="font-display font-medium tracking-tight text-gray-900 
                     max-lg:text-center text-5xl lg:text-6xl xl:text-7xl"
        >
          Find your favorite <br className="max-lg:hidden" /> musics{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">easier</span>
          </span>{" "}
        </h1>
        <p className="text-lg tracking-tight text-gray-700 max-lg:text-center">
          collection of the most popular musics
        </p>
        <StartButton />
      </div>
      <div className="relative flex justify-center">
        <Posters />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 
                     bg-gradient-to-b from-white to-transparent z-10"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 
                     bg-gradient-to-t from-white to-transparent z-10"
        />
      </div>
    </Container>
  );
}
