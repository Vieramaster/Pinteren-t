import { useState } from "react";
import IcoLogo from "./Icons/IcoLogo";
import IcoSearch from "./Icons/IcoSearch";

import ButtonExplore from "./buttons/ButtonExplore";
import ButtonHeader from "./buttons/ButtonHeader";

export default function Header({
  setSearchValue,
  setActiveComponent,
  activeComponent,
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchValue(search);
    }
  };

  return (
    <header className="fixed z-50 w-full h-20 flex justify-between items-center gap-5 px-5 bg-first-color">
      <div className="  flex gap-1  items-center flex-1">
        <IcoLogo size={"2rem"} />
        <h2 className="font-semibold text-fifth-color text-xl mr-2 hidden sm:flex">
          Pinteren't
        </h2>
        <ButtonExplore className={"hidden md:flex lg:hidden"} />
      </div>
      <ButtonHeader
        text="Home"
        number={1}
        result={activeComponent}
        onClick={() => setActiveComponent(1)}
      />
      <ButtonHeader
        text="Discover"
        number={2}
        result={activeComponent}
        onClick={() => setActiveComponent(2)}
      />

      <fieldset className="flex-auto w-full h-12 relative">
        <input
          type="search"
          name="search"
          autoComplete="off"
          placeholder="I'm looking for ..."
          className="flex-auto bg-second-color rounded-2xl w-full h-full focus:outline-none focus:ring-4 px-14"
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearch}
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
