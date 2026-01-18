import { Router } from "express"
import { enrichPlace } from "../controllers/enrichPlace.controller"

const router = Router()

router.post("/enrich-place", enrichPlace)

export default router
