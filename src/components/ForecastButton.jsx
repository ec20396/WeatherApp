import React from 'react'
import { UilArrowLeft } from '@iconscout/react-unicons'

function ForecastButton({onClick}) {

  {/* The function to enable the clickeven */}
  return (
    <div className="cursor-pointer text-white flex justify-start my-5 transition ease-in-out hover:scale-125">
        <UilArrowLeft/>
        <button onClick={onClick} className="transition-all delay-75 ease-in-out">Forecast</button>
    </div>
    
  )
}

export default ForecastButton