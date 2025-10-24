/**
 * Hook personalizado de React para obtener imágenes de Pexels vía un proxy local (`/api/images`)
 * usando useInfiniteQuery de React Query para paginación.
 *
 * Este hook realiza peticiones a `/api/images?search=${query}&page=${pageParam}` y espera que
 * cada página responda con un array de objetos Photo. La paginación comienza en la página 1 y
 * seguirá solicitando páginas mientras la última página devuelta contenga elementos.
 *
 * @param query - Término de búsqueda para las imágenes. Se usa como el parámetro `search`
 *                al llamar al endpoint local `/api/images`.
 *
 * @returns Un UseInfiniteQueryResult con la forma de datos InfiniteData<Photo, unknown>,
 *          donde cada página es un array de objetos Photo. El resultado expone los campos y
 *          métodos estándar de las queries infinitas de React Query, por ejemplo:
 *          - data: { pages: Photo[][], pageParams: number[] } | undefined
 *          - fetchNextPage(): Promise<...>
 *          - hasNextPage: boolean | undefined
 *          - isFetching, isFetchingNextPage, isError, error, status, etc.
 *
 * @remarks
 * - initialPageParam está en 1.
 * - getNextPageParam determina la siguiente página como `allPages.length + 1` cuando la
 *   última página contiene al menos un Photo. Si la última página está vacía, no se pedirán
 *   más páginas (es decir, hasNextPage será false/undefined).
 * - Si la respuesta del fetch no es OK, la función de la query lanza un Error (mensaje:
 *   "Error al obtener las imágenes") lo cual pondrá el hook en estado de error y hará que
 *   el error sea accesible desde el resultado devuelto.
 *
 * @throws Error - Si el fetch a `/api/images` devuelve una respuesta no OK, la función de
 *                 la query lanza un Error y el hook lo refleja en su estado de error.
 *
 * @example
 * function Gallery({ term }: { term: string }) {
 *   const {
 *     data,
 *     fetchNextPage,
 *     hasNextPage,
 *     isFetchingNextPage,
 *     status,
 *     error
 *   } = useFetchPexels(term);
 *
 *   if (status === "loading") return <div>Loading...</div>;
 *   if (status === "error") return <div>Error: {String(error)}</div>;
 *
 *   return (
 *     <div>
 *       {data?.pages.flat().map(photo => (
 *         <img key={photo.id} src={photo.src.medium} alt={photo.alt} />
 *       ))}
 *       <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
 *         Load more
 *       </button>
 *     </div>
 *   );
 * }
 */

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
