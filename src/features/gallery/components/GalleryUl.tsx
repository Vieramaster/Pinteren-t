/**
 * GalleryUl
 *
 * @description Renderiza un contenedor <ul> para una galería de imágenes en formato Masonry.
 *
 * @param children - Elementos hijos que representan las imágenes de la galería.
 *
 * @remarks
 * - Aplica estilos CSS para columnas Masonry y espaciado.
 * - Recibe elementos hijos que representan las imágenes de la galería.
 *
 * @returns JSX.Element que muestra un contenedor <ul> con estilo Masonry.
 */

interface GalleryUlProps {
  children: React.ReactNode;
}
export const GalleryUl = ({ children }: GalleryUlProps) => {
  return (
    <ul className="columns-[25rem] p-10 gap-10" role="list">
      {children}
    </ul>
  );
};
