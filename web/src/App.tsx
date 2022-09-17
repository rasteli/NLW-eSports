import * as Dialog from "@radix-ui/react-dialog"

import { GameBanner } from "./components/GameBanner"
import { CreateAdDialog } from "./components/CreateAdDialog"
import { CreateAdBanner } from "./components/CreateAdBanner"

import logoImg from "./assets/logo.svg"
import { useGame } from "./contexts/GameContext"

function App() {
  const { games } = useGame()

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games?.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdDialog />
      </Dialog.Root>
    </div>
  )
}

export default App
