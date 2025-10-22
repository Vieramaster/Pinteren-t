/**
 * GallerySkeleton
 *
 * Lightweight, presentational skeleton used as a placeholder while gallery images load.
 *
 * The component renders an unordered list (<ul>) that uses CSS columns to create a
 * masonry-like layout. It generates a fixed number of placeholder items (12) and
 * cycles through a predefined set of height utility classes to give a varied,
 * organic appearance to the skeleton items.
 *
 * Key behaviors and implementation notes:
 * - Renders 12 <li> elements as placeholders.
 * - Heights are defined in the internal `heights` array and reused via modulo indexing
 *   so placeholders appear with varied vertical sizes.
 * - Uses utility classes for layout and appearance:
 *   - Parent: columns-[25rem] for column layout, p-10 padding, gap-10 spacing.
 *   - Items: break-inside-avoid to prevent column breaks inside items, rounded-2xl,
 *     shadow-md, bg-soft and animate-pulse for a pulsing skeleton effect.
 * - Purely presentational: items contain no interactive content or semantic image markup.
 *
 * Accessibility:
 * - As a purely decorative/loading UI, consider marking the skeleton as hidden from
 *   assistive technologies (for example, aria-hidden="true" on the container) so it
 *   does not distract screen reader users. When actual content is available, replace
 *   the skeleton with real semantic markup.
 *
 * Usage:
 * - Use this component whenever a gallery or grid of images is being loaded to provide
 *   visual structure and reduce layout shift.
 *
 * @returns {JSX.Element} A list of animated placeholder items representing a loading gallery.
 */


export const GallerySkeleton = () => {
  const heights = [
    "h-[32rem]",
    "h-[43rem]",
    "h-[22rem]",
    "h-[37rem]",
    "h-[20rem]",
    "h-[14rem]",
  ];
  return (
    <ul className="columns-[25rem] p-10 gap-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <li
          key={i}
          className={`bg-soft animate-pulse break-inside-avoid mb-10 rounded-2xl  shadow-md  duration-200 ${
            heights[i % heights.length]
          }`}
        ></li>
      ))}
    </ul>
  );
};
