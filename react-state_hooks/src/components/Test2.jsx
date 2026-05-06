import React from 'react'

const Test2 = ({count , onClickHandle}) => {
    const handleClick = () => onClickHandle()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Decrement</button> 
    </div>
  )
}

export default Test2
