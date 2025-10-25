/**
 * MainLayout
 *
 * @description Componente contenedor principal de las páginas.
 * Aplica estilos globales de <main> para mantener consistencia:
 * - Full width
 * - Altura mínima de pantalla
 * - Padding superior (para headers fijos)
 * - Flex column para organizar contenido verticalmente
 *
 * @param children - Contenido de la página a renderizar dentro del layout
 * @param className - Clases adicionales de Tailwind (opcional)
 *
 * @remarks Se puede reutilizar en cualquier página que necesite este layout base.
 *
 * @returns JSX.Element: un contenedor <main> con los estilos definidos, que envuelve los children
 */
interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className = "" }: MainLayoutProps) => {
  return (
    <main className={`w-full min-h-screen bg-surface pt-20  ${className}`}>
      {children}
    </main>
  );
};
