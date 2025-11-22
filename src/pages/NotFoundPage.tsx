import { StatusPage } from "../shared/components/StatusPage";

import { STATUS_PAGES } from "../shared/constants/STATUS_PAGE";
/**
 * NotFoundPage
 *
 * @description Página que se muestra cuando la ruta no existe (404). Muestra
 * una ilustración a la izquierda y el texto de error a la derecha usando "StatusPage".
 *
 * Componentes:
 * @see StatusPage: componente presentacional que recibe una ilustración SVG y texto.
 * @see STATUS_PAGES: datos predefinidos para diferentes estados de página (error, vacío, carga).
 *
 * @remarks - Esta página se utiliza para manejar rutas no encontradas en la aplicación.
 *
 * @returns JSX.Element que representa la página 404 / error.
 */

const NotFoundPage = () => {
  return <StatusPage {...STATUS_PAGES.errorPage} />;
};
export default NotFoundPage;
