import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useParams } from "react-router";

const PhotoGalleryPage = () => {
  const {photos} = useParams();
  
   const { data, error, isLoading } = useFetchPexels(photos as string);

  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Cargando...</p>
      ) : !data || data.pages.length === 0 ? (
        <p>No hay items</p>
      ) : (
             <ul className="columns-3  gap-4 ">
        {data.pages.flat().map((photo) => (
         <li key={photo.id}>
           <img
            src={photo.url}
            alt={photo.photographer}
            className="w-full h-auto object-cover rounded"
          />
         </li>
        ))}
      </ul>
      )}
    </main>
  );
  /**
   *
   */
};

export default PhotoGalleryPage;
