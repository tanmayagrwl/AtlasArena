import axios from "axios"

type GeoResult = {
  name: string
  lat: number
  lng: number
}

export async function getLang(place: string): Promise<GeoResult | null> {
  const url = "https://nominatim.openstreetmap.org/search"
  const response = await axios.get(url, {
    params: {
        q: place,
        format: "json",
        limit:1
    },
    headers:{
        'User-Agent': 'AtlasArena/1.0'
    }
  })

  if (response.data.length === 0) {
    return null
  }

  const result = response.data[0]
  return {
    name: result.display_name,
    lat: parseFloat(result.lat),
    lng: parseFloat(result.lon)
  }
}

