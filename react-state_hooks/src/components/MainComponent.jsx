import React, {useState} from 'react'
import Test1 from './Test1'
import Test2 from './Test2'

const MainComponent = () => {
    const [count, setCount] = useState(0)
  return (
    <section>
        <Test1 count = {count} onClickHandle= {() => setCount(count + 2)}/>
        <Test2 count= {count} onClickHandle={()=> setCount(count -2)} />

    </section>
  )
}

export default MainComponent
