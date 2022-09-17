import React, { useState } from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

interface ToggleWeekDaysProps {
  weekDays: string[]
  setWeekDays: React.Dispatch<React.SetStateAction<string[]>>
}

type ToggleGroupItemProps = ToggleGroup.ToggleGroupItemProps &
  React.RefAttributes<HTMLButtonElement> & { day: string }

function ToggleGroupItem({ day, ...rest }: ToggleGroupItemProps) {
  return (
    <ToggleGroup.Item
      {...rest}
      className="w-8 h-8 rounded bg-zinc-900 data-state-on:bg-violet-500 transition-all"
    >
      {day}
    </ToggleGroup.Item>
  )
}

export function ToggleWeekDays({ weekDays, setWeekDays }: ToggleWeekDaysProps) {
  return (
    <ToggleGroup.Root
      type="multiple"
      className="grid grid-cols-4 gap-2"
      value={weekDays}
      onValueChange={setWeekDays}
    >
      <ToggleGroupItem value="0" title="Domingo" day="D" />
      <ToggleGroupItem value="1" title="Segunda" day="S" />
      <ToggleGroupItem value="2" title="Terça" day="T" />
      <ToggleGroupItem value="3" title="Quarta" day="Q" />
      <ToggleGroupItem value="4" title="Quinta" day="Q" />
      <ToggleGroupItem value="5" title="Sexta" day="S" />
      <ToggleGroupItem value="6" title="Sábado" day="S" />
    </ToggleGroup.Root>
  )
}
