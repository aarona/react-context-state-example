import React, { createContext, useState } from 'react'
import { IStore, UseStateTuple, IPerson } from '../util'

interface Props {

}

export const StoreContext = createContext<IStore | null>(null)

export const StoreProvider:React.FC<Props> = ({ children }) => {
  const intialPeople:IPerson[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Mabel',
      age: 31
    },
    {
      id: 3,
      firstName: 'Jason',
      lastName: 'Smith',
      age: 28
    },
    {
      id: 4,
      firstName: 'David',
      lastName: 'Anderson',
      age: 36
    }
  ]
  const people: UseStateTuple<IPerson[]> = useState(intialPeople)
  const store:IStore = {
    people
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}