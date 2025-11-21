//TYPES
import type { ComponentType } from "react";
/**
 * PageStatus
 *
 * Componente presentacional para mostrar un estado vacío, errores en API, o 404 / not found
 *
 * @param variant : determina si el componente se usa para el estado vacio del fetch o su error.
 * @param Illustration - Componente SVG que se mostrará según el contexto.
 * @param title - Título del mensaje.
 * @param message - Mensaje descriptivo del estado vacío.
 *
 * @example
 * <GalleryEmpty
 *   variant="emply"
 *   Illustration={EmptySearchIllustration}
 *   title="No results found!"
 *   message="Try adjusting your filters or using different keywords."
 * />
 * 
 * @returns JSX.Element que representa la página de estado.
 */

interface StatusPageProps {
  variant: "empty" | "error";
  Illustration: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  message: string | undefined;
}
export const StatusPage = ({
  Illustration,
  title,
  message,
  variant,
}: StatusPageProps) => (
  <main
    className="w-full min-h-screen flex items-center justify-center pt-20 bg-surface"
    role={variant === "error" ? "alert" : "region"}
    aria-live={variant === "error" ? "assertive" : "polite"}
    aria-label={variant === "error" ? "Error loading page" : "No results found"}
  >
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[75rem]">
      {/* Ilustracion SVG*/}
      <Illustration className="w-full md:w-1/2 h-auto" aria-hidden="true" />
      {/*  datos */}
      <article className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
        <h2
          className="text-brand font-bold mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {title}
        </h2>
        <p
          className="text-detail m-auto"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}
        >
          {message || "Please try again later."}
        </p>
      </article>
    </div>
  </main>
);
