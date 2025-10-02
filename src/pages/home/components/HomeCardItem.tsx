// HomeCardItem.tsx
import type { ImagePair } from "../types/home";

type Props = {
  objectItem: ImagePair;
  index: number;
  cycleMs: number;
  staggerMs: number;
  className?: string;
};

export const HomeCardItem = ({
  objectItem,
  index,
  cycleMs,
  staggerMs,
  className,
}: Props) => (
  <li
    className={`flex flex-col gap-4 card ${className ?? ""}`}
    style={
      {
        ["--cycle"]: `${cycleMs}ms`,
        ["--delay"]: `${index * staggerMs}ms`,
      } as React.CSSProperties
    }
  >
    {objectItem.map((src, i) => (
      <img
        key={i}
        src={src}
        alt="card"
        className="size-full object-cover rounded-2xl"
        loading="lazy"
      />
    ))}
  </li>
);
