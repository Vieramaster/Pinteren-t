import { useInfiniteQuery } from "@tanstack/react-query";
import type { Photo } from "pexels";
import type { InfiniteData } from "@tanstack/react-query";
import type { UseInfiniteQueryResult } from "@tanstack/react-query";

export const useFetchPexels = (
  query: string
): UseInfiniteQueryResult<InfiniteData<Photo, unknown>> => {
  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam }) =>
      fetch(`/api/images?search=${query}&page=${pageParam}`).then((res) => {
        if (!res.ok) throw new Error("Error al obtener las imágenes");
        return res.json();
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length + 1 : undefined,
  });
};
