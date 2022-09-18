import { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"

import { Arrow } from "./Arrow"
import { GameBanner } from "./GameBanner"
import { useGame } from "../contexts/GameContext"

export function GameSlider() {
  const { games } = useGame()

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 15
    }
  })

  useEffect(() => {
    instanceRef.current?.update()
  }, [games])

  return (
    <>
      <div ref={sliderRef} className="keen-slider mt-16 ">
        {games?.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      {instanceRef.current && (
        <>
          <Arrow
            left
            onClick={e => {
              e.stopPropagation() || instanceRef.current?.prev()
            }}
          />
          <Arrow
            onClick={e => {
              e.stopPropagation() || instanceRef.current?.next()
            }}
          />
        </>
      )}
    </>
  )
}
