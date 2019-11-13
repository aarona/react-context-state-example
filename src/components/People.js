import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'

export const People = () => {
  const { people } = useContext(StoreContext)
  const [data, setData] = people
  
  const removeItem = (e) => {
    const index = parseInt(e.target.value)
    const newData = data.filter((d, i) => {
      return i !== index
    })
    setData(newData)
  }

  return <div>
    <ul>
      {data.map((d, i) => <li key={i}>{d} <input type="button" onClick={removeItem} value={i}/></li>)}
    </ul>
  </div>
}