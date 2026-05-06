import React from 'react'
import { useState } from 'react'
import Counter from './components/Counter'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState'

const App = () => {
  return (
    <div>
      <Counter />
      <ArrayState />
      <ObjectState />  
    </div>
  )
}

export default App
