import { SearchIco } from "../../../shared/ui/icons/SearchIco";

type HeaderSearchProps = {
  placeholder?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

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
