import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";
import { RootLayout } from "../layout/base/RootLayout";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import HydratatePage from "../pages/Hydratate/HydratatePage";

/**
 * Router
 * 
 * @description Configuración del router utilizando react-router v6 con carga diferida (lazy loading)
 * para las páginas principales de la aplicación.
 * 
 * @remarks
 * - La función `awaitDefault` se utiliza para cargar los componentes de las páginas de forma diferida.
 * - Se define una ruta raíz ("/") que utiliza `RootLayout` como componente contenedor.
 * - Se configuran rutas hijas para la página de inicio, página no encontrada (404), página de descubrimiento
 *   y página de galería de imágenes.
 * - Cada ruta hija utiliza la carga diferida para optimizar el rendimiento de la aplicación.
 * 
 * @see createBrowserRouter - Función de react-router para crear un router basado en el historial del navegador.
 * @see RootLayout - Componente de diseño principal que envuelve las páginas hijas.
 * @see NotFoundPage - Página que se muestra para rutas no encontradas (404). 
 * @see HydratatePage - Página que maneja la hidratación de datos para React Query.
 * 
 * @returns Router configurado para la aplicación.
 * 
 */

export const awaitDefault =
  (importer: () => Promise<{ default: ComponentType }>) => async () => {
    const { default: Component } = await importer();
    return { Component };
  };

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: NotFoundPage,
    HydrateFallback: HydratatePage,
    children: [
      {
        index: true,
        lazy: awaitDefault(() => import("../pages/home/HomePage")),
      },
      {
        path: "*",
        lazy: awaitDefault(() => import("../pages/not-found/NotFoundPage")),
      },
      {
        path: "/Discover",
        lazy: awaitDefault(() => import("../pages/discover/DiscoverPage")),
      },
      {
        path: "/images/:photos",
        lazy: awaitDefault(() => import("../pages/gallery/GalleryPage")),
      },
    ],
  },
]);
