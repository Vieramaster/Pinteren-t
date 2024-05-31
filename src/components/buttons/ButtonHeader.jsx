export default function ButtonHeader({ text, colors }) {
  return (
    <button
      className={`${colors} px-5 py-3  rounded-3xl flex items-center gap-2 font-semibold`}
    >
      {text}
    </button>
  );
}
