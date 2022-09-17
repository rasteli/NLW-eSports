import { Request, Response } from "express"
import { GetDiscordByAdService } from "../services/GetDiscordByAdService"

export class GetDiscordByAdController {
  async handle(request: Request, response: Response) {
    const adId = request.params.id

    const service = new GetDiscordByAdService()
    const result = await service.execute(adId)

    return response.status(result.code).json(result.data)
  }
}
