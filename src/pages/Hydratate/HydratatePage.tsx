import { MainLayout } from "../../layout/base/MainLayout";
/**
 * HydratatePage
 *
 * @description Página de hidratación que muestra un indicador de carga mientras la aplicación se prepara.
 *
 * @see MainLayout - Layout principal que envuelve el contenido de la página.
 * @remarks
 * - Muestra un spinner animado y mensajes informativos para el usuario.
 *
 * @returns El elemento principal de la página de hidratación.
 */

const HydratatePage = () => {
  return (
    <MainLayout className="h-screen">
      <div className=" h-[90%] flex items-center justify-center bg-surface  ">
        <div className="text-center space-y-6">
          <div className="size-24 border-4 border-t-brand border-soft rounded-full animate-spin mx-auto"></div>
          <div className="text-brand font-semibold text-4xl opacity-90 animate-fadeIn">
            Almost There...
          </div>
          <article className="text-detail text-sm opacity-80 animate-fadeIn">
            <p>We're getting everything ready for you...</p>
            <p>Sit tight for just a moment.</p>
          </article>
        </div>
      </div>

      <div className="bg-soft text-center  font-mono  h-[10%] text-detail flex items-center justify-center p-4">
        <p className="">Appreciate your patience. Almost there!</p>
      </div>
    </MainLayout>
  );
};

export default HydratatePage;
