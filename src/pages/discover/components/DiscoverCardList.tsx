import { Link } from "react-router";
import { DISCOVER_IMAGES } from "../data/DISCOVER_IMAGES";

export const DiscoverCardList = () => (
  <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10 p-4 ">
    {DISCOVER_IMAGES.map(({ imageUrl, title }) => (
      <li
        key={title}
        className="rounded-2xl h-[400px] overflow-hidden  group cursor-pointer duration-400"
      >
        <Link to={`/${title}`} className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="size-full object-cover duration-400 scale-101 group-hover:scale-[1.03] transform-gpu will-change-transform transition-transform"
          />
          <p className="absolute text-5xl font-semibold inset-x-0 bottom-8 text-shadow-lg  text-center text-surface  ">
            {title}
          </p>
          <span
            className="pointer-events-none absolute inset-0 bg-black/30
                         transition-opacity duration-300 ease-out
                         group-hover:opacity-0 transform-gpu will-change-transform"
          />
        </Link>
      </li>
    ))}
  </ul>
);
