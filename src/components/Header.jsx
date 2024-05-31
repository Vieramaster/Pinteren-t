import IcoLogo from "./Icons/IcoLogo";
import ButtonExplore from "./buttons/ButtonExplore";
import ButtonHeader from "./buttons/ButtonHeader";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-5 px-5">
      <div className=" w-full h-20 flex gap-1  items-center flex-1">
        <IcoLogo />
        <h2 className="font-semibold text-fifth-color text-xl mr-2">
          Pinterest
        </h2>
        <ButtonExplore />
      </div>
      <fieldset className="flex-auto w-full h-12">
        <input
          type="search"
          name="search"
          className="flex-auto bg-second-color rounded-2xl w-full h-full"
        />
      </fieldset>
      <div className="flex flex-1 gap-5">
        <ButtonHeader text="Login" colors="bg-second-color" />
        <ButtonHeader
          text="Register"
          colors="bg-fifth-color text-first-color"
        />
      </div>
    </header>
  );
}
