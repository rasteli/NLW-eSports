import { Request, Response } from "express"
import { ListAdsByGameService } from "../services/ListAdsByGameService"

export class ListAdsByGameController {
  async handle(request: Request, response: Response) {
    const gameId = request.params.id

    const service = new ListAdsByGameService()
    const result = await service.execute(gameId)

    return response.status(result.code).json(result.data)
  }
}
