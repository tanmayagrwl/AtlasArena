// src/app.ts
import express from "express"
import enrichRoutes from "./routes/enrichPlace.route"

const app = express()
app.use(express.json())

app.use("/api", enrichRoutes)

export default app
