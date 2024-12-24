import React from 'react'
import './workflow.css'
import car_mech_icon1 from './car-repair-svgrepo-com.svg'
import car_mech_icon2 from './running-repair-man-with-wrench-and-kit-svgrepo-com.svg'
import car_mech_icon3 from './car-mechanic.svg'
import car_mech_icon4 from './car-repair-check-svgrepo-com.svg'

function WorkFlow() {
    const  workFlowData = [
        {
            number:"1",
            heading:"Select The Perfect Car Service",
            descripttion:"from The carserv site or portfolio",
            image:car_mech_icon1
        },
        {
            number:"2",
            heading:"Schedule Free Door Step Pick up",
            descripttion:"We offer free pickup and drop for all srvices booked ",
            image:car_mech_icon2
        },
        {
            number:"3",
            heading:"Track Your Car Service Real-Time",
            descripttion:"We Will Take Care For Everything From Here",
            image:car_mech_icon3
        },
        {
            number:"4",
            heading:"Earn While We Service",
            descripttion:"Spread The Word ! you got 750 , Your Friend got 750!",
            image:car_mech_icon4
        },
        

    ]
  return (
    <div className='flow-page'>
        <h1 className='flow-head'>How CarServ Works ?</h1>
        {workFlowData.map(data=>(

            <div className="flow">
            <div className="shape">
            <h4 className='number'>{data.number}</h4>

            </div>
            <div className="folw-text">
                <h4>{data.heading}</h4>
                <p>{data.descripttion}</p>
            </div>
            <img className='mech-icon' src={data.image} alt="images" />
        </div>
        ))}
    </div>
  )
}

export default WorkFlow