import React, { useContext, useState } from 'react'
import { StoreContext, IStore } from './StoreContext'

type CustomeFormEvent = React.FormEvent<HTMLFormElement>

interface Props {
  type: keyof IStore
  description: string
}

export const AddPerson: React.FC<Props> = ({type, description}) => {
  const [input, setInput] = useState('')
  const { [type]: [data, setData] } = useContext(StoreContext)!
  const onSubmit = (e: CustomeFormEvent) => {
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