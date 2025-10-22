import { useEffect, useState } from "react";

export const useCycle = (lengthCard: number, totalTime: number) => {
  const [index, setIndex] = useState(0);

  if (index > lengthCard - 1) setIndex(0);
  useEffect(() => {
    if (lengthCard <= 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, totalTime);

    return () => window.clearInterval(interval);
  }, [lengthCard, totalTime, index]);

  return index;
};
