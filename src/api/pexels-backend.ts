import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import { createClient } from "pexels";
import "dotenv/config";

/**
 *
 * pexels-backend.ts
 *
 * @description Servidor Express que actúa como proxy para la API de Pexels.
 * Esto es necesario para ocultar la clave de API y evitar problemas de CORS
 * al hacer solicitudes desde el frontend.
 *
 * @remarks
 * - Escucha en el puerto 4000.
 * - Proporciona un endpoint /api/photos que acepta parámetros de consulta
 *  para buscar fotos en Pexels.
 * - Utiliza la librería "pexels" para interactuar con la API de Pexels.
 * - Maneja errores y responde con un estado 500 en caso de fallos.
 *
 * API:
 * @see https://www.pexels.com/api/documentation/
 *
 * @returns Servidor Express corriendo en http://localhost:4000
 */

dotenv.config();
const app = express();
app.use(cors());

const client = createClient(process.env.PEXELS_API_KEY as string);

app.get("/api/photos", async (req: Request, res: Response) => {
  try {
    const query = (req.query.query as string) || "nature";
    const page = parseInt(req.query.page as string) || 1;
    const per_page = parseInt(req.query.per_page as string) || 10;

    const result = await client.photos.search({ query, page, per_page });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al buscar imágenes" });
  }
});

app.listen(4000, () => console.log("Servidor en http://localhost:4000"));
