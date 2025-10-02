// HomeGrid.tsx
import type { ImagePair } from "../types/home";
import { HomeCardItem } from "./HomeCardItem";

type HomeGridProps = {
  images: ImagePair[];
  cycleMs: number;
  staggerMs: number;
};

const cardClass = [
  "hidden 2xl:flex",
  "hidden md:flex 2xl:translate-y-35",
  "md:translate-y-10 2xl:translate-y-15",
  "translate-y-15 md:translate-y-25 2xl:md:translate-y-35",
  "md:translate-y-10 2xl:translate-y-15",
  "hidden md:flex 2xl:translate-y-35",
  "hidden 2xl:flex",
] as const;

export function HomeGrid({ images, cycleMs, staggerMs }: HomeGridProps) {
  return (
    <>
      <span className="w-full bg-linear-to-b from-surface to-transparent absolute lg:h-32 z-20" />
      <ul className="grid gap-4 lg:gap-8 grid-cols-3 md:grid-cols-5 2xl:grid-cols-7 h-2/3 px-8 overflow-hidden shadow-ul-homepage">
        {images.map((item, index) => (
          <HomeCardItem
            key={index}
            objectItem={item}
            index={index}
            cycleMs={cycleMs}
            staggerMs={staggerMs}
            className={cardClass[index] ?? ""}
          />
        ))}
      </ul>
    </>
  );
}
