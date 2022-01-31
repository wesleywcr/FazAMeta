/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useState } from 'react'

type Items = {
  id: number
  title: string
  isFinished: boolean
}
type PropsContext = {
  items: Items[]
  setItems: React.Dispatch<React.SetStateAction<Items[]>>
}

export const ListContext = createContext({} as PropsContext)

export function ListProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Items[]>([])
  return (
    <ListContext.Provider value={{ items, setItems }}>
      {children}
    </ListContext.Provider>
  )
}
