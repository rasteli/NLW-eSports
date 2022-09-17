import { z } from "zod"

export const Ad = z.object({
  gameId: z.string(),
  name: z.string(),
  yearsPlaying: z.number(),
  discord: z.string(),
  weekDays: z.array(z.number()),
  hourStart: z.string(),
  hourEnd: z.string(),
  useVoiceChannel: z.boolean()
})
