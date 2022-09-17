import { useContext, useEffect, useState, createContext } from "react"

import { api } from "../services/api"

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

interface GameProviderProps {
  children: React.ReactNode
}

interface GameContextData {
  games: Game[]
  getGameIdByTitle(gameTitle: string): string | undefined
}

interface GamesResponse {
  games: Game[]
}

const GameContext = createContext({} as GameContextData)

export function useGame() {
  return useContext(GameContext)
}

export function GameProvider({ children }: GameProviderProps) {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await api.get<GamesResponse>("/games")
      setGames(response.data.games)
    })()
  }, [])

  function getGameIdByTitle(gameTitle: string) {
    const gameId = games.find(game => game.title === gameTitle)?.id
    return gameId
  }

  const value: GameContextData = {
    games,
    getGameIdByTitle
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
