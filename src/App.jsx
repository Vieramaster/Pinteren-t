import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import FooterMobile from "./components/FooterMobile";
import HomeSection from "./components/HomeSection";
import Discover from "./components/Discover";
import SearchBox from "./components/SearchBox";
import { createApi } from "unsplash-js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});
  const [activeComponent, setActiveComponent] = useState(1);

  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESKEY,
  });

  let index = useRef(1);



useEffect(() => {
  if (searchValue) {
    setActiveComponent(3);

    api.search
      .getPhotos({ query: searchValue, perPage: 20, page: index.current })
      .then((result) => {
        setData(result ? result : null);
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
        if (Array.isArray(result.response.results)) {
          setData((prevData) => ({
            ...prevData,
            response: {
              ...prevData.response,
              results: prevData.response.results.concat(
                result.response.results
              ),
            },
          }));
        }
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };



  return (
    <>
      <Header {...{ setSearchValue, setActiveComponent, activeComponent }} />
      {activeComponent === 1 && <HomeSection {...{activeComponent, api}} />}
      {activeComponent === 2 && <Discover />}
      {activeComponent === 3 && <SearchBox {...{data, moreData}} />}
      <FooterMobile />
    </>
  );
}
