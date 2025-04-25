 import React, { useState } from 'react'

const State = () => {

    const  [count,setCount]=useState(0);

    const countHandler1 =()=>{
        setCount(()=>count+1)
    }

    const countHandler2 =()=>{
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }
      
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={countHandler1}> Increment</button>
      <button onClick={countHandler2}> Decrement</button>
    </div>
  )
}
export default State;
 
