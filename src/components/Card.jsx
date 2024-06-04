import Masonry from "@mui/lab/Masonry";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Card({data, moreData}) {
  return (
<InfiniteScroll
      pullDownToRefreshThreshold={"250px"}
      className="w-full h-auto flex flex-col items-center"
        dataLength={
          data && data.response && data.response.results !== undefined
            ? data.response.results.length
            : null
        }
        next={moreData? moreData : null}
        hasMore={true}
        loader={<h4>Loading...</h4>
        
      }
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
          {data && data.response && data.response.results !== undefined
            ? data.response.results.map((item) => (
                <article
                  key={item.id}
                  className="w-auto h-auto flex flex-col gap-2"
                >
                  <div className="w-auto h-auto ">
                    <img
                      src={item.urls.small}
                      alt={item.alt_description}
                      className="rounded-3xl"
                    />
                  </div>
                  <p className="font-semibold text-left">
                    {item.alt_description}
                  </p>
                  <div className="flex  gap-2 items-center">
                    <img
                      src={item.user.profile_image.small}
                      alt="user photo"
                      className="rounded-full"
                    />
                    <h3>{item.user.username}</h3>
                  </div>
                </article>
              ))
            : null}
        </Masonry>
      </InfiniteScroll>
  );
}
