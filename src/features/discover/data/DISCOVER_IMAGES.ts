/**
 * DISCOVER_IMAGES
 *
 * @description Colección de objetos que representan imágenes disponibles en la sección Discover,
 * cada una con su URL y título correspondiente.
 *
 * @remarks
 * - Se usa en el componente Discover para renderizar una lista estándar de tarjetas.
 * - Cada objeto debe tener las propiedades:
 *     - imageUrl: string, ruta relativa a la imagen en /public.
 *     - title: string, título descriptivo de la categoría.
 * - No se espera que este array cambie en tiempo de ejecución.
 *
 * @example
 * <DiscoverCardList images={DISCOVER_IMAGES} />
 *
 * @see DiscoverCardList in src/pages/discover/components
 */

type discoverImages = {
  imageUrl: string;
  title: string;
};

export const DISCOVER_IMAGES: discoverImages[] = [
  { imageUrl: "/images/discover/abstract.webp", title: "Abstract" },
  { imageUrl: "/images/discover/art.webp", title: "Art" },
  { imageUrl: "/images/discover/cats.webp", title: "Cats" },
  { imageUrl: "/images/discover/comics.webp", title: "Comics" },
  { imageUrl: "/images/discover/games.webp", title: "Video Games" },
  { imageUrl: "/images/discover/ia-image.webp", title: "IA Images" },
  { imageUrl: "/images/discover/lifestyle.webp", title: "Lifestyle" },
  { imageUrl: "/images/discover/nature.webp", title: "Nature" },
  { imageUrl: "/images/discover/photography.webp", title: "Photography" },
  { imageUrl: "/images/discover/recipes.webp", title: "Recipes" },
  { imageUrl: "/images/discover/sports.webp", title: "Sports" },
  { imageUrl: "/images/discover/wallpapers.webp", title: "Wallpapers" },
];
