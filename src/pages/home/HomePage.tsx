//HOOK
import { useCycle } from "./hooks/useCycle";
//UI
import { HomeGrid } from "./components/HomeGrid";
import { HOME_IMAGES } from "../home/data/HOME_IMAGES";
import { HomeTitle } from "./components/HomeTitle";

const CYCLE_MS = 10000; // 10s
const STAGGER_MS = 100; // 0.1s

const HomePage = () => {
  const style = useCycle(HOME_IMAGES.length, CYCLE_MS);

  return (
    <main className="w-full bg-surface h-screen pt-20 relative overflow-hidden">
      <HomeTitle stateIndex={style} cycleMs={CYCLE_MS} />
      <HomeGrid
        images={HOME_IMAGES[style] ?? []}
        cycleMs={CYCLE_MS}
        staggerMs={STAGGER_MS}
      />
    </main>
  );
};

export default HomePage;
