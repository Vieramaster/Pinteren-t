import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient, PhotosWithTotalResults, ErrorResponse } from "pexels";

// Cliente de Pexels usando API key de entorno
const client = createClient(process.env.PEXELS_API_KEY as string);

// Función para buscar fotos
async function fetchPhotos(
  query: string,
  page: number,
  perPage: number
): Promise<PhotosWithTotalResults | ErrorResponse> {
  return client.photos.search({ query, page, per_page: perPage });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*"); // Cambiá * por tu frontend si querés más seguridad
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Manejar preflight OPTIONS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try {
    // Destructuring con defaults y parseo seguro
    const { query = "nature", page = "1", per_page = "10" } = req.query;

    const pageNum = Number(page);
    const perPageNum = Number(per_page);

    if (isNaN(pageNum) || isNaN(perPageNum)) {
      return res
        .status(400)
        .json({ error: "Parámetros 'page' o 'per_page' inválidos" });
    }

    const result = await fetchPhotos(query as string, pageNum, perPageNum);

    return res.status(200).json(result);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error fetching photos:", errorMessage);
    return res.status(500).json({ error: "Error al buscar imágenes" });
  }
}
