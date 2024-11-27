import React from 'react'
import { useState } from 'react'

function Input() {

  const [name, setname]=useState("nardi")
  const [Increa, setincrease]=useState(0)
  const handleName =()=>{
       setname("abdu")
  }

  const Increase=()=>{
    setincrease(Increa+1)
  }

  return (
    <div>
        
    {name}<br></br>
    {Increa}
    {/* <button onClick={handleName}>click me</button> */}
    <button onClick={Increase}>Increase me</button>
    

    </div>
  )
}

export default Input
