//HOOKS
import { useFetchPexels } from "../../shared/hooks/useFetchPexels";
import { useParams } from "react-router";
//COMPONENTS
import { GallerySkeleton } from "./components/GallerySkeleton";
import { GalleryMasonry } from "./components/GalleryMasonry";
import { GalleryStatus } from "./components/GalleryStatus";
//ILUSTRATIONS
import { EmptySearchIllustration } from "../../shared/illustrations/EmptySearchIllustration";
import { ErrorIllustration } from "../../shared/illustrations/ErrorIllustration";

/**
 * GalleryPage
 *
 * @description - Renders a photo gallery view driven by an optional route parameter.
 *
 * - Reads optional "photos" route param via useParams<{ photos?: string }>()
 *   and uses it as the search query (defaults to "").
 * - Calls useFetchPexels(query) and consumes { data, error, isLoading }.
 * - Renders one of four states: loading, error, empty, success.
 *
 * @remarks
 * - Expects paginated result shape: data.pages is an array of pages.
 * - Side effects (fetching, retries) are handled by the hook.
 *
 * @returns The gallery page root element.
 *
 * @see useFetchPexels
 * @see GallerySkeleton
 * @see GalleryStatus
 * @see GalleryMasonry
 */

const GalleryPage = () => {
  const { photos } = useParams<{ photos?: string }>();

  if (!photos) throw new Error("lala");

  const { data, error, isLoading } = useFetchPexels(photos);
  console.log(data);

  return (
    <main className="w-full bg-surface h-screen pt-20 flex flex-col">
      {isLoading ? (
        <GallerySkeleton />
      ) : error ? (
        <GalleryStatus
          variant="error"
          Illustration={ErrorIllustration}
          title="Something went wrong"
          message="We couldn’t load the gallery. Please try again."
        />
      ) : !data?.pages || data.pages.flat().length === 0 ? (
        <GalleryStatus
          variant="empty"
          Illustration={EmptySearchIllustration}
          title="No results found"
          message="Try adjusting your filters or using different keywords. A small change in your search can make all the difference."
        />
      ) : (
        <GalleryMasonry cardData={data} />
      )}
    </main>
  );
};
export default GalleryPage;
