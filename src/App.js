import React from 'react'
import './App.css'
import { AddPerson } from './components/AddPerson'
import { People } from './components/People'
function App() {
  return <>
    <People />
    <AddPerson type="people" description="Here is a description..." />
  </>
}

export default App;
