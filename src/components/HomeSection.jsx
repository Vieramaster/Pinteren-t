import { useState } from "react";
import FetchTopic from "./CustomHooks/FetchTopic";
import CardList from "./CardList";


export default function HomeSection({ setSearchValue }) {
  const [dataHome, setDataHome] = useState({});

  FetchTopic(setDataHome, "responsive", "latest");

  return (
    <section className="  w-full min-h-[calc(100vh-_5rem)] h-auto  lg:p-10 flex flex-col items-center py-20 lg:py-24">
      <h1 className="text-fourth-color font-semibold w-full text-center h-10 text-xl lg:text-3xl">
        Welcome to <span className="text-fifth-color flex-1  ">Pinteren't</span>
      </h1>
      <h3 className="text-fourth-color font-semibold w-full text-center h-10 text-lg lg:text-2xl">
        Latest Topics
      </h3>
      <CardList setSearchValue={setSearchValue} data={dataHome}  />
    </section>
  );
}
