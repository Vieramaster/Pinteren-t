import Card from "./Card";

export default function HomeSection({ data, moreData }) {
  return (
    <section className=" w-full min-h-[calc(100vh-_5rem)] h-auto px-5 lg:px-10">
      <Card {...{ data, moreData }} />
    </section>
  );
}
