import { useInfiniteQuery } from "@tanstack/react-query";
import type { PhotosWithTotalResults } from "pexels";

/**
 * Custom React hook to fetch paginated photo search results from the Pexels API using React Query's `useInfiniteQuery`.
 *
 * @param query - The search query string to filter photos.
 * @param perPage - Number of photos to fetch per page (default is 12).
 * @returns An infinite query object containing paginated photo data, including a flattened array of all photos (`allPhotos`).
 *
 * @remarks
 * - Pagination is handled automatically; use `fetchNextPage` from the returned query object to load more results.
 * - The query is enabled only when `q` is truthy.
 * - Results are considered fresh for 15 seconds (`staleTime`).
 */
export function useFetchPexels(query: string, perPage = 12) {
  return useInfiniteQuery({
    queryKey: ["pexels", "search", query, perPage],

    initialPageParam: 1,

    queryFn: ({ pageParam, signal }) =>
      fetchPexelsPage(query, pageParam, perPage, signal),

    getNextPageParam: (lastPage) => {
      const { page, per_page, total_results } = lastPage;
      const totalPages = Math.ceil(total_results / per_page);
      return page < totalPages ? page + 1 : undefined; // undefined => no hay más
    },

    select: (data) => ({
      ...data,
      allPhotos: data.pages.flatMap((p) => p.photos ?? []),
    }),

    enabled: !!query,
    staleTime: 15_000,
  });
}

const fetchPexelsPage = async (
  query: string,
  pageParam: number,
  perPage: number,
  signal: AbortSignal
): Promise<PhotosWithTotalResults> => {
  const url = `/api/pexels-backend?q=${encodeURIComponent(
    query
  )}&page=${pageParam}&per_page=${perPage}`;
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};
