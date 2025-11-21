import { useInfiniteQuery } from "@tanstack/react-query";
import type { Photos } from "pexels"; // este es el tipo que devuelve client.photos.search()

/**
 * useFetchPexels
 *
 * @description Función que realiza la llamada a la API de Pexels para obtener imágenes
 * basadas en una consulta y un número de página específico.
 *
 * @param queryKey - Término de búsqueda para las imágenes.
 * @param pageParam - Número de página para la paginación.
 *
 * @remarks
 * - Utiliza fetch para hacer una solicitud GET a un endpoint local que actúa como proxy para la API de Pexels.
 * - Lanza un error si la respuesta no es exitosa.
 * - Devuelve una promesa que resuelve con los datos de las fotos en el formato definido por el tipo Photos.
 * - Integrado con React Query para manejar la caché y el estado de la solicitud.
 * - Integrado con paginación infinita mediante useInfiniteQuery.
 *
 *
 * types:
 * @see Photos - Tipo importado de la librería "pexels" que define la estructura de la respuesta de fotos.
 * hooks:
 * @see useInfiniteQuery - Hook de React Query para manejar consultas con paginación infinita.
 *
 * API:
 * @see https://www.pexels.com/api/documentation/#photos-search
 * @see https://tanstack.com/query/v4/docs/react/guides/infinite-queries
 *
 * @returns Promesa que resuelve con los datos de las fotos obtenidas de la API de Pexels.
 */

const fetchImages = async (
  queryKey: string,
  pageParam: number
): Promise<Photos> => {
  const photoQuantity = 15;

  const res = await fetch(
    `https://fantaspic.vercel.app/api/photos?query=${queryKey}&per_page=${photoQuantity}&page=${pageParam}`
  );
  if (!res.ok) throw new Error("Error getting photos from Pexels API");

  return res.json();
};

// hook principal
export const useFetchPexels = (query = "nature") => {
  const fetch = useInfiniteQuery<Photos, Error>({
    queryKey: ["pexels", query],
    queryFn: ({ pageParam = 1 }) => fetchImages(query, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = String(lastPage.next_page);

      if (!nextPage) return undefined;
      
      const absoluteUrl = nextPage.startsWith("http")
        ? nextPage
        : `http://localhost:4000${nextPage}`;

      const pageStr = new URL(absoluteUrl).searchParams.get("page");
      return pageStr ? Number(pageStr) : undefined;
    },
  });
  const flatPhotos = fetch.data?.pages.flatMap((page) => page.photos) ?? [];

  return {
    ...fetch,
    photos: flatPhotos,
  };
};
