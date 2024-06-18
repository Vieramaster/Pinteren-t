import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import FooterMobile from "./components/FooterMobile";
import DialogSesion from "./components/DialogSesion";
import Home from "./components/Home";
import Discover from "./components/Discover";
import SearchBox from "./components/SearchBox";
import { createApi } from "unsplash-js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [activeComponent, setActiveComponent] = useState(1);

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

  const refLogin = useRef(null);

  const toggleLogin = () => {
    if (!refLogin.current) {
      return;
    }
    refLogin.current.hasAttribute("open")
      ? refLogin.current.close()
      : refLogin.current.showModal();
  };

  return (
    <>
      <Header
        {...{
          setSearchValue,
          setActiveComponent,
          activeComponent,
          toggleLogin
        }}
      />
      {activeComponent === 1 && <Home {...{ setSearchValue }} />}
      {activeComponent === 2 && <Discover {...{ setSearchValue }} />}
      {activeComponent === 3 && <SearchBox {...{ dataSearch, moreData }} />}
      <FooterMobile {...{ setActiveComponent, toggleLogin }} />
      <DialogSesion {...{ refLogin, toggleLogin }} />
    </>
  );
}
