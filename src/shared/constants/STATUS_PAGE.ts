import { ErrorIllustration } from "../../assets/illustrations/ErrorIllustration";
import { EmptySearchIllustration } from "../../assets/illustrations/EmptySearchIllustration";
import { NotFoundIllustration } from "../../assets/illustrations/NotFoundIllustration";

/**
 * STATUS_PAGES
 *
 * @description Objeto que centraliza la configuración de los distintos estados de las páginas
 * que usan el componente StatusPage. Permite pasar todos los datos necesarios
 * (variant, Illustration, title, message) de manera centralizada y reutilizable.
 *
 * Keys disponibles:
 * - `fetchError`: se usa cuando ocurre un error al cargar los datos
 * - `empty`: se usa cuando la búsqueda no devuelve resultados
 * - `errorPage`: se usa para páginas de error genéricas como 404
 *
 * Cada key contiene:
 * @property {variant }  - tipo de estado para aplicar estilos o lógica
 * @property {Illustration}  - componente de ilustración asociado al estado
 * @property { title }  - título descriptivo del estado
 * @property { message }  - mensaje adicional explicativo
 *
 *
 * @example
 * ```ts
 * import { STATUS_PAGES } from "./data/statusPages";
 *
 * <StatusPage {...STATUS_PAGES.fetchError} />
 * ```
 *@remarks
 * - Evita duplicación de JSX y props en múltiples páginas
 * - Facilita mantenimiento y escalabilidad
 * - Centraliza todos los mensajes de estado en un solo lugar
 */

export const STATUS_PAGES = {
  fetchError: {
    variant: "error",
    Illustration: ErrorIllustration,
    title: "Something went wrong",
    message: "We couldn’t load the gallery. Please try again.",
  },
  empty: {
    variant: "empty",
    Illustration: EmptySearchIllustration,
    title: "No results found",
    message:
      "Try adjusting your filters or using different keywords. A small change in your search can make all the difference.",
  },
  errorPage: {
    variant: "error",
    Illustration: NotFoundIllustration,
    title: "404 - Page Not Found",
    message: "The page you are looking for does not exist.",
  },
} as const;
