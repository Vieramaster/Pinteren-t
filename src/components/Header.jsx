import IcoLogo from "./Icons/IcoLogo";
import IcoSearch from "./Icons/IcoSearch";

import ButtonExplore from "./buttons/ButtonExplore";
import ButtonHeader from "./buttons/ButtonHeader";

export default function Header() {
  return (
    <header className=" w-full h-20 flex justify-between items-center gap-5 px-5 bg-first-color fixed ">
      <div className="  flex gap-1  items-center flex-1">
        <IcoLogo size={"2rem"} />
        <h2 className="font-semibold text-fifth-color text-xl mr-2 hidden sm:flex">
          Pinterest
        </h2>
        <ButtonExplore className={"hidden md:flex lg:hidden"} />
      </div>
      <ButtonHeader text="Discover" colors="" />
      <ButtonHeader text="Home" colors="bg-second-color hidden lg:flex" />
      <fieldset className="flex-auto w-full h-12 relative">
        <input
          type="search"
          name="search"
          className="flex-auto bg-second-color rounded-2xl w-full h-full focus:outline-none focus:ring-4 px-14"
        />
        <span className="absolute top-2 left-2">
          <IcoSearch />
        </span>
      </fieldset>

      <button className="px-5 py-3  rounded-3xl  items-center gap-2 font-semibold bg-fifth-color text-first-color hidden md:flex">
        Login
      </button>
    </header>
  );
}
