import React, { useContext } from 'react'
import { StoreContext, UseStateTuple } from './StoreContext'

interface Props {

}

type CustomMouseEvent = React.MouseEvent<HTMLInputElement, MouseEvent>

export const People: React.FC<Props> = () => {
  const { people } = useContext(StoreContext)!
  const [data, setData]: UseStateTuple<string[]> = people
  
  const removeItem = (e:CustomMouseEvent) => {
    const index = parseInt(e.currentTarget.value)
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