import React, { useContext, useState } from 'react'
import { StoreContext } from './StoreContext'

export const AddPerson = ({type, description}) => {
  const [input, setInput] = useState('')
  const {
    [type]: [data, setData]
  } = useContext(StoreContext)
  const onSubmit = (e) => {
    e.preventDefault()
    setData([...data, input])
    setInput('')
  }

  return <div>
    <form onSubmit={onSubmit}>
    <input
      placeholder={description}
      type="text"
      value={input}
      onChange={e => setInput(e.target.value)}
    />
    <input type="submit" value="Add"/>
    </form>
  </div>
}