
/**
 * GalleryArticle
 *
 * @description Componente que muestra la informacion de la imagen, incluyendo el nombre del fotógrafo y una descripción alternativa.
 *
 * @param photographer — nombre del fotógrafo.
 * @param photographer_url — URL del perfil del fotógrafo.
 * @param alt — texto alternativo o descripción de la imagen.
 *
 * @returns JSX.Element que representa parte inferior de la card de imagen en la galería.
 *
 */

interface GalleryArticleProps {
  photographer: string;
  photographer_url: string;
  alt: string;
}


export const GalleryArticle = ({
  photographer,
  photographer_url,
  alt,
}: GalleryArticleProps) => {
  return (
    <article className="w-full p-4 bg-soft">
      <h3 className="mb-3 font-semibold text-brand">
        Autor:
        <a
          className="ml-1 underline underline-offset-2"
          href={photographer_url ?? ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          {photographer ?? "unknown"}
        </a>
      </h3>

      <p className="italic">{alt ?? "alt not found"}</p>
    </article>
  );
};
