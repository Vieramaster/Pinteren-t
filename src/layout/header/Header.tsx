import { Link, useNavigate } from "react-router";
import { LogoIco } from "../../assets/icons/LogoIco";
import { HeaderSearch } from "./components/HeaderSearch";
import { AnchorButton } from "../../shared/ui/buttons/AnchorButton";
import { readSearchQuery } from "./lib/readSearchQuery";
import { DiscoverIco } from "../../shared/ui/icons/DiscoverIco";

/**
 * Header
 *
 * @description Componente Header que incluye el logo, el formulario de búsqueda y un botón de navegación.
 *
 * @remarsks - Utiliza react-router para la navegación y manejo de formularios.
 *
 * Componentes:
 * @see LogoIco - Icono del logo de la aplicación.
 * @see HeaderSearch - Componente de búsqueda en el header.
 * @see AnchorButton - Botón estilizado para navegación.
 *
 * Logica:
 * @see readSearchQuery - Función para leer y procesar la consulta de búsqueda desde el formulario.
 *
 * Librerias:
 * @see useNavigate - Hook de react-router para la navegación programática.
 * @see Link - Componente de react-router para enlaces de navegación.
 *
 * @returns JSX.Element - El componente Header completo.
 */

export const Header = () => {
  const navigate = useNavigate();
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const URL = readSearchQuery(event);
    if (!URL) return;
    navigate(`/images/${URL}`);
  };

  return (
    <header className="bg-surface fixed w-full z-20 h-20 flex justify-between items-center gap-5 px-10 ">
      <Link className="h-12  flex items-center text-center gap-1 " to={"/"}>
        <LogoIco className=" size-full " />
        <p className="hidden text-4xl text-brand font-bold md:block mb-1">
          antaspic
        </p>
      </Link>

      <HeaderSearch onSubmit={handleFormSubmit} />
      <AnchorButton to="/discover">
        <DiscoverIco className="size-[85%] fill-surface  transition-colors md:hidden" />
        <p className="hidden md:flex text-lg">Discover</p>
      </AnchorButton>
    </header>
  );
};
