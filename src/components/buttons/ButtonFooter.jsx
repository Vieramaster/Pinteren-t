

export default function ButtonFooter({children, name}) {
  return (
    <button name={name} className="h-full flex-1 grid place-content-center ">
      {children}
    </button>
  );
}
