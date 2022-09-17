import { prismaClient } from "../prisma"
import { Ad } from "../utils/validate-body-with-zod"
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes"

export class CreateAdService {
  async execute(
    gameId: string,
    name: string,
    yearsPlaying: number,
    discord: string,
    weekDays: number[],
    hourStart: string,
    hourEnd: string,
    useVoiceChannel: boolean
  ) {
    try {
      Ad.parse({
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays,
        hourStart,
        hourEnd,
        useVoiceChannel
      })

      const ad = await prismaClient.ad.create({
        data: {
          name,
          gameId,
          discord,
          yearsPlaying,
          useVoiceChannel,
          weekDays: weekDays.join(","),
          hourEnd: convertHourStringToMinutes(hourEnd),
          hourStart: convertHourStringToMinutes(hourStart)
        }
      })

      return { data: { ad }, code: 201 }
    } catch {
      return { data: { error: "Ops! Something went wrong..." }, code: 500 }
    }
  }
}
