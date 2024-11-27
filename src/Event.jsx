import React, { useState } from 'react'

function Event() {
  const[value1,setvalue]=useState("")

  const handle=(e)=>{
    // console.log("event type", e.type)
    // console.log("tirgger element",e.target)
    // console.log("value",e.target.value)
    setvalue(e.target.value)
  }

    return (

    <div>
      <input type="text" 
      
      value={value1} onChange={handle}/>
      <p>{value1}</p>
    
    </div>
  )
}

export default Event
