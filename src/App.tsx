import React from 'react'
import './App.css'
import { AddPerson } from './components/AddPerson'
import { People } from './components/People'
function App() {
  return <>
    <People/>
    <AddPerson/>
  </>
}

export default App;
