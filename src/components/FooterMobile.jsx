import IcoHome from "./Icons/IcoHome";
import IcoUser from "./Icons/IcoUser";
import IcoDiscover from "./Icons/IcoDiscover";
import ButtonFooter from "./buttons/ButtonFooter";

export default function FooterMobile({ setActiveComponent }) {
  return (
    <footer className="bg-first-color w-screen h-24 flex fixed  bottom-0 md:hidden border-t border-third-color">
      <ButtonFooter name={"Home"} onClick={() => setActiveComponent(1)}>
        <IcoHome size={"2rem"} color={"third-color"} />
      </ButtonFooter>
      <ButtonFooter name={"Discover"} onClick={() => setActiveComponent(2)}>
        <IcoDiscover size={"2rem"} color={"third-color"} />
      </ButtonFooter>
      <ButtonFooter name={"User"} onClick={() => setActiveComponent(4)}>
        <IcoUser size={"2rem"} color={"third-color"} />
      </ButtonFooter>
    </footer>
  );
}
