import { Outlet } from "react-router";
import { Header } from "../header/Header";
import ErrorBoundary from "../../app/ErrorBoundary";
/**
 * RootLayout
 *
 * @description Layout base que envuelve todas las páginas de la aplicación.
 *
 * Componentes:
 * @see Header - Componente de encabezado de la aplicación.
 * @see Outlet - Componente para renderizar las rutas hijas.
 * @see ErrorBoundary - Componente para manejar errores en las rutas hijas.
 *
 * @remarks - Incluye el componente Header y un contenedor Outlet para renderizar las rutas hijas.
 *
 * @returns El layout base con el encabezado y el contenido de las rutas hijas.
 */

export const RootLayout = () => (
  <>
    <Header />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </>
);
