import IcoArrow from "../Icons/IcoArrow";

export default function ButtonExplore({ className }) {
  return (
    <button
      className={`px-5 py-3 text-fourth-color rounded-3xl bg-second-color flex items-center gap-2 font-semibold ${className}`}
    >
      Explore
      <IcoArrow width={"1rem"} />
    </button>
  );
}
