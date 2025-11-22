import { useEffect, useState } from "react";

/**
 * useCycle
 *
 * @description Hook que cicla un índice de 0.. hasta la longitud del array pedido
 *
 * @param lengthCard - Número de grillas (longitud del ciclo).
 * @param totalTime - Tiempo en ms entre cada cambio de índice.
 *
 * @remarks
 * - Si `index` supera la longitud de `lenghtCard`, se reestablece en 0 para volver a iniciar el ciclo nuevamente.
 *
 * @example
 *  const variable = useCycle(array.length, 5000) // cambia la grilla cada 5 seg
 *
 * @returns number - Índice actual del ciclo, entre 0 y lengthCard - 1.
 */

export const useCycle = (lengthCard: number, totalTime: number) => {
  const [index, setIndex] = useState(0);

  if (index > lengthCard - 1) setIndex(0);
  useEffect(() => {
    if (lengthCard <= 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, totalTime);
    // se limpia
    return () => window.clearInterval(interval);
  }, [lengthCard, totalTime, index]);

  return index;
};
