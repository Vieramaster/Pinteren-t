import { Link, type LinkProps } from "react-router";

/**
 * AnchorButton
 *
 * @description Componente que renderiza un Link estilizado como botón.
 *
 * @param props - Props estándar de Link (react-router), se pasan al elemento <a>.
 *   - children: contenido dentro del botón.
 *
 * Componente:
 * @see Link - Componente de React Router que permite navegar entre rutas sin recargar la página.
 * Type:
 * @see LinkProps - Describe las props que acepta Link. Esencialmente es: props estándar de un <a> (className, style, target, rel, children, onClick, aria-*, ref, etc.) + extras de React Router para navegación SPA
 *
 * @remarks
 * - El componente aplica clases Tailwind por defecto; si pasás className se añade al final.
 * - Usar forwardRef permite que se pueda acceder al elemento nativo si hace falta.
 * - No introduce lógica extra; es puramente presentacional.
 *
 * @example
 * <AnchorButton to="/login">Iniciar sesión</AnchorButton>
 *
 * @returns JSX.Element que representa un enlace con apariencia de botón.
 */

export const AnchorButton = ({ ...props }: LinkProps) => (
  <Link
    {...props}
    className="bg-brand text-surface  
                h-12 px-4   rounded-2xl 
                flex gap-2 justify-center items-center 
                font-semibold  duration-200 cursor-pointer  
                hover:opacity-95 active:translate-y-0.5"
  >
    {props.children}
  </Link>
);
