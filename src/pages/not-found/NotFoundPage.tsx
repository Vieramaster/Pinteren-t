import { useRouteError } from "react-router";
import { StatusPage } from "../../shared/components/StatusPage";
import { NotFoundIllustration } from "./Illustrations/NotFoundIllustration";

/**
 * NotFoundPage
 *
 * @description Página que se muestra cuando la ruta no existe (404). Muestra
 * una ilustración a la izquierda y el texto de error a la derecha usando "StatusPage".
 *
 * Componentes:
 * @see StatusPage: componente presentacional que recibe una ilustración SVG y texto.
 * @see NotFoundIllustration: componente SVG que implementa "React.SVGProps<SVGSVGElement>".
 *
 * @remarks
 * - Usa "useRouteError()" para obtener el mensaje real del error si existe.
 * - "StatusPage" se renderiza con `variant="error"`; si querés diferenciar 404 de otros errores,
 *   podés usar `variant="empty"` o crear un "" específico.
 *
 * @returns JSX.Element que representa la página 404 / error.
 */

const NotFoundPage = () => {
  const error = useRouteError() as { message?: string } | null;
  const message =
    error?.message ?? "An error occurred while loading this page.";

  return (
    <StatusPage
      variant="error"
      Illustration={NotFoundIllustration}
      title="Error 404"
      message={String(message)}
    />
  );
};
export default NotFoundPage;
