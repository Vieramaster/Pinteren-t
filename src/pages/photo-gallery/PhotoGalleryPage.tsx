import React from "react";
import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useParams } from "react-router";
import type { Photo } from "pexels";

import type { InfiniteData } from "@tanstack/react-query";

const LoadingCard = () => {
  const heights = [
    "h-[32rem]",
    "h-[43rem]",
    "h-[22rem]",
    "h-[37rem]",
    "h-[20rem]",
    "h-[14rem]",
  ];
  return (
    <ul className="columns-[25rem] p-10 gap-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <li
          key={i}
          className={`bg-soft animate-pulse break-inside-avoid mb-10 rounded-2xl  shadow-md  duration-200 ${
            heights[i % heights.length] // simple y estable
          }`}
        ></li>
      ))}
    </ul>
  );
};

const Result: React.FC<{ cardData: InfiniteData<Photo, unknown> }> = ({
  cardData,
}) => (
  <ul className="columns-[25rem] p-10 gap-10">
    {cardData.pages
      .flat()
      .map(({ url, photographer, id, photographer_url, alt }) => (
        <li key={id} className="mb-10 rounded-2xl overflow-hidden">
          <img
            src={url}
            alt={photographer}
            className="w-full h-auto object-cover"
          />
          <article className="w-full p-4 bg-soft">
            <h3 className="mb-3 font-semibold text-brand">
              Autor:
              <a
                className="ml-1 underline underline-offset-2"
                href={photographer_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {photographer}
              </a>
            </h3>

            <p className="italic">{alt}</p>
          </article>
        </li>
      ))}
  </ul>
);
const PhotoGalleryPage = () => {
  const { photos } = useParams<{ photos?: string }>();
  const query = photos ?? "";

  const { data, error, isLoading } = useFetchPexels(query);

  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      {isLoading ? (
        <LoadingCard />
      ) : error ? (
        <p className="p-6">Error...</p>
      ) : !data?.pages || data.pages.flat().length === 0 ? (
        <p className="p-6">No hay items</p>
      ) : (
        <LoadingCard />
      )}
    </main>
  );
};

export default PhotoGalleryPage;
