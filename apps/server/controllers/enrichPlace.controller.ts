import type { Request, Response } from "express"
import { getLang } from "../services/geocode.service"
import { getPlaceFact } from "../services/wiki.service"

export async function enrichPlace(req: Request, res: Response) {
  const { place } = req.body
  if (!place) {
    return res.status(400).json({ error: "Place is required" })
  }

  const geo = await getLang(place)
  if (!geo) {
    return res.status(404).json({ error: "Place not found" })
  }

  const fact = await getPlaceFact(place)


  res.json({
    valid: true,
    name: geo.name,
    latitude: geo.lat,
    longitude: geo.lng,
    fact: fact || "No fact available",
  })
}
