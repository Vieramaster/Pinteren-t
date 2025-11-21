import { SearchIco } from "../../../assets/icons/SearchIco";

type HeaderSearchProps = {
  placeholder?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

/**
 * HeaderSearch
 *
 * @description Componente de búsqueda en el Header de la aplicación.
 *
 * @param placeholder - Texto que se muestra cuando el campo de búsqueda está vacío. Valor por defecto: "I'm looking for ...".
 *
 * @see SearchIco Icono de búsqueda utilizado dentro del input.
 *
 * @remarks - Proporciona un formulario accesible con un input estilizado y un icono de búsqueda.
 *
 * @returns JSX.Element - Formulario de búsqueda con un input estilizado y un icono.
 */

export const HeaderSearch = ({
  placeholder = "I'm looking for ...",
  onSubmit,
}: HeaderSearchProps) => {
  return (
    <form
      role="search"
      aria-label="Site search"
      className="flex-auto h-12 relative items-center"
      onSubmit={onSubmit}
    >
      <input
        id="site-search"
        name="query"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        className="flex-auto bg-soft rounded-2xl w-full h-full px-14
                   focus:outline-hidden focus:ring-2 focus:ring-brand duration-200
                   [&::-webkit-search-cancel-button]:appearance-none"
      />
      <span
        className="absolute left-2 inset-y-0 grid place-items-center pointer-events-none"
        aria-hidden="true"
      >
        <SearchIco className="size-5/6 m-auto" />
      </span>

      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
};
