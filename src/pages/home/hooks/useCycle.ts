import { useEffect, useState } from "react";

/** Avanza un índice cada `ms` dentro de [0, length). */
export const useCycle = (length: number, ms: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 0) return;

    const id = window.setInterval(() => {
      setIndex((p) => (p + 1) % length);
    }, ms);

    return () => window.clearInterval(id);
  }, [length, ms]);

  return index;
};
