import { MagnifyingGlassPlus } from "phosphor-react"
import { DialogTrigger } from "@radix-ui/react-dialog"

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg">
      <div className="bg-[#2a2634] py-6 px-8 rounded-lg flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <DialogTrigger className="bg-violet-500 py-3 px-4 text-white rounded-md hover:bg-violet-600 transition-all flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </DialogTrigger>
      </div>
    </div>
  )
}
