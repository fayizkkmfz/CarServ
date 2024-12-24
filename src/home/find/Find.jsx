import React from 'react'
import './find.css'
import { FaLocationCrosshairs } from "react-icons/fa6"


function Find() {
  return (
    <>   
 <div className='map'>
    <div className="searchbar">
    <input className='input' type="text" placeholder='Enter You Location'/>
    <button className='go-btn'>Go</button>
    </div>
</div>
   
    </>
  )
}

export default Find