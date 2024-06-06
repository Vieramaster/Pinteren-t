import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import FooterMobile from "./components/FooterMobile";
import Home from "./components/Home";
import Discover from "./components/Discover";
import SearchBox from "./components/SearchBox";
import { createApi } from "unsplash-js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [activeComponent, setActiveComponent] = useState(2);

  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESKEYEXTRA,
  });

  let index = useRef(1);

  useEffect(() => {
    if (searchValue) {
      setActiveComponent(3);

      api.search
        .getPhotos({ query: searchValue, perPage: 10, page: index.current })
        .then((result) => {
          setDataSearch(result.response.results);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  }, [searchValue]);

  const moreData = () => {
    index.current++;
    api.search
      .getPhotos({ query: searchValue, perPage: 20, page: index.current })
      .then((result) => {
        setDataSearch((prevData) => [...prevData, ...result.response.results]);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };
  console.log(dataSearch);

  return (
    <>
      <Header {...{ setSearchValue, setActiveComponent, activeComponent }} />
      {activeComponent === 1 && <Home {...{ setSearchValue }} />}
      {activeComponent === 2 && <Discover {...{ setSearchValue }} />}
      {activeComponent === 3 && <SearchBox {...{ dataSearch, moreData }} />}
      <FooterMobile />
    </>
  );
}
