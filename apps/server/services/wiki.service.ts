import axios from "axios"

export async function getPlaceFact(placeName: string) {
  try {
    const encoded = encodeURIComponent(placeName)
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`
    const response = await axios.get(url,{
        headers: {
            'User-Agent': 'AtlasArena/1.0'
        }
    })
    const extract: string | undefined = response.data.extract
    if (!extract) return null
    const firstSentence = extract.split(".")[0] + "."
    return firstSentence
  } catch (error) {
    console.error("Error encoding place name:", error)
    return null
  }
}
