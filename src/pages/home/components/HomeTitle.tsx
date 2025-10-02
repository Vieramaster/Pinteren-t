import { HOME_TITLES } from "../data/HOME_TITLES";

type HomeTitleProps = {
  stateIndex: number;
  cycleMs: number;
};

export const HomeTitle = ({ stateIndex, cycleMs }: HomeTitleProps) => {

  if (!HOME_TITLES || !Array.isArray(HOME_TITLES))
    throw new Error("The array HOME_TTILES does not exist or is empty");
  
  const item = HOME_TITLES[stateIndex];

  if (!item) throw new Error("The array HOME_TTILES is empty");

  const { color, title } = item;

  return (
    <div className="w-full   h-1/3 font-semibold flex flex-col justify-center items-center gap-4 text-3xl md:text-4xl lg:text-5xl">
      <h1>Discover your next</h1>
      <h2
        className={`${color} card`}
        style={{ ["--cycle"]: `${cycleMs}ms` } as React.CSSProperties}
      >
        {title}
      </h2>
    </div>
  );
};
