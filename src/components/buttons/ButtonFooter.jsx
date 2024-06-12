export default function ButtonFooter({children, name, onClick}) { // Cambia 'onclick' a 'onClick'
  return (
    <button name={name} className="h-full flex-1 grid place-content-center " onClick={onClick}>
      {children}
    </button>
  );
}
