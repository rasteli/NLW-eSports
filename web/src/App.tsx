import "keen-slider/keen-slider.min.css"

import * as Dialog from "@radix-ui/react-dialog"

import { GameSlider } from "./components/GameSlider"
import { CreateAdDialog } from "./components/CreateAdDialog"
import { CreateAdBanner } from "./components/CreateAdBanner"

import logoImg from "./assets/logo.svg"

function App() {
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

      <GameSlider />

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdDialog />
      </Dialog.Root>
    </div>
  )
}

export default App
