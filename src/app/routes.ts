import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";
import { RootLayout } from "../layout/RootLayout";
import ErrorPage from "../pages/404/ErrorPage";

export const awaitDefault =
  (importer: () => Promise<{ default: ComponentType }>) => async () => {
    const { default: Component } = await importer();
    return { Component };
  };

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        lazy: awaitDefault(() => import("../pages/home/HomePage")),
      },
      {
        path: "*",
        lazy: awaitDefault(() => import("../pages/404/ErrorPage")),
      },
      {
        path: "/Discover",
        lazy: awaitDefault(() => import("../pages/discover/DiscoverPage")),
      },
      {
        path: "/images/:photos",
        lazy: awaitDefault(
          () => import("../pages/photo-gallery/PhotoGalleryPage")
        ),
      },
    ],
  },
]);
