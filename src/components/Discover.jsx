import { useState } from "react";
import CardList from "./CardList";
import FetchTopic from "./CustomHooks/FetchTopic";

export default function Discover({ setSearchValue }) {
  const [dataDiscover, setDataDiscover] = useState({});

  FetchTopic(setDataDiscover, 20, "position");

  return (
    <section className="  w-full min-h-[calc(100vh-_5rem)] h-auto  lg:p-10 flex flex-col items-center py-20 lg:py-24">
      <h2 className="text-fourth-color font-semibold w-full text-center h-10 text-xl lg:text-5xl">
        list of topics
      </h2>
      <CardList setSearchValue={setSearchValue} data={dataDiscover}  />
    </section>
  );
}
