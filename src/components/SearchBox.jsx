import Masonry from "@mui/lab/Masonry";

import InfiniteScroll from "react-infinite-scroll-component";

export default function SearchBox({ dataSearch, moreData }) {
  return (
    <section className="  w-full min-h-[calc(100vh-_5rem)] h-auto  lg:p-10 flex flex-col items-center py-20 lg:py-24">
      <InfiniteScroll
        pullDownToRefreshThreshold={"250px"}
        className="w-full h-auto flex flex-col items-center"
        dataLength={dataSearch ? dataSearch.length : null}
        next={moreData ? moreData : null}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
          {dataSearch?.map((item) => (
            <article
              key={item.id}
              className="w-auto h-auto flex flex-col gap-2 fadeIn"
            >
              <div className="w-auto h-auto ">
                <img
                  src={item.urls.small}
                  alt={item.alt_description}
                  className="rounded-3xl"
                />
              </div>
              <p className="font-semibold text-left">{item.alt_description}</p>
              <div className="flex  gap-2 items-center">
                <img
                  src={item.user.profile_image.small}
                  alt="user photo"
                  className="rounded-full"
                />
                <h3>{item.user.username}</h3>
              </div>
            </article>
          ))}
        </Masonry>
      </InfiniteScroll>
    </section>
  );
}
