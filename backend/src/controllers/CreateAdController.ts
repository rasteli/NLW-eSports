import { Request, Response } from "express"
import { CreateAdService } from "../services/CreateAdService"

export class CreateAdController {
  async handle(request: Request, response: Response) {
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel
    } = request.body
    const gameId = request.params.id

    const service = new CreateAdService()
    const result = await service.execute(
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel
    )

    return response.status(result.code).json(result.data)
  }
}
