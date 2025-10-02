import { DiscoverCardList } from "./components/DiscoverCardList";

const DiscoverPage = () => {
  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      <h1 className="text-4xl font-semibold my-10 m-auto lg:text-5xl 2xl:text-6xl">
        Latests <span className="text-brand">Topics</span>
      </h1>

      <DiscoverCardList />
    </main>
  );
};
export default DiscoverPage;
