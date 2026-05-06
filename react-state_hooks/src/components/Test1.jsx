import React from 'react'

const Test1 = ({count , onClickHandle}) => {
    const handleClick = () => onClickHandle()
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      
    </div>
  )
}

export default Test1
