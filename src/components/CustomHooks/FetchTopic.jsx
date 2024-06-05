import { useEffect } from "react";
import { createApi } from "unsplash-js";

export default function FetchTopic(setData, number, orderBy) {
  const unsplashHome = createApi({
    accessKey: import.meta.env.VITE_ACCESKEYHOME,
  });

  useEffect(() => {
    const responsive = window.innerWidth < 768 ? 6 : 12;

    if (number !== isNaN) {
      number = responsive;
    }
    unsplashHome.topics
      .list({
        page: 1,
        perPage: number,
        orderBy,
      })
      .then((result) => {
        setData(result ? result : null);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);
}
