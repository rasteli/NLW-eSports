import * as Select from "@radix-ui/react-select"
import { CaretDown, CaretUp, Check } from "phosphor-react"

import { useGame } from "../../contexts/GameContext"

export function SelectGame() {
  const { games } = useGame()

  return (
    <Select.Root name="game">
      <Select.Trigger className="relative flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm data-placeholder:text-zinc-500">
        <Select.Value placeholder="Selecione o game que deseja jogar" />
        <CaretDown className="text-white" />
      </Select.Trigger>

      <Select.Portal className="relative">
        <Select.Content className="bg-zinc-900 rounded p-4 fixed top-2 left-1 shadow-lg shadow-black/20">
          <Select.ScrollUpButton className="m-auto">
            <CaretUp className="text-white" size={20} />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group className="flex flex-col gap-2">
              {games?.map(game => (
                <Select.Item
                  key={game.id}
                  value={game.title}
                  className="hover:bg-violet-500 hover:data-state-unchecked:text-white font-semibold rounded flex gap-1 py-1 px-2 outline-none items-center data-state-checked:text-white data-state-unchecked:text-zinc-500"
                >
                  <Select.ItemText>{game.title}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="text-white" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <CaretDown className="text-white" size={20} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
