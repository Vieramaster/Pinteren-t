import express from "express";
import { createClient } from "pexels";
import "dotenv/config";

/**
 * Respuesta devuelta por la llamada `photos.search` del cliente de Pexels.
 *
 * Contiene metadatos de búsqueda y un arreglo de objetos de fotos devueltos por la API de Pexels.
 *
 * @remarks
 * - `response.photos` es un arreglo de objetos de foto (generalmente con id, width, height, url, photographer, src, etc.).
 * - `response.total_results` es el número total de fotos que coinciden con la búsqueda.
 * - `response.page` es el número de página actual.
 * - `response.per_page` es la cantidad de resultados solicitados por página (corresponde al parámetro `perPage`).
 * - `response.next_page` y `response.prev_page` pueden estar presentes para la paginación.
 *
 * @example
 * // Desestructurar los campos útiles
 * // const { photos, total_results, page, per_page } = response;
 *
 * @throws {Error} Si la solicitud HTTP falla o la API devuelve un error (por ejemplo, clave API inválida o límite de solicitudes).
 *
 * @see https://www.pexels.com/api/documentation/
 */
const app = express();
const port = 3000;
const client = createClient(process.env["PEXELS_API_KEY"] || "");

app.get("/api/images/", async (req, res) => {
  try {
    const search = (req.query["search"] as string) || "Nature";
    const perPage = Number(req.query["per_page"]) || 15;

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
