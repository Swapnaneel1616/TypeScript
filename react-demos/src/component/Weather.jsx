import React from 'react'

const Weather = ({temperature}) => {
    if (temperature > 25){
        return(
            <div>It is hot</div>
        )
    }
    else{
        return(
            <div>It is cold</div>
        )
    }
  
}

export default Weather
