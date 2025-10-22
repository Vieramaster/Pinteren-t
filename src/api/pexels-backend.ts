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
    return res.status(500).json({ error: "Falla en el servidor" });
  }
});
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
