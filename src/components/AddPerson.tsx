import React, { useContext, useState } from 'react'
import { StoreContext } from './StoreContext'
import { IPerson } from '../util'

type CustomeFormEvent = React.FormEvent<HTMLFormElement>

interface Props {
}

export const AddPerson: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const { people: [data, setData] } = useContext(StoreContext)!
  const onSubmit = (e: CustomeFormEvent) => {
    e.preventDefault()
    const person:IPerson = {
      id: Math.floor(Math.random() * 100000),
      firstName,
      lastName,
      age: parseInt(age)
    }
    setData([...data, person])
    setFirstName('')
    setLastName('')
    setAge('')
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <input type="submit" value="Add"/>
    </form>
  </div>
}