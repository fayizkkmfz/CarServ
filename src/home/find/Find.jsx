import React from 'react'
import './find.css'
import { FaLocationCrosshairs } from "react-icons/fa6"


function Find() {
  return (
    <>   
 <div className='map'>
    <input className='input' type="text" placeholder='Enter You Location'/>
    <FaLocationCrosshairs /> 
    <button>Next</button>
</div>
   
    </>
  )
}

export default Find