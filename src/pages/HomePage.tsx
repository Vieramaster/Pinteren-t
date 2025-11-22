//HOOK
import { useCycle } from "../features/home/hooks/useCycle";
//COMPONENTS
import { HomeGrid } from "../features/home/components/HomeGrid";
import { HOME_IMAGES } from "../features/home/data/HOME_IMAGES";
import { HomeTitle } from "../features/home/components/HomeTitle";
import { MainLayout } from "../layout/base/MainLayout";

/**
 * HomePage
 *
 * @description Página principal de introducción de la app, mostrando dos carruseles coordinados:
 * uno para el título y otro para una cuadrícula de imágenes.
 *
 * Componentes:
 * @see HomeTitle -  Muestra el título animado.
 * @see HomeGrid - Muestra la grilla de imágenes.
 * @see MainLayout - contenedor <main> con los estilos definidos.
 *
 * Hook:
 * @see useCycle - Hook personalizado que gestiona el índice actual del carrusel basado en un intervalo de tiempo.
 *
 * @remarks
 * - "CYCLE_MS" controla el tiempo total de cambio de animación de los dos carruseles.
 * - "STAGGER_MS" controla el retraso entre la animación de cada card individual.
 * - "carouselIndex" usa "useCycle" para rotar automáticamente la cuadrícula de imágenes cada 10s mediante un `setInterval`.
 * - Coordina las animaciones de `HomeTitle` y `HomeGrid` según el índice actual del carrusel.
 * - Ambos carruseles se mantienen sincronizados automáticamente a medida que el índice cambia.
 *
 * @returns El elemento principal de la página.
 */

const HomePage = () => {
  const CYCLE_MS = 10000; // 10s
  const STAGGER_MS = 100; // 0.1s
  const carouselIndex = useCycle(HOME_IMAGES.length, CYCLE_MS);

  return (
    <MainLayout className=" h-screen  relative overflow-hidden ">
      <HomeTitle currentCardBatch={carouselIndex} cycleMs={CYCLE_MS} />
      <HomeGrid
        images={HOME_IMAGES[carouselIndex] ?? []}
        currentCardBatch={carouselIndex}
        cycleMs={CYCLE_MS}
        staggerMs={STAGGER_MS}
      />
    </MainLayout>
  );
};
export default HomePage;
