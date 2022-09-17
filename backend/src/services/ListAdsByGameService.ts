import { prismaClient } from "../prisma"
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string"

export class ListAdsByGameService {
  async execute(gameId: string) {
    try {
      const ads = await prismaClient.ad.findMany({
        where: {
          gameId
        },
        select: {
          id: true,
          name: true,
          gameId: true,
          hourEnd: true,
          weekDays: true,
          hourStart: true,
          yearsPlaying: true,
          useVoiceChannel: true
        },
        orderBy: {
          createdAt: "desc"
        }
      })

      return {
        data: {
          ads: ads.map(ad => ({
            ...ad,
            weekDays: ad.weekDays.split(",").map(Number),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
            hourStart: convertMinutesToHourString(ad.hourStart)
          }))
        },
        code: 200
      }
    } catch {
      return { data: { error: "Ops! Something went wrong..." }, code: 500 }
    }
  }
}
