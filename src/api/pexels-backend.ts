import express from "express";
import { createClient } from "pexels";
import "dotenv/config";

const app = express();
const port = 3000;
const client = createClient(process.env["PEXELS_API_KEY"] || "");

app.get("/api/images/", async (req, res) => {
  try {
    const search = (req.query["search"] as string) || "Nature";
    const perPage = Number(req.query["per_page"]) || 10;

    /**
     * Response returned by the Pexels client's photos.search call.
     *
     * Contains search metadata and an array of photo objects returned by the Pexels API.
     *
     * @remarks
     * - `response.photos` is an array of photo objects (typically containing id, width, height, url, photographer, src, etc.).
     * - `response.total_results` is the total number of matching photos for the query.
     * - `response.page` is the current page index.
     * - `response.per_page` is the number of results requested per page (corresponds to the `perPage` parameter).
     * - `response.next_page` and `response.prev_page` may be present for pagination.
     *
     * @example
     * // Destructure useful fields
     * // const { photos, total_results, page, per_page } = response;
     *
     * @throws {Error} If the HTTP request fails or the API returns an error (e.g., invalid API key, rate limiting).
     *
     * @see https://www.pexels.com/api/documentation/
     * 
     */

    const response = await client.photos.search({
      query: search,
      per_page: perPage,
    });
    // response: PhotosWithTotalResults | ErrorResponse

    if ("photos" in response) {
      const photos = response.photos.map((p) => ({
        ...p,
      }));
      return res.json(photos);
    }

    // si llega ErrorResponse
    return res.status(500).json({ error: "Pexels error", details: response });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server failure" });
  }
});
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
