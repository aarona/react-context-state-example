import React, { createContext, useState } from 'react'

interface Props {

}

export type UseStateTuple<T> = [T,React.Dispatch<React.SetStateAction<T>>]
export const StoreContext = createContext<IStore | null>(null)
export interface IStore {
  people: UseStateTuple<string[]>
}
export const StoreProvider:React.FC<Props> = ({ children }) => {
  const peoplesNames = ['John', 'Mary', 'Jason', 'David']
  const people: UseStateTuple<string[]> = useState(peoplesNames)
  const store:IStore = {
    people
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}