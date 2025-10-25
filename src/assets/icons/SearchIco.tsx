/**
 * SearchIco
 *
 * @description Renderiza la imagen de una lupa (search).
 *
 * @param props - Props SVG estándar que se pasan al elemento raíz <svg> (por ejemplo, width, height, className, style, aria-*)
 *
 * @remarks El componente acepta todos los estandares SVG props (React.SVGProps<SVGSVGElement>) que estan en el elemento raiz <svg>, esto hace que su manejo sea mucho mas sencillo agregarles atributos como tamaño, estilos, accecibilidad y demas.
 *
 * @example
 * <SearchIco classname="size-2.5" arial-label="logo" />
 *
 * @returns JSX.Element que devuelve la imagen de lupa en formato SVG
 */

export const SearchIco = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#767676"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
};
