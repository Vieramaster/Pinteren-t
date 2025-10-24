import type { HomeImages } from "../types/home";

/**
 * HOME_IMAGES
 *
 * Colección de imágenes usadas en HomePage.
 *
 * Estructura: [bloque1, bloque2, bloque3, bloque4] -> HomeImages
 * - Cada bloque (ImageColumn) contiene exactamente 7 pares (ImagePair).
 * - Cada par (ImagePair) es un array con 2 rutas de imagen: [rutaPrimaria, rutaSecundaria].
 *
 * Reglas / expectativas:
 * - Cada ImageColumn debe tener exactamente 7 ImagePair.
 * - Cada ImagePair debe contener exactamente 2 rutas válidas (strings).
 * - Las rutas son relativas a `/public`.
 *
 * Ejemplo:
 * const firstPair: ImagePair = HOME_IMAGES[0][0];
 * const srcPrimary = HOME_IMAGES[1][3][0]; // bloque 2, fila 4, primera ruta
 *
 * @type {HomeImages}
 */
export const HOME_IMAGES: HomeImages = [
  [
    ["images/home/deco1.webp", "images/home/deco2.webp"],
    ["images/home/deco3.webp", "images/home/deco4.webp"],
    ["images/home/deco5.webp", "images/home/deco6.webp"],
    ["images/home/deco7.webp", "images/home/deco8.webp"],
    ["images/home/deco9.webp", "images/home/deco10.webp"],
    ["images/home/deco11.webp", "images/home/deco12.webp"],
    ["images/home/deco13.webp", "images/home/deco14.webp"],
  ],
  [
    ["images/home/food1.webp", "images/home/food2.webp"],
    ["images/home/food3.webp", "images/home/food4.webp"],
    ["images/home/food5.webp", "images/home/food6.webp"],
    ["images/home/food7.webp", "images/home/food8.webp"],
    ["images/home/food9.webp", "images/home/food10.webp"],
    ["images/home/food11.webp", "images/home/food12.webp"],
    ["images/home/food13.webp", "images/home/food14.webp"],
  ],
  [
    ["images/home/children1.webp", "images/home/children2.webp"],
    ["images/home/children3.webp", "images/home/children4.webp"],
    ["images/home/children5.webp", "images/home/children6.webp"],
    ["images/home/children7.webp", "images/home/children8.webp"],
    ["images/home/children9.webp", "images/home/children10.webp"],
    ["images/home/children11.webp", "images/home/children12.webp"],
    ["images/home/children13.webp", "images/home/children14.webp"],
  ],
  [
    ["images/home/style1.webp", "images/home/style2.webp"],
    ["images/home/style3.webp", "images/home/style4.webp"],
    ["images/home/style5.webp", "images/home/style6.webp"],
    ["images/home/style7.webp", "images/home/style8.webp"],
    ["images/home/style9.webp", "images/home/style10.webp"],
    ["images/home/style11.webp", "images/home/style12.webp"],
    ["images/home/style13.webp", "images/home/style14.webp"],
  ],
];
