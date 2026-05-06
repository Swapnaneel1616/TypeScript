import React from 'react'
import { useState } from 'react'
import Counter from './components/Counter'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState'
import MainComponent from './components/MainComponent'

const App = () => {
  return (
    <div>
      <Counter />
      <ArrayState />
      <ObjectState />  
      <MainComponent />
    </div>
  )
}

export default App
