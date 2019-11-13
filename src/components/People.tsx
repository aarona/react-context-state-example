import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { UseStateTuple, IPerson } from '../util'

interface Props {

}

type CustomMouseEvent = React.MouseEvent<HTMLInputElement, MouseEvent>

export const People: React.FC<Props> = () => {
  const { people } = useContext(StoreContext)!
  const [data, setData]: UseStateTuple<IPerson[]> = people
  
  const removeItem = (e:CustomMouseEvent) => {
    const id = parseInt(e.currentTarget.value)
    const newData = data.filter(p => { return p.id !== id })
    setData(newData)
  }

  return <div>
    <ul>
      {data.map((p, i) => {
        return <li key={i}>
          <div>
            Name: {p.firstName} {p.lastName}
            <input type="button" onClick={removeItem} value={p.id} />
          </div>
          <div>Age: {p.age}</div>
        </li>
      })}
    </ul>
  </div>
}