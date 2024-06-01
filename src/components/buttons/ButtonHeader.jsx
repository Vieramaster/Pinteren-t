export default function ButtonHeader({ text }) {
  return (
    <button className="hidden px-5 py-3  rounded-3xl  items-center gap-2 font-semibold bg-second-color  lg:flex hover:bg-fourth-color hover:text-first-color transform">
      {text}
    </button>
  );
}
