import { useParams } from "react-router";
import { pexelsApiCall } from "../../shared/hooks/useFetchPexels";
const PhotoGalleryPage = () => {
  const params = useParams();

  const key = params["photos"];
  if (!params || !key) return;

  const result = pexelsApiCall(key);
  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      <ul>{}</ul>
    </main>
  );
};

export default PhotoGalleryPage;
