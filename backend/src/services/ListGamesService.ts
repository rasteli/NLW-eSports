import { prismaClient } from "../prisma"

export class ListGamesService {
  async execute() {
    try {
      const games = await prismaClient.game.findMany({
        include: {
          _count: {
            select: {
              ads: true
            }
          }
        }
      })

      return { data: { games }, code: 200 }
    } catch {
      return { data: { error: "Ops! Something went wrong..." }, code: 500 }
    }
  }
}
