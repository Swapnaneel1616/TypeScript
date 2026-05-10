import React from 'react'
import { useState } from 'react'
import Counter from './components/Counter'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState'
import MainComponent from './components/MainComponent'
import Name from './components/Name'
import Todo from './components/Todo'
import Profile from './components/Profile'
import Shooping from './components/Shooping'
import CopyInput from './components/copyInput'


const App = () => {
  return (
    <div>
      <Counter />
      <ArrayState />
      <ObjectState />  
      <MainComponent />
      <Name />
      <Todo />
      <Profile />
      <Shooping />
      <CopyInput />
    </div>
  )
}

export default App
