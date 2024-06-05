import { Masonry } from "@mui/lab";

export default function CardList({setSearchValue, data}) {
  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 4, xl: 5 }}
      spacing={4}
      className="justify-center "
    >
      {data && data.response && data.response.results !== undefined
        ? data.response.results.map((item, index) => {
            return (
              <button
                onClick={() => setSearchValue(item.slug)}
                key={index}
                className="relative rounded-xl overflow-auto w-full "
              >
                <span className="absolute inset-0 bg-black bg-opacity-50"></span>
                <img
                  src={item.cover_photo.urls.small_s3}
                  alt={item.cover_photo.alt_description}
                  className="w-full h-full"
                />
                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl">
                  {item.slug}
                </h3>
              </button>
            );
          })
        : null}
    </Masonry>
  );
}
