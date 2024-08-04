import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Masonry } from "@mui/lab";

export default function Discover({ setSearchValue }) {
  const [dataDiscover, setDataDiscover] = useState([]);

  const unsplashHome = createApi({
    accessKey: import.meta.env.VITE_ACCESKEYHOME2,
  });

  useEffect(() => {
    unsplashHome.topics
      .list({
        page: 1,
        perPage: 15,
      })
      .then((result) => {
        setDataDiscover(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return (
    <section className="  w-full min-h-screen h-auto  py-20  lg:p-10 flex flex-col items-center lg:py-24 ">
      <h1 className="text-fourth-color font-semibold my-5 text-center place-content-center h-10 text-2xl  lg:text-4xl ">
        Latest<span className="text-fifth-color flex-1"> Topics</span>
      </h1>

      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
        {dataDiscover?.map((item, index) => {
          return (
            <button
              onClick={() => setSearchValue(item.slug)}
              key={index}
              className=" relative rounded-xl overflow-hidden w-auto h-auto flex flex-col gap-2 fadeIn group "
            >
              <span className="absolute inset-0 bg-black bg-opacity-50 z-30"></span>
              <img
                src={item.cover_photo.urls.thumb}
                alt={item.cover_photo.alt_description}
                className="h-full w-full group-hover:scale-105 duration-200 ease-in-out"
              />
              <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl z-50">
                {item.slug}
              </h3>
            </button>
          );
        })}
      </Masonry>
    </section>
  );
}
