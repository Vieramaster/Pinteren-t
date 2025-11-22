//TYPES
import type {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import type { Photos } from "pexels";
//HOOKS
import { useEffect } from "react";


/**
 * useInfiniteScroll
 * 
 * @description Este hook utiliza la API de Intersection Observer para detectar
 * cuando un elemento sentinel entra en el viewport. Al detectarlo, y si hay más
 * páginas para cargar y no se está cargando ya una página, se llama a la función
 * 
 * @param sentinel - Referencia al elemento DOM que actúa como sentinel para el scroll infinito.
 * @param hasNextPage - Indica si hay más páginas disponibles para cargar.
 * @param isFetchingNextPage - Indica si ya se está cargando la siguiente página.
 * @param fetchNextPage - Función que se llama para cargar la siguiente página de datos.
 * 
 * @remarks
 * - El hook configura un Intersection Observer en el elemento sentinel.
 * - Cuando el sentinel entra en el viewport, se verifica si hay más páginas
 *   y si no se está cargando ya una página antes de llamar a fetchNextPage.
 * - El observer se limpia automáticamente cuando el componente se desmonta o
 *   cuando cambian las dependencias.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @see https://tanstack.com/query/v4/docs/react/guides/infinite-queries
 * 
 */


export interface InfiniteScrollConfig {
  sentinel: React.RefObject<HTMLDivElement | null>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<InfiniteData<Photos, unknown>, Error>>
}


export const useInfiniteScroll = ({
  sentinel,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollConfig) => {
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          void fetchNextPage();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [sentinel, hasNextPage, isFetchingNextPage, fetchNextPage]);
}
 