/** Tipo: par de rutas de imagen (p. ej. variante A / variante B) */
export type ImagePair = [string, string];

/** Tipo: columna con 7 pares (una columna en la grid) */
export type ImageColumn = [
  ImagePair,
  ImagePair,
  ImagePair,
  ImagePair,
  ImagePair,
  ImagePair,
  ImagePair
];

/** Tipo: colección de 4 columnas (bloques que ciclan en el home) */
export type HomeImages = [ImageColumn, ImageColumn, ImageColumn, ImageColumn];
