import IcoHome from "./Icons/IcoHome";
import IcoUser from "./Icons/IcoUser";
import IcoDiscover from "./Icons/IcoDiscover";
import ButtonFooter from "./buttons/ButtonFooter";

export default function FooterMobile() {
  return (
    <footer className="bg-first-color w-screen h-24 flex fixed  bottom-0 md:hidden">
      <ButtonFooter>
        <IcoHome size={"2rem"} color={"third-color"} />
      </ButtonFooter>
      <ButtonFooter>
        <IcoDiscover size={"2rem"} color={"third-color"} />
      </ButtonFooter>
      <ButtonFooter>
        <IcoUser size={"2rem"} color={"third-color"} />
      </ButtonFooter>
    </footer>
  );
}
