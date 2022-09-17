import { Request, Response } from "express"
import { ListGamesService } from "../services/ListGamesService"

export class ListGamesController {
  async handle(request: Request, response: Response) {
    const service = new ListGamesService()
    const result = await service.execute()

    return response.status(result.code).json(result.data)
  }
}
