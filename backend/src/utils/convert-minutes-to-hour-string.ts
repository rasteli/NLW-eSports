export function convertMinutesToHourString(minutesAmount: number) {
  // 1100 -> "18:20"
  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  /* Adds a "0" to the string if its length is less than 2 */
  const paddedHours = String(hours).padStart(2, "0")
  const paddedMinutes = String(minutes).padStart(2, "0")

  return `${paddedHours}:${paddedMinutes}`
}
