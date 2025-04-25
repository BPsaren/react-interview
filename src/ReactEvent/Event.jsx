import React from 'react'


//let data="Bishnupada"
const Event=(event)=>{
  // alert(data)
   //console.log(data)
   console.log("happy hacking")
}
const EventReact = () => {
  return (
    <div>
      <h1>I am event 
        <button onClick={Event}> Click me here</button> handler</h1>
    </div>
  )
}

export default EventReact;




