// /api/pexels-search.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios, { isAxiosError } from "axios";

const KEY = process.env["PEXELS_API_KEY"];
const pexels = axios.create({
  baseURL: "https://api.pexels.com",
  timeout: 8000,
  headers: { Authorization: `Bearer ${KEY ?? ""}`, Accept: "application/json" },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1) Solo GET
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  // 2) Key obligatoria
  if (!KEY) return res.status(500).json({ error: "PEXELS_API_KEY faltante" });

  try {
    // 3) Sanear inputs
    const q = String(req.query["q"] ?? "").trim();
    if (!q) return res.status(400).json({ error: "Falta ?q" });
    if (q.length > 200)
      return res.status(400).json({ error: "q demasiado larga" });

    // 4) Parseo robusto + límites
    const perRaw = Number(req.query["per_page"] ?? 12);
    const pageRaw = Number(req.query["page"] ?? 1);
    const per_page =
      Number.isFinite(perRaw) && perRaw > 0 ? Math.min(perRaw, 80) : 12;
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;

    const result = await pexels.get("/v1/search", {
      params: { query: q, per_page, page },
    });

    // 5) Cache pública en edge/CDN
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=120");

    // 7) (opcional) Propagar rate limit si existe
    const rlRemain = result.headers["x-ratelimit-remaining"];
    if (rlRemain !== undefined)
      res.setHeader("X-RateLimit-Remaining", String(rlRemain));

    return res.status(200).json(result.data);
  } catch (e: unknown) {
    // 6) Manejo de errores
    if (!isAxiosError(e)) {
      const msg = e instanceof Error ? e.message : String(e);
      return res.status(502).json({ error: msg });
    }
    if (e.response) {
      const status = e.response.status;
      const payload = e.response.data ?? null;
      if (status === 429)
        return res
          .status(429)
          .json({ error: "Rate limit alcanzado", detail: payload });
      return res
        .status(status)
        .json({ error: `HTTP ${status}`, detail: payload });
    }
    if (e.code === "ECONNABORTED")
      return res.status(504).json({ error: "Timeout a Pexels" });
    return res.status(502).json({ error: e.message || "Upstream error" });
  }
}
