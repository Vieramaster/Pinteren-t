import { useInfiniteQuery } from "@tanstack/react-query"

export const useFetchPexels = (query: string) => {
  return useInfiniteQuery({
  queryKey: ["search", query],
  queryFn: ({ pageParam }) => fetch(`/api/images?search=${query}&page=${pageParam}`)
        .then(res => {
          if (!res.ok) throw new Error('Error al obtener las imágenes')
          return res.json()
        }),
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length + 1 : undefined
})
}


