import { prismaClient } from "../prisma"

export class GetDiscordByAdService {
  async execute(adId: string) {
    try {
      const ad = await prismaClient.ad.findUniqueOrThrow({
        where: {
          id: adId
        },
        select: {
          discord: true
        }
      })

      return { data: { discord: ad.discord }, code: 200 }
    } catch {
      return { data: { error: "Ops! Something went wrong..." }, code: 500 }
    }
  }
}
