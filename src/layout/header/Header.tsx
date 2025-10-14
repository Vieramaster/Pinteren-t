import { Link, useNavigate } from "react-router";
import { LogoIco } from "../../shared/ui/icons/LogoIco";
import { HeaderSearch } from "./components/HeaderSearch";
import { AnchorButton } from "../../shared/ui/buttons/AnchorButton";
import { readSearchQuery } from "./lib/readSearchQuery";

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
        <p>Discover</p>
      </AnchorButton>
    </header>
  );
};
