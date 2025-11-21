
/**
 * SearchIco
 *
 * @description Componente SVG que representa el logotipo de la aplicación.
 *
 * @param props - Propiedades SVG estándar que se pueden pasar al componente.
 *
 * @remarks
 * - El SVG tiene un tamaño de 290x314 unidades y contiene un solo grupo con un
 *   camino que define la forma del logotipo.
 *
 * @returns JSX.Element que representa el logotipo en formato SVG.
 */

interface SearchIcoProps { 
  props: React.SVGProps<SVGSVGElement>;
} 
export const SearchIco = ({ ...props }: SearchIcoProps) => {
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
