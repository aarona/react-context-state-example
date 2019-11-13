import React, { createContext, useState } from 'react'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const peoplesNames = ['John', 'Mary', 'Jason', 'David']

  const [people, setPeople] = useState(peoplesNames)

  const store = {
    people: [people, setPeople]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}