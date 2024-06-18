export default function ButtonHeader({
  text,
  number,
  result,
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`hidden px-5 py-3  rounded-3xl  items-center gap-2 font-semibold  ${className} ${
        result === number
          ? "bg-fourth-color text-first-color"
          : "bg-second-color text-fourth-color"
      }`}
    >
      {text}
    </button>
  );
}
