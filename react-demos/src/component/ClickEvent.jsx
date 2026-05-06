import React from 'react'

const ClickEvent = () => {
    const LogClick = () =>{
        alert("Button Clicked!")
        console.log("Button Clicked")
    }
  return (
    <button onClick={LogClick}>Click ME!</button>
  )
}

export default ClickEvent
