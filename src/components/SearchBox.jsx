import Card from "./Card";

export default function SearchBox({ data, moreData }) {
  return (
    <section className="  w-full min-h-[calc(100vh-_5rem)] h-auto  lg:p-10 flex flex-col items-center py-20 lg:py-24">
      <Card {...{ data, moreData }} />
    </section>
  );
}
