import { Router } from "express"

import { CreateAdController } from "./controllers/CreateAdController"
import { ListGamesController } from "./controllers/ListGamesController"
import { ListAdsByGameController } from "./controllers/ListAdsByGameController"
import { GetDiscordByAdController } from "./controllers/GetDiscordByAdController"

const routes = Router()

routes.get("/games", new ListGamesController().handle)
routes.post("/games/:id/ads", new CreateAdController().handle)
routes.get("/games/:id/ads", new ListAdsByGameController().handle)
routes.get("/ads/:id/discord", new GetDiscordByAdController().handle)

export { routes }
